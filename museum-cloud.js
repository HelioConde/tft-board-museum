import { createClient } from "https://esm.sh/@supabase/supabase-js@2.117.2";

const SUPABASE_URL = "https://bieihhaobdztjyoweewa.supabase.co";
const SUPABASE_KEY = "sb_publishable_2T2H_S0Lu3qlM42kDUWI9g_3FtYXjUt";
const SHARE_BASE = SUPABASE_URL + "/functions/v1/tft-museum-share";

const client = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
});

let currentUser = null;

function emit(name, detail = {}) {
  window.dispatchEvent(new CustomEvent(name, { detail }));
}

async function loadState() {
  if (!currentUser) return null;
  const { data, error } = await client
    .from("tft_museum_state")
    .select("favorites,notes,updated_at")
    .eq("user_id", currentUser.id)
    .maybeSingle();
  if (error) throw error;
  return data;
}

async function saveState(state) {
  if (!currentUser) return { skipped: true };
  const payload = {
    user_id: currentUser.id,
    favorites: Array.isArray(state.favorites) ? state.favorites : [],
    notes: state.notes && typeof state.notes === "object" ? state.notes : {},
    updated_at: new Date().toISOString()
  };
  const { error } = await client
    .from("tft_museum_state")
    .upsert(payload, { onConflict: "user_id" });
  if (error) throw error;
  return { ok: true };
}

async function mergeLocalState() {
  if (!currentUser) return;
  const remote = await loadState().catch(() => null);
  const localFavorites = JSON.parse(localStorage.getItem("tbm-favorites") || "[]");
  const localNotes = JSON.parse(localStorage.getItem("tbm-notes") || "{}");
  const mergedFavorites = Array.from(new Set([...(remote?.favorites || []), ...localFavorites]));
  const mergedNotes = { ...(remote?.notes || {}), ...localNotes };
  localStorage.setItem("tbm-favorites", JSON.stringify(mergedFavorites));
  localStorage.setItem("tbm-notes", JSON.stringify(mergedNotes));
  await saveState({ favorites: mergedFavorites, notes: mergedNotes });
  emit("museum-cloud-state", { favorites: mergedFavorites, notes: mergedNotes });
}

async function signIn(email) {
  const redirectTo = location.origin + location.pathname;
  const { error } = await client.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: redirectTo, shouldCreateUser: true }
  });
  if (error) throw error;
  return { sent: true };
}

async function signOut() {
  const { error } = await client.auth.signOut();
  if (error) throw error;
}

async function listCollections() {
  if (!currentUser) return [];
  const { data, error } = await client
    .from("tft_museum_collections")
    .select("id,name,description,board_ids,is_public,created_at,updated_at")
    .order("updated_at", { ascending: false });
  if (error) throw error;
  return data || [];
}

async function createCollection({ name, description = "", boardIds = [] }) {
  if (!currentUser) throw new Error("auth_required");
  const { data, error } = await client
    .from("tft_museum_collections")
    .insert({
      user_id: currentUser.id,
      name: String(name || "").trim().slice(0, 80),
      description: String(description || "").trim().slice(0, 500),
      board_ids: Array.from(new Set(boardIds))
    })
    .select("id,name,description,board_ids,is_public,created_at,updated_at")
    .single();
  if (error) throw error;
  emit("museum-collections-changed");
  return data;
}

async function addBoardToCollection(collectionId, boardId) {
  if (!currentUser) throw new Error("auth_required");
  const { data, error } = await client
    .from("tft_museum_collections")
    .select("board_ids")
    .eq("id", collectionId)
    .single();
  if (error) throw error;
  const boardIds = Array.from(new Set([...(data?.board_ids || []), boardId]));
  const result = await client
    .from("tft_museum_collections")
    .update({ board_ids: boardIds, updated_at: new Date().toISOString() })
    .eq("id", collectionId);
  if (result.error) throw result.error;
  emit("museum-collections-changed");
  return boardIds;
}

async function updateCollection(collectionId, changes) {
  if (!currentUser) throw new Error("auth_required");
  const payload = { updated_at: new Date().toISOString() };
  if (typeof changes.name === "string") payload.name = changes.name.trim().slice(0, 80);
  if (typeof changes.description === "string") payload.description = changes.description.trim().slice(0, 500);
  if (typeof changes.is_public === "boolean") payload.is_public = changes.is_public;
  const { error } = await client.from("tft_museum_collections").update(payload).eq("id", collectionId);
  if (error) throw error;
  emit("museum-collections-changed");
}
async function removeCollection(collectionId) {
  if (!currentUser) throw new Error("auth_required");
  const { error } = await client.from("tft_museum_collections").delete().eq("id", collectionId);
  if (error) throw error;
  emit("museum-collections-changed");
}
async function archiveBoards(riotId, region, boards) {
  if (!currentUser || !riotId || !Array.isArray(boards) || !boards.length) return { skipped: true };
  const rows = boards.map(board => ({
    user_id: currentUser.id,
    riot_id: riotId,
    region,
    match_id: String(board.id),
    played_at: Number(board.playedAt || 0),
    payload: {
      id: board.id, set: board.set, placement: board.placement, title: board.title,
      patch: board.patch, date: board.date, time: board.time, playedAt: board.playedAt,
      level: board.level, gold: board.gold, traits: board.traits, rawTraits: board.rawTraits,
      augments: board.augments, units: board.units, real: true, queueId: board.queueId,
      duration: board.duration, damage: board.damage, eliminations: board.eliminations,
      lastRound: board.lastRound, hasTelemetry: board.hasTelemetry
    },
    archived_at: new Date().toISOString()
  }));
  const { error } = await client
    .from("tft_museum_match_archive")
    .upsert(rows, { onConflict: "user_id,region,riot_id,match_id" });
  if (error) throw error;
  return { ok: true, count: rows.length };
}
async function loadArchive(riotId, region) {
  if (!currentUser || !riotId) return [];
  const { data, error } = await client
    .from("tft_museum_match_archive")
    .select("match_id,played_at,payload")
    .eq("riot_id", riotId)
    .eq("region", region)
    .order("played_at", { ascending: false })
    .limit(500);
  if (error) throw error;
  return (data || []).map(row => row.payload).filter(Boolean);
}

async function getWatchProfile(riotId, region) {
  if (!currentUser || !riotId) return null;
  const { data, error } = await client
    .from("tft_museum_watch_profiles")
    .select("riot_id,region,enabled,last_run_at,last_error")
    .eq("riot_id", riotId)
    .eq("region", region)
    .maybeSingle();
  if (error) throw error;
  return data;
}
async function setWatchProfile(riotId, region, enabled) {
  if (!currentUser) throw new Error("auth_required");
  const { error } = await client
    .from("tft_museum_watch_profiles")
    .upsert({
      user_id: currentUser.id,
      riot_id: riotId,
      region,
      enabled: Boolean(enabled),
      updated_at: new Date().toISOString()
    }, { onConflict: "user_id,region,riot_id" });
  if (error) throw error;
  return { enabled: Boolean(enabled) };
}
async function exportUserData() {
  if (!currentUser) throw new Error("auth_required");
  const [state, collections, shares, archive, watches] = await Promise.all([
    client.from("tft_museum_state").select("*").eq("user_id", currentUser.id),
    client.from("tft_museum_collections").select("*").eq("user_id", currentUser.id),
    client.from("tft_museum_public_shares").select("*").eq("user_id", currentUser.id),
    client.from("tft_museum_match_archive").select("*").eq("user_id", currentUser.id).order("played_at",{ascending:false}),
    client.from("tft_museum_watch_profiles").select("*").eq("user_id", currentUser.id)
  ]);
  for (const result of [state, collections, shares, archive, watches]) {
    if (result.error) throw result.error;
  }
  return {
    exported_at: new Date().toISOString(),
    user: { id: currentUser.id, email: currentUser.email || null },
    state: state.data || [],
    collections: collections.data || [],
    shares: shares.data || [],
    archive: archive.data || [],
    watch_profiles: watches.data || []
  };
}
function sharePayload(board) {
  return {
    title: board?.title || "Board TFT",
    placement: Number(board?.placement || 0),
    set: Number(board?.set || 0),
    patch: String(board?.patch || ""),
    date: String(board?.date || ""),
    traits: Array.isArray(board?.traits) ? board.traits.slice(0, 6) : [],
    units: Array.isArray(board?.units) ? board.units.slice(0, 12).map(u => ({
      name: u[0], stars: u[1], items: u[3] || []
    })) : []
  };
}

async function createPublicShare({ kind, riotId, region, board = null, collection = null, boards = [] }) {
  if (!currentUser) throw new Error("auth_required");
  const slug = crypto.randomUUID().replaceAll("-", "").slice(0, 20);
  const payload = board
    ? sharePayload(board)
    : collection
      ? {
          name: collection.name,
          description: collection.description || "",
          board_ids: collection.board_ids || [],
          boards: (boards || []).filter(b => (collection.board_ids || []).includes(b.id)).slice(0, 50).map(b => ({
            id: b.id, title: b.displayTitle || b.title, placement: b.placement, set: b.set, patch: b.patch, date: b.date
          }))
        }
      : {};
  const { error } = await client.from("tft_museum_public_shares").insert({
    slug,
    user_id: currentUser.id,
    kind,
    riot_id: riotId,
    region,
    board_id: board?.id || null,
    payload,
    is_public: true
  });
  if (error) throw error;
  return SHARE_BASE + "?slug=" + encodeURIComponent(slug);
}

function isSignedIn() { return Boolean(currentUser); }
function user() { return currentUser; }

window.MuseumCloud = {
  client,
  signIn,
  signOut,
  saveState,
  loadState,
  listCollections,
  createCollection,
  addBoardToCollection,
  updateCollection,
  removeCollection,
  archiveBoards,
  loadArchive,
  getWatchProfile,
  setWatchProfile,
  exportUserData,
  createPublicShare,
  isSignedIn,
  user
};

async function updateSession(session) {
  currentUser = session?.user || null;
  emit("museum-auth-change", { user: currentUser });
  if (currentUser) await mergeLocalState().catch(console.error);
}

const { data: initial } = await client.auth.getSession();
await updateSession(initial?.session || null);
client.auth.onAuthStateChange((_event, session) => {
  queueMicrotask(() => updateSession(session).catch(console.error));
});

emit("museum-cloud-ready", { user: currentUser });
