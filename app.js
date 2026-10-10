var demoBoards=[
{id:"b1",set:15,placement:1,title:"Rebel Crown",patch:"15.3",date:"05/10/2026",playedAt:0,level:9,gold:18,traits:["7 Rebel","2 Bastion","2 Executioner"],augments:["Demo Augment I","Demo Augment II","Demo Augment III"],units:[["Jinx",2,17,[],"Jinx",4],["Ziggs",2,10,[],"Ziggs",2],["Ekko",2,18,[],"Ekko",3],["Rumble",2,9,[],"Rumble",2],["Viego",2,24,[],"Viego",4],["Senna",2,16,[],"Senna",2],["Aurora",2,23,[],"Aurora",4],["Garen",2,11,[],"Garen",3],["Yuumi",2,12,[],"Yuumi",1]]},
{id:"b2",set:15,placement:2,title:"Bastion Archive",patch:"15.3",date:"04/10/2026",playedAt:0,level:8,gold:7,traits:["6 Bastion","3 Sorcerer"],augments:["Demo Augment I","Demo Augment II"],units:[["Garen",2,3,[],"Garen",3],["Rell",3,4,[],"Rell",2],["Swain",2,10,[],"Swain",2],["Lux",2,18,[],"Lux",1],["Ahri",2,19,[],"Ahri",3],["Taric",2,11,[],"Taric",4],["Morgana",2,17,[],"Morgana",3],["Janna",2,24,[],"Janna",1]]},
{id:"b3",set:15,placement:4,title:"Executioner's Hall",patch:"15.3",date:"03/10/2026",playedAt:0,level:8,gold:3,traits:["4 Executioner","4 Duelist"],augments:[],units:[["Yasuo",2,2,[],"Yasuo",2],["Akali",2,9,[],"Akali",3],["Katarina",3,16,[],"Katarina",2],["Shen",2,10,[],"Shen",2],["Lee",2,18,[],"Lee",4],["Qiyana",2,23,[],"Qiyana",3],["Diana",1,24,[],"Diana",4],["Irelia",2,11,[],"Irelia",1]]},
{id:"b4",set:15,placement:7,title:"The Greed Exhibit",patch:"15.2",date:"02/10/2026",playedAt:0,level:8,gold:41,traits:["4 Rebel","2 Bastion"],augments:[],units:[["Jinx",1,17,[],"Jinx",4],["Ziggs",2,18,[],"Ziggs",2],["Rumble",1,10,[],"Rumble",2],["Garen",2,3,[],"Garen",3],["Senna",2,24,[],"Senna",2],["Ekko",1,11,[],"Ekko",3],["Yuumi",2,25,[],"Yuumi",1],["Viego",1,4,[],"Viego",4]]},
{id:"b5",set:14,placement:1,title:"Golden Frontline",patch:"14.8",date:"28/09/2026",playedAt:0,level:9,gold:12,traits:["6 Vanguard","3 Dynamo"],augments:[],units:[["Leona",3,3,[],"Leona",3],["Braum",2,4,[],"Braum",2],["Vi",2,10,[],"Vi",1],["Zeri",2,18,[],"Zeri",3],["Jhin",2,19,[],"Jhin",4],["Rakan",2,11,[],"Rakan",2],["Sona",2,24,[],"Sona",1],["Sylas",2,17,[],"Sylas",4],["Sett",2,25,[],"Sett",4]]},
{id:"b6",set:14,placement:3,title:"Night Carousel",patch:"14.8",date:"26/09/2026",playedAt:0,level:8,gold:9,traits:["5 Nightbringer","2 Invoker"],augments:[],units:[["Diana",2,17,[],"Diana",4],["Aphelios",2,18,[],"Aphelios",3],["Sejuani",2,3,[],"Sejuani",2],["Morgana",2,10,[],"Morgana",3],["Lee",2,11,[],"Lee",4],["Lissandra",3,24,[],"Lissandra",1],["Yasuo",2,25,[],"Yasuo",2],["Vladimir",2,4,[],"Vladimir",1]]},
{id:"b7",set:14,placement:4,title:"Invoker Study",patch:"14.7",date:"24/09/2026",playedAt:0,level:8,gold:16,traits:["4 Invoker","3 Mystic"],augments:[],units:[["Karma",2,17,[],"Karma",3],["Syndra",2,18,[],"Syndra",1],["Ivern",2,10,[],"Ivern",4],["Lulu",2,11,[],"Lulu",2],["Taric",2,3,[],"Taric",4],["Rell",2,4,[],"Rell",2],["Garen",1,24,[],"Garen",3],["Teemo",1,25,[],"Teemo",4]]},
{id:"b8",set:14,placement:6,title:"Last Roll",patch:"14.7",date:"22/09/2026",playedAt:0,level:7,gold:1,traits:["4 Duelist","2 Mystic"],augments:[],units:[["Yasuo",3,17,[],"Yasuo",2],["Fiora",2,18,[],"Fiora",3],["Jax",2,10,[],"Jax",3],["Irelia",2,11,[],"Irelia",1],["Lee",1,3,[],"Lee",4],["Rell",1,4,[],"Rell",2],["Lulu",2,24,[],"Lulu",2]]}
];
var boards=demoBoards.slice();

var copy={
pt:{eyebrow:"Seu histórico, transformado em coleção",heroTitle:"Cada board conta uma história.",heroText:"Revisite composições, itens, augments e momentos marcantes das suas partidas de TFT em um museu pessoal.",region:"Região",openMuseum:"Abrir meu museu",demoData:"Comece pesquisando um Riot ID. Enquanto isso, exibimos uma coleção demonstrativa.",adReserved:"Espaço reservado para anúncio",collection:"COLEÇÃO",collectionText:"8 boards preservados neste protótipo.",all:"Todos",wins:"Vitórias",favorites:"Favoritos",allSets:"Todos os sets",boards:"Boards",favoriteTrait:"Trait favorita",bestPlacement:"Melhor colocação",prototype:"Projeto independente",riotDisclaimer:"Não é endossado pela Riot Games.",emptyTitle:"Nenhum board aqui ainda.",emptyText:"Mude os filtros para explorar o restante da coleção.",newVersion:"Nova versão disponível.",update:"Atualizar",placement:"Colocação",level:"Nível",gold:"Ouro final",patch:"Patch",traits:"Traits",units:"Unidades",favorite:"Favoritar",unfavorite:"Remover favorito",compareTitle:"Comparar boards",compareHint:"Selecione 2 boards para comparar lado a lado.",compareAction:"Comparar",selected:"selecionados",timelineAll:"Todos",loading:"Consultando seu histórico oficial da Riot…",realData:"Histórico oficial carregado. A posição dos hexes é uma organização visual quando a Riot não fornece posicionamento.",loadError:"Não foi possível carregar o histórico agora. Mantive o museu demonstrativo.",visualLayout:"Arranjo visual — a Match API não informa a posição real das unidades.",loadMore:"Carregar mais partidas",officialSource:"Riot oficial",demoSource:"Demo",recordedPosition:"Posição registrada",visualPosition:"Arranjo visual",about:"Sobre",privacy:"Privacidade",terms:"Termos",contact:"Contato",playerProfile:"PERFIL TFT",avgPlacement:"Colocação média",winRate:"Vitórias",games:"Partidas",museumSearch:"Buscar champion, trait, item...",sortNewest:"Mais recentes",sortBest:"Melhor colocação",sortWorst:"Pior colocação",sortGold:"Mais ouro",allPatches:"Todos os patches",identity:"IDENTIDADE DE JOGO",museumInsights:"O que seu museu revela",augments:"Augments",queue:"Fila",duration:"Duração",damage:"Dano a jogadores",eliminations:"Eliminações",share:"Compartilhar",copyLink:"Copiar link",note:"Nota pessoal",notePlaceholder:"O que você lembra dessa partida?",saved:"Salvo",signatureChampion:"Champion assinatura",mostUsedItem:"Item mais usado",threeStars:"Unidades 3★",setsPlayed:"Sets no museu",items:"Itens",common:"Em comum",onlyHere:"Só neste board",starPower:"Total de estrelas",recentEvolution:"EVOLUÇÃO RECENTE",currentForm:"Forma atual",recentCompare:"Compara suas partidas mais recentes com o bloco anterior disponível no Museum.",trajectory:"TRAJETÓRIA",recentPlacements:"Últimas colocações",placementTrendAria:"Trajetória das últimas colocações",placementDistributionAria:"Distribuição de colocações",hallOfFame:"HALL DA FAMA",preservedMoments:"Momentos preservados",setHistory:"HISTÓRICO POR SET",collectionEvolution:"Evolução da coleção",periodCuts:"Recortes por período",periodCompare:"Comparação mensal e anual com base nas partidas disponíveis no Museum.",collectionsLabel:"COLEÇÕES",savedExhibitions:"Suas exposições salvas",newCollection:"Nova coleção",collectionSearch:"Buscar coleção...",syncLabel:"SINCRONIZAÇÃO",syncTitle:"Leve seu museu para outros dispositivos.",syncCopy:"Entre por e-mail para sincronizar favoritos, notas e coleções.",emailPlaceholder:"seu@email.com",sendAccessLink:"Enviar link de acesso",exportMyData:"Exportar meus dados",signOut:"Sair da conta",addBoard:"Adicionar board",collectionName:"Nome da coleção",optionalDescription:"Descrição opcional",createCollection:"Criar coleção",loadingCollections:"Carregando…",noCollections:"Nenhuma coleção ainda.",boardAdded:"Board adicionado.",collectionAction:"Coleção",exactTelemetry:"Posicionamento final registrado por telemetria confiável.",averageShort:"Média",finalGoldAverage:"Ouro médio final",vsPreviousBlock:"vs. bloco anterior",matchesWord:"partidas",bestResult:"Melhor resultado",mostGoldLeft:"Mais ouro restante",mostThreeStars:"Mais unidades 3★",highestDamage:"Maior dano registrado",thisMonth:"Este mês",previousMonth:"Mês anterior",yearWord:"Ano",noPeriodData:"Sem partidas suficientes nesses períodos.",publicLabel:"PÚBLICA",collectionLabel:"COLEÇÃO",edit:"Editar",makePrivate:"Tornar privada",makePublic:"Tornar pública",copyPublicLink:"Copiar link público",deleteAction:"Excluir",noCollectionFound:"Nenhuma coleção encontrada.",createFirstCollection:"Crie sua primeira coleção.",collectionNamePrompt:"Nome da coleção",collectionDescriptionPrompt:"Descrição da coleção",deleteCollectionConfirm:"Excluir a coleção",autoUpdateOff:"Atualização automática: off",autoUpdateLogin:"Atualização automática: entrar",autoUpdateOn:"Atualização automática: on",autoUpdateError:"Atualização automática: erro",lastUpdate:"Última atualização",sending:"Enviando…",checkEmail:"Confira seu e-mail para entrar no Museum.",preparingExport:"Preparando exportação…",exportDone:"Exportação concluída.",collectionCreated:"Coleção criada",account:"Conta",login:"Entrar",syncActive:"Sincronização ativa neste dispositivo.",syncInactive:"Entre por e-mail para sincronizar favoritos, notas e coleções.",showMoreMuseum:"Mostrar mais no museu",boardsInArchive:"boards no arquivo do Museum."},
en:{eyebrow:"Your history, transformed into a collection",heroTitle:"Every board tells a story.",heroText:"Revisit compositions, items, augments and memorable TFT moments inside your personal museum.",region:"Region",openMuseum:"Open my museum",demoData:"Search a Riot ID to begin. Until then, a demo collection is shown.",adReserved:"Reserved advertising space",collection:"COLLECTION",collectionText:"8 boards preserved in this prototype.",all:"All",wins:"Wins",favorites:"Favorites",allSets:"All sets",boards:"Boards",favoriteTrait:"Favorite trait",bestPlacement:"Best placement",prototype:"Independent project",riotDisclaimer:"Not endorsed by Riot Games.",emptyTitle:"No boards here yet.",emptyText:"Change the filters to explore the rest of the collection.",newVersion:"New version available.",update:"Update",placement:"Placement",level:"Level",gold:"Final gold",patch:"Patch",traits:"Traits",units:"Units",favorite:"Favorite",unfavorite:"Remove favorite",compareTitle:"Compare boards",compareHint:"Select 2 boards to compare side by side.",compareAction:"Compare",selected:"selected",timelineAll:"All",loading:"Loading your official Riot match history…",realData:"Official history loaded. Hex positions are a visual arrangement when Riot does not provide positioning.",loadError:"Could not load match history right now. The demo museum was kept.",visualLayout:"Visual arrangement — Match API does not provide real unit positions.",loadMore:"Load more matches",officialSource:"Official Riot",demoSource:"Demo",recordedPosition:"Recorded position",visualPosition:"Visual arrangement",about:"About",privacy:"Privacy",terms:"Terms",contact:"Contact",playerProfile:"TFT PROFILE",avgPlacement:"Average placement",winRate:"Wins",games:"Games",museumSearch:"Search champion, trait, item...",sortNewest:"Newest",sortBest:"Best placement",sortWorst:"Worst placement",sortGold:"Most gold",allPatches:"All patches",identity:"PLAY IDENTITY",museumInsights:"What your museum reveals",augments:"Augments",queue:"Queue",duration:"Duration",damage:"Player damage",eliminations:"Eliminations",share:"Share",copyLink:"Copy link",note:"Personal note",notePlaceholder:"What do you remember from this match?",saved:"Saved",signatureChampion:"Signature champion",mostUsedItem:"Most used item",threeStars:"3★ units",setsPlayed:"Sets in museum",items:"Items",common:"In common",onlyHere:"Only on this board",starPower:"Star total",recentEvolution:"RECENT EVOLUTION",currentForm:"Current form",recentCompare:"Compares your most recent games with the previous block available in the Museum.",trajectory:"TRAJECTORY",recentPlacements:"Recent placements",placementTrendAria:"Trajectory of recent placements",placementDistributionAria:"Placement distribution",hallOfFame:"HALL OF FAME",preservedMoments:"Preserved moments",setHistory:"SET HISTORY",collectionEvolution:"Collection evolution",periodCuts:"Time periods",periodCompare:"Monthly and yearly comparison based on games available in the Museum.",collectionsLabel:"COLLECTIONS",savedExhibitions:"Your saved exhibitions",newCollection:"New collection",collectionSearch:"Search collections...",syncLabel:"SYNC",syncTitle:"Take your museum across devices.",syncCopy:"Sign in by email to sync favorites, notes and collections.",emailPlaceholder:"you@example.com",sendAccessLink:"Send sign-in link",exportMyData:"Export my data",signOut:"Sign out",addBoard:"Add board",collectionName:"Collection name",optionalDescription:"Optional description",createCollection:"Create collection",loadingCollections:"Loading…",noCollections:"No collections yet.",boardAdded:"Board added.",collectionAction:"Collection",exactTelemetry:"Final positioning recorded by trusted telemetry.",averageShort:"Average",finalGoldAverage:"Average final gold",vsPreviousBlock:"vs. previous block",matchesWord:"games",bestResult:"Best result",mostGoldLeft:"Most gold left",mostThreeStars:"Most 3★ units",highestDamage:"Highest recorded damage",thisMonth:"This month",previousMonth:"Previous month",yearWord:"Year",noPeriodData:"Not enough games in these periods.",publicLabel:"PUBLIC",collectionLabel:"COLLECTION",edit:"Edit",makePrivate:"Make private",makePublic:"Make public",copyPublicLink:"Copy public link",deleteAction:"Delete",noCollectionFound:"No collections found.",createFirstCollection:"Create your first collection.",collectionNamePrompt:"Collection name",collectionDescriptionPrompt:"Collection description",deleteCollectionConfirm:"Delete collection",autoUpdateOff:"Automatic updates: off",autoUpdateLogin:"Automatic updates: sign in",autoUpdateOn:"Automatic updates: on",autoUpdateError:"Automatic updates: error",lastUpdate:"Last update",sending:"Sending…",checkEmail:"Check your email to sign in to the Museum.",preparingExport:"Preparing export…",exportDone:"Export complete.",collectionCreated:"Collection created",account:"Account",login:"Sign in",syncActive:"Sync is active on this device.",syncInactive:"Sign in by email to sync favorites, notes and collections.",showMoreMuseum:"Show more in museum",boardsInArchive:"boards in the Museum archive."}
};

var API_BASE="https://bieihhaobdztjyoweewa.supabase.co/functions/v1";
var lang=localStorage.getItem("tbm-lang")||"pt";
var activeFilter="all",activeSet="all",view="grid",sortMode="newest",searchTerm="",patchValue="all",collectionSearchTerm="";
var favorites=new Set(JSON.parse(localStorage.getItem("tbm-favorites")||"[]"));
function defaultVisibleLimit(){return window.matchMedia("(max-width: 680px)").matches?2:8}
var compareSelection=[],staticData=null,loadedRiotId="",loadedPlatform="br1",nextStart=0,pageSize=20,hasMore=false,visibleLimit=defaultVisibleLimit();
var grid=document.querySelector("#boardGrid"),dialog=document.querySelector("#boardDialog"),setFilter=document.querySelector("#setFilter");

function t(key){return copy[lang][key]||key}
function placementLabel(n){return lang==="pt"?n+"º":"#"+n}
function patchDisplayLabel(value){
  var raw=String(value||"").trim();
  if(!raw||/[?]/.test(raw))return lang==="pt"?"Patch não informado":"Unknown patch";
  var match=raw.match(/(?:^|[^\d])(\d{2}\.\d{1,3})(?:\.\d+)?(?:$|[^\d])/);
  return match?match[1]:raw.replace(/^TFT Unreal Version\s*/i,"");
}
function initials(name){return String(name||"?").split(/\s+/).map(function(p){return p[0]}).join("").slice(0,2).toUpperCase()}
function escapeHtml(value){return String(value==null?"":value).replace(/[&<>"']/g,function(ch){return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[ch]})}
function cleanEntityName(value){var text=String(value||"").split("_").pop()||"Unknown";return text.replace(/^TFT\d*/i,"").replace(/([a-z])([A-Z])/g,"$1 $2").replace(/_/g," ").trim()||"Unknown"}
function staticEntry(data,id){if(!data||!id)return null;if(data[id])return data[id];var normalized=String(id).toLowerCase();return Object.values(data).find(function(entry){return String(entry.id||"").toLowerCase()===normalized})||null}
function assetUrl(kind,entry){if(!staticData||!entry||!entry.image||!entry.image.full)return "";return "https://ddragon.leagueoflegends.com/cdn/"+staticData.version+"/img/tft-"+kind+"/"+encodeURIComponent(entry.image.full)}
function profileIconUrl(id){return staticData&&id?"https://ddragon.leagueoflegends.com/cdn/"+staticData.version+"/img/profileicon/"+Number(id)+".png":""}
function queueLabel(id){var map={1090:"Normal",1100:"Ranked",1110:"Tutorial",1130:"Hyper Roll",1150:"Double Up",1160:"Double Up"};return map[Number(id)]||("TFT "+String(id||""))}
function formatDuration(sec){var s=Math.max(0,Math.round(Number(sec)||0)),m=Math.floor(s/60);return m+"m "+String(s%60).padStart(2,"0")+"s"}
function starText(stars){return Array.from({length:Math.max(1,Number(stars)||1)},function(){return "★"}).join("")}
function rarityCost(rarity){return Math.max(1,Math.min(5,(Number(rarity)||0)+1))}
function visualSlots(count){var preferred=[17,18,16,10,11,9,24,23,25,3,4,2,12,19,15,22,26,5,6,1,13,20,14,21,27,7,8,0];return preferred.slice(0,count)}
function notes(){try{return JSON.parse(localStorage.getItem("tbm-notes")||"{}")}catch(_){return {}}}
var cloudSaveTimer=null;
function queueCloudStateSave(){
 clearTimeout(cloudSaveTimer);
 cloudSaveTimer=setTimeout(function(){
  if(window.MuseumCloud&&window.MuseumCloud.isSignedIn()){
   window.MuseumCloud.saveState({favorites:Array.from(favorites),notes:notes()}).catch(console.error)
  }
 },500)
}
function saveNote(id,value){var all=notes();all[id]=value;localStorage.setItem("tbm-notes",JSON.stringify(all));queueCloudStateSave()}

async function loadStaticData(){
 try{
  var versions=await fetch("https://ddragon.leagueoflegends.com/api/versions.json").then(function(r){return r.json()});
  var version=Array.isArray(versions)&&versions[0]?String(versions[0]):"";
  var base="https://ddragon.leagueoflegends.com/cdn/"+version+"/data/pt_BR/";
  var responses=await Promise.all([
   fetch(base+"tft-champion.json").then(function(r){return r.json()}),
   fetch(base+"tft-item.json").then(function(r){return r.json()}),
   fetch(base+"tft-trait.json").then(function(r){return r.json()}),
   fetch(base+"tft-augments.json").then(function(r){return r.ok?r.json():{data:{}}}).catch(function(){return {data:{}}})
  ]);
  staticData={version:version,champions:responses[0].data||{},items:responses[1].data||{},traits:responses[2].data||{},augments:responses[3].data||{}};
  renderAll();
 }catch(_){}
}

function itemImages(ids){
 return (ids||[]).slice(0,3).map(function(id){var e=staticEntry(staticData&&staticData.items,id),src=assetUrl("item",e);return src?'<img loading="lazy" decoding="async" fetchpriority="low" src="'+src+'" title="'+escapeHtml((e&&e.name)||cleanEntityName(id))+'" alt="">':""}).join("");
}
function localizedTraitName(rawName){
 var entry=rawName?staticEntry(staticData&&staticData.traits,rawName):null;
 if(lang==="pt"&&entry&&entry.name)return String(entry.name);
 return cleanEntityName(rawName);
}
function localizedTraitLabel(raw){
 if(!raw)return "";
 return String(raw.numUnits||"")+" "+localizedTraitName(raw.name);
}
function boardDisplayTitle(board){
 if(board&&board.real&&board.rawTraits&&board.rawTraits[0])return localizedTraitLabel(board.rawTraits[0]);
 return String(board&&board.title||"Board TFT");
}
function traitHtml(board){
 var raws=board.rawTraits||[];
 return (board.traits||[]).map(function(label,i){
  var raw=raws[i],entry=raw?staticEntry(staticData&&staticData.traits,raw.name):null,src=assetUrl("trait",entry);
  var text=raw?localizedTraitLabel(raw):label;
  return '<span class="trait with-icon">'+(src?'<img loading="lazy" decoding="async" src="'+src+'" alt="">':"")+escapeHtml(text)+'</span>'
 }).join("");
}
function augmentHtml(board){
 if(!board.augments||!board.augments.length)return '<span class="trait">—</span>';
 return '<div class="augment-row">'+board.augments.map(function(id){var e=staticEntry(staticData&&staticData.augments,id),src=assetUrl("augment",e),name=(e&&e.name)||cleanEntityName(id);return '<span class="augment-card">'+(src?'<img loading="lazy" decoding="async" fetchpriority="low" src="'+src+'" alt="">':"")+'<span>'+escapeHtml(name)+'</span></span>'}).join("")+'</div>';
}
function miniBoard(board){
 var map=new Map(board.units.map(function(u){return [u[2],{name:u[0],stars:u[1],items:u[3]||[],rawId:u[4]||u[0],rarity:u[5]}]}));
 var cells=Array.from({length:28},function(_,slot){
  var u=map.get(slot);if(!u)return '<div class="hex"></div>';
  var entry=staticEntry(staticData&&staticData.champions,u.rawId),image=assetUrl("champion",entry),cost=rarityCost(u.rarity);
  return '<div class="hex unit" title="'+escapeHtml(u.name)+'"><span class="unit-dot cost-ring cost-'+cost+'">'+(image?'<img loading="lazy" decoding="async" fetchpriority="low" src="'+image+'" alt="" onerror="this.onerror=null;this.src=&quot;./img/tft-board-museum-image-pack/cards/image-placeholder.png&quot;">':initials(u.name))+'<span class="star-row">'+starText(u.stars)+'</span></span><span class="hex-items">'+itemImages(u.items)+'</span></div>';
 }).join("");
 return '<div class="mini-board">'+cells+'</div>';
}
function boardSearchText(b){
 var items=[];(b.units||[]).forEach(function(u){items.push(u[0],u[4]);(u[3]||[]).forEach(function(x){var e=staticEntry(staticData&&staticData.items,x);items.push(x,e&&e.name)})});
 return [boardDisplayTitle(b),b.title,b.patch,b.set].concat((b.rawTraits||[]).map(localizedTraitLabel),b.traits||[],b.augments||[],items).join(" ").toLowerCase();
}
function visibleBoards(){
 var set=activeSet==="all"?setFilter.value:String(activeSet),query=searchTerm.toLowerCase();
 var list=boards.filter(function(b){
  var setOk=set==="all"||String(b.set)===set;
  var patchOk=patchValue==="all"||String(b.patch)===patchValue;
  var filterOk=activeFilter==="all"||(activeFilter==="top4"&&b.placement<=4)||(activeFilter==="win"&&b.placement===1)||(activeFilter==="favorite"&&favorites.has(b.id));
  var searchOk=!query||boardSearchText(b).includes(query);
  return setOk&&patchOk&&filterOk&&searchOk;
 });
 list.sort(function(a,b){if(sortMode==="best")return a.placement-b.placement;if(sortMode==="worst")return b.placement-a.placement;if(sortMode==="gold")return b.gold-a.gold;return (b.playedAt||0)-(a.playedAt||0)});
 return list;
}
function placementIconSrc(place){
 var n=Math.max(1,Math.min(8,Number(place)||8));
 return "./img/icons/placements/item_"+String(n).padStart(2,"0")+".png"
}
function placementBadgeHtml(place){
 return '<span class="placement '+(Number(place)===1?"win":"")+'"><img src="'+placementIconSrc(place)+'" alt="" loading="lazy" decoding="async"><b>'+placementLabel(place)+'</b></span>'
}
function placementInlineHtml(place){
 return '<span class="placement-inline '+(Number(place)===1?"win":"")+'"><img src="'+placementIconSrc(place)+'" alt="" loading="lazy" decoding="async"><b>'+placementLabel(place)+'</b></span>'
}
function render(){
 var allData=visibleBoards(),data=allData.slice(0,visibleLimit);grid.classList.toggle("compact",view==="compact");
 grid.innerHTML=data.map(function(board){
  return '<article class="board-card" data-id="'+escapeHtml(board.id)+'" tabindex="0">'+
  '<button type="button" class="favorite-btn '+(favorites.has(board.id)?"active":"")+'" data-fav="'+escapeHtml(board.id)+'" title="'+(favorites.has(board.id)?t("unfavorite"):t("favorite"))+'" aria-label="'+(favorites.has(board.id)?t("unfavorite"):t("favorite"))+'" aria-pressed="'+favorites.has(board.id)+'">★</button>'+
  '<div class="board-card-top">'+placementBadgeHtml(board.placement)+miniBoard(board)+'</div>'+
  '<div class="board-meta"><div class="board-meta-heading"><h3>'+escapeHtml(boardDisplayTitle(board))+'</h3><button type="button" class="compare-toggle '+(compareSelection.includes(board.id)?"active":"")+'" data-compare="'+escapeHtml(board.id)+'" aria-label="'+t("compareTitle")+': '+escapeHtml(boardDisplayTitle(board))+'" aria-pressed="'+compareSelection.includes(board.id)+'">'+(compareSelection.includes(board.id)?"✓":"＋")+'</button></div><p>Set '+escapeHtml(board.set)+' · '+escapeHtml(board.date)+' <span class="source-badge '+(board.real?"real":"demo")+'">'+(board.real?t("officialSource"):t("demoSource"))+'</span>'+(board.real?'<span class="source-badge '+(board.hasTelemetry?"real":"demo")+'">'+(board.hasTelemetry?t("recordedPosition"):t("visualPosition"))+'</span>':"")+'</p><div class="trait-row">'+traitHtml(board)+'</div>'+
  '<div class="board-card-footer"><span>Lv. '+board.level+'</span><span>'+board.gold+'g</span><span>'+escapeHtml(patchDisplayLabel(board.patch))+'</span></div></div></article>';
 }).join("");
 document.querySelector("#emptyState").classList.toggle("hidden",allData.length>0);
 var reveal=document.querySelector("#revealMoreBtn");if(reveal){reveal.classList.toggle("hidden",allData.length<=visibleLimit);reveal.textContent=t("showMoreMuseum")+" ("+Math.min(defaultVisibleLimit(),Math.max(0,allData.length-visibleLimit))+")"}
 bindCards();
}
function bindCards(){
 document.querySelectorAll(".board-card").forEach(function(card){
  card.addEventListener("click",function(e){if(e.target.closest("[data-fav]")||e.target.closest("[data-compare]"))return;openBoard(card.dataset.id,true)});
  card.addEventListener("keydown",function(e){if(e.key==="Enter")openBoard(card.dataset.id,true)});
 });
 document.querySelectorAll("[data-compare]").forEach(function(btn){btn.addEventListener("click",function(e){e.stopPropagation();var id=btn.dataset.compare;if(compareSelection.includes(id))compareSelection=compareSelection.filter(function(x){return x!==id});else if(compareSelection.length<2)compareSelection.push(id);else compareSelection=[compareSelection[1],id];updateCompareBar();render()})});
 document.querySelectorAll("[data-fav]").forEach(function(btn){btn.addEventListener("click",function(e){e.stopPropagation();var id=btn.dataset.fav;if(favorites.has(id))favorites.delete(id);else favorites.add(id);localStorage.setItem("tbm-favorites",JSON.stringify(Array.from(favorites)));queueCloudStateSave();render()})});
}
function unitListHtml(b){
 return b.units.map(function(u){var e=staticEntry(staticData&&staticData.champions,u[4]||u[0]),image=assetUrl("champion",e),cost=rarityCost(u[5]);return '<span class="unit-chip cost-'+cost+'">'+(image?'<img loading="lazy" decoding="async" fetchpriority="low" src="'+image+'" alt="">':"")+'<span>'+escapeHtml(u[0])+' · '+u[1]+'★</span><span class="item-icons">'+itemImages(u[3])+'</span></span>'}).join("");
}
function updateBoardUrl(id){var url=new URL(location.href);if(id)url.searchParams.set("board",id);else url.searchParams.delete("board");history.replaceState({},"",url)}
function boardShareUrl(id){var url=new URL(location.href);if(loadedRiotId){url.searchParams.set("riot",loadedRiotId);url.searchParams.set("region",loadedPlatform)}url.searchParams.set("board",id);return url.toString()}
async function publicBoardShareUrl(id){
 var b=boards.find(function(x){return x.id===id});
 if(window.MuseumCloud&&window.MuseumCloud.isSignedIn()&&loadedRiotId&&b){
  try{return await window.MuseumCloud.createPublicShare({kind:"board",riotId:loadedRiotId,region:loadedPlatform,board:Object.assign({},b,{title:boardDisplayTitle(b)})})}catch(err){console.error(err)}
 }
 return boardShareUrl(id)
}
async function shareBoard(id){var url=await publicBoardShareUrl(id),b=boards.find(function(x){return x.id===id});try{if(navigator.share)await navigator.share({title:"TFT Board Museum · "+(b?boardDisplayTitle(b):"Board"),url:url});else{await navigator.clipboard.writeText(url);alert(t("saved"))}}catch(_){}}
async function shareProfile(){
 if(!loadedRiotId)return;
 var url=new URL(location.href);url.searchParams.set("riot",loadedRiotId);url.searchParams.set("region",loadedPlatform);url.searchParams.delete("board");
 if(window.MuseumCloud&&window.MuseumCloud.isSignedIn()){
  try{url=new URL(await window.MuseumCloud.createPublicShare({kind:"profile",riotId:loadedRiotId,region:loadedPlatform}))}catch(err){console.error(err)}
 }
 try{if(navigator.share)await navigator.share({title:"TFT Board Museum · "+loadedRiotId,url:url.toString()});else await navigator.clipboard.writeText(url.toString())}catch(_){}
}
async function loadCanvasBitmap(url){
 if(!url)return null;
 try{
  var response=await fetch(url,{mode:"cors"});if(!response.ok)return null;
  var blob=await response.blob();return await createImageBitmap(blob)
 }catch(_){return null}
}
async function exportBoardPng(id){
 var b=boards.find(function(x){return x.id===id});if(!b)return;
 var canvas=document.createElement("canvas");canvas.width=1200;canvas.height=630;var ctx=canvas.getContext("2d");
 var g=ctx.createLinearGradient(0,0,1200,630);g.addColorStop(0,"#171b28");g.addColorStop(1,"#090b12");ctx.fillStyle=g;ctx.fillRect(0,0,1200,630);
 ctx.fillStyle="#d7ad62";ctx.font="700 26px Arial";ctx.fillText("TFT BOARD MUSEUM",70,70);
 ctx.fillStyle="#f5f1e6";ctx.font="700 58px Georgia";ctx.fillText(String(boardDisplayTitle(b)).slice(0,34),70,150);
 ctx.fillStyle="#d7ad62";ctx.font="700 44px Arial";ctx.fillText(placementLabel(b.placement),70,215);
 ctx.fillStyle="#a8abb9";ctx.font="25px Arial";ctx.fillText("Set "+b.set+" · "+b.patch+" · "+b.date,155,212);
 ctx.font="20px Arial";ctx.fillText((b.rawTraits||[]).slice(0,4).map(localizedTraitLabel).join("  ·  ")||(b.traits||[]).slice(0,4).join("  ·  "),70,262);
 var unitData=await Promise.all((b.units||[]).slice(0,12).map(async function(u){
  var champ=staticEntry(staticData&&staticData.champions,u[4]||u[0]);
  var portrait=await loadCanvasBitmap(assetUrl("champion",champ));
  var itemBitmaps=await Promise.all((u[3]||[]).slice(0,3).map(async function(itemId){var e=staticEntry(staticData&&staticData.items,itemId);return await loadCanvasBitmap(assetUrl("item",e))}));
  return {u:u,portrait:portrait,items:itemBitmaps}
 }));
 var x=70,y=315;
 unitData.forEach(function(entry,i){
  var u=entry.u,col=i%6,row=Math.floor(i/6),cx=x+col*175,cy=y+row*125;
  ctx.fillStyle="#202536";ctx.beginPath();ctx.roundRect(cx,cy,155,100,16);ctx.fill();
  if(entry.portrait){ctx.save();ctx.beginPath();ctx.roundRect(cx+8,cy+8,52,52,12);ctx.clip();ctx.drawImage(entry.portrait,cx+8,cy+8,52,52);ctx.restore()}
  ctx.fillStyle="#f0cb83";ctx.font="700 18px Arial";ctx.fillText(String(u[0]).slice(0,11),cx+66,cy+30);
  ctx.fillStyle="#a8abb9";ctx.font="16px Arial";ctx.fillText(starText(u[1]),cx+66,cy+54);
  entry.items.forEach(function(bitmap,j){if(bitmap)ctx.drawImage(bitmap,cx+8+j*29,cy+68,24,24)});
 });
 ctx.fillStyle="#777d90";ctx.font="18px Arial";ctx.fillText("tft-board-museum · "+(loadedRiotId||"demo"),70,600);
 var a=document.createElement("a");a.download="tft-board-"+String(b.id).replace(/[^a-z0-9_-]/gi,"-")+".png";a.href=canvas.toDataURL("image/png");a.click();
}
async function openCollectionPicker(boardId){
 var dlg=document.querySelector("#collectionDialog"),choices=document.querySelector("#collectionChoices"),status=document.querySelector("#collectionStatusMessage");
 if(!window.MuseumCloud||!window.MuseumCloud.isSignedIn()){document.querySelector("#authDialog").showModal();return}
 dlg.dataset.boardId=boardId||"";status.textContent="";choices.innerHTML=t("loadingCollections");dlg.showModal();
 try{
  var list=await window.MuseumCloud.listCollections();
  choices.innerHTML=list.length?list.map(function(x){return '<button type="button" class="collection-choice" data-collection-id="'+escapeHtml(x.id)+'"><strong>'+escapeHtml(x.name)+'</strong><span>'+((x.board_ids||[]).length)+' boards</span></button>'}).join(""):'<span class="collection-empty">'+t("noCollections")+'</span>';
  choices.querySelectorAll("[data-collection-id]").forEach(function(btn){btn.addEventListener("click",async function(){
   try{await window.MuseumCloud.addBoardToCollection(btn.dataset.collectionId,boardId);status.textContent=t("boardAdded");renderCloudCollections()}catch(err){status.textContent=String(err.message||err)}
  })})
 }catch(err){choices.innerHTML='<span class="collection-empty">'+escapeHtml(err.message||err)+'</span>'}
}
function boardSimilarity(a,b){
 if(!a||!b||a.id===b.id)return 0;
 function setOf(values){return new Set((values||[]).filter(Boolean))}
 function jaccard(sa,sb){var union=new Set(Array.from(sa).concat(Array.from(sb)));if(!union.size)return 0;var common=0;sa.forEach(function(x){if(sb.has(x))common++});return common/union.size}
 var au=setOf((a.units||[]).map(function(u){return u[4]||u[0]})),bu=setOf((b.units||[]).map(function(u){return u[4]||u[0]}));
 var at=setOf((a.rawTraits||[]).map(function(x){return x.name})),bt=setOf((b.rawTraits||[]).map(function(x){return x.name}));
 return jaccard(au,bu)*0.72+jaccard(at,bt)*0.28
}
function similarBoards(base){
 return boards.filter(function(b){return b.id!==base.id}).map(function(b){return {board:b,score:boardSimilarity(base,b)}}).filter(function(x){return x.score>=.18}).sort(function(a,b){return b.score-a.score}).slice(0,3)
}
function similarBoardsHtml(base){
 var matches=similarBoards(base);if(!matches.length)return "";
 return '<div class="similar-section"><span class="eyebrow">BOARDS PARECIDOS</span><div class="similar-grid">'+matches.map(function(x){return '<button type="button" class="similar-card" data-similar-board="'+escapeHtml(x.board.id)+'"><span>'+Math.round(x.score*100)+'% parecido</span><strong>'+escapeHtml(boardDisplayTitle(x.board))+'</strong><small>'+placementLabel(x.board.placement)+' · Set '+escapeHtml(x.board.set)+' · '+escapeHtml(x.board.date)+'</small></button>'}).join("")+'</div></div>'
}
function openBoard(id,updateUrl){
 var b=boards.find(function(x){return x.id===id});if(!b)return;
 if(updateUrl)updateBoardUrl(id);
 var note=notes()[id]||"";
 document.querySelector("#dialogContent").innerHTML='<div class="dialog-layout"><div class="dialog-board">'+miniBoard(b)+'</div><div class="dialog-info">'+
 '<span class="eyebrow">Set '+escapeHtml(b.set)+' · '+escapeHtml(b.date)+(b.time?" · "+escapeHtml(b.time):"")+'</span><h2>'+escapeHtml(boardDisplayTitle(b))+'</h2><p class="dialog-placement-line"><span>'+t("placement")+'</span>'+placementInlineHtml(b.placement)+'</p>'+
 '<div class="dialog-stat-grid"><div class="dialog-stat"><span>'+t("level")+'</span><strong>'+b.level+'</strong></div><div class="dialog-stat"><span>'+t("gold")+'</span><strong>'+b.gold+'g</strong></div><div class="dialog-stat"><span>'+t("queue")+'</span><strong>'+escapeHtml(queueLabel(b.queueId))+'</strong></div><div class="dialog-stat"><span>'+t("duration")+'</span><strong>'+formatDuration(b.duration)+'</strong></div><div class="dialog-stat"><span>'+t("damage")+'</span><strong>'+Number(b.damage||0)+'</strong></div><div class="dialog-stat"><span>'+t("eliminations")+'</span><strong>'+Number(b.eliminations||0)+'</strong></div></div>'+
 '<span class="eyebrow">'+t("traits")+'</span><div class="trait-row">'+traitHtml(b)+'</div><span class="eyebrow" style="margin-top:24px">'+t("augments")+'</span>'+augmentHtml(b)+
 '<span class="eyebrow" style="margin-top:24px">'+t("units")+'</span><div class="unit-list">'+unitListHtml(b)+'</div>'+
 '<div class="board-actions"><button class="primary-action" data-share-board="'+escapeHtml(b.id)+'">'+t("share")+'</button><button data-copy-board="'+escapeHtml(b.id)+'">'+t("copyLink")+'</button><button data-export-board="'+escapeHtml(b.id)+'">PNG</button><button data-collection-board="'+escapeHtml(b.id)+'">'+t("collectionAction")+'</button></div>'+
 '<div class="note-box"><label>'+t("note")+'</label><textarea data-note-board="'+escapeHtml(b.id)+'" placeholder="'+t("notePlaceholder")+'">'+escapeHtml(note)+'</textarea></div>'+
 similarBoardsHtml(b)+
 (b.real?'<p class="data-quality-note '+(b.hasTelemetry?"exact":"visual")+'">'+(b.hasTelemetry?t("exactTelemetry"):t("visualLayout"))+'</p>':"")+'</div></div>';
 if(!dialog.open)dialog.showModal();
 var share=document.querySelector("[data-share-board]");if(share)share.addEventListener("click",function(){shareBoard(b.id)});
 var copyBtn=document.querySelector("[data-copy-board]");if(copyBtn)copyBtn.addEventListener("click",async function(){try{await navigator.clipboard.writeText(await publicBoardShareUrl(b.id));copyBtn.textContent=t("saved")}catch(_){}})
 var exportBtn=document.querySelector("[data-export-board]");if(exportBtn)exportBtn.addEventListener("click",function(){exportBoardPng(b.id)});
 var collectionBtn=document.querySelector("[data-collection-board]");if(collectionBtn)collectionBtn.addEventListener("click",function(){openCollectionPicker(b.id)});
 var noteEl=document.querySelector("[data-note-board]");if(noteEl)noteEl.addEventListener("input",function(){saveNote(b.id,noteEl.value)});
 document.querySelectorAll("[data-similar-board]").forEach(function(btn){btn.addEventListener("click",function(){openBoard(btn.dataset.similarBoard,true)})});
}
function closeBoard(){dialog.close();updateBoardUrl("")}

function syncSetFilter(){var current=setFilter.value||"all";var sets=Array.from(new Set(boards.map(function(b){return String(b.set||"")}))).filter(Boolean).sort(function(a,b){return Number(b)-Number(a)});setFilter.innerHTML='<option value="all">'+t("allSets")+'</option>'+sets.map(function(s){return '<option value="'+s+'">Set '+s+'</option>'}).join("");setFilter.value=sets.includes(current)?current:"all"}
function syncPatchFilter(){var el=document.querySelector("#patchFilter"),current=patchValue;var values=Array.from(new Set(boards.map(function(b){return String(b.patch||"")}))).filter(Boolean).sort().reverse();el.innerHTML='<option value="all">'+t("allPatches")+'</option>'+values.map(function(p){return '<option value="'+escapeHtml(p)+'">'+escapeHtml(p)+'</option>'}).join("");el.value=values.includes(current)?current:"all";patchValue=el.value}
function updateStats(){
 var total=boards.length,top4=total?Math.round(boards.filter(function(b){return b.placement<=4}).length/total*100):0,best=total?Math.min.apply(null,boards.map(function(b){return b.placement})):0,counts={};
 boards.forEach(function(b){(b.traits||[]).forEach(function(trait){var name=String(trait).replace(/^\d+\s+/,"");counts[name]=(counts[name]||0)+1})});
 var fav=Object.keys(counts).sort(function(a,b){return counts[b]-counts[a]})[0]||"—";
 document.querySelector("#statBoards").textContent=String(total);document.querySelector("#statTop4").textContent=top4+"%";document.querySelector("#statTrait").textContent=fav;document.querySelector("#statBest").textContent=best?placementLabel(best):"—";
}
function renderInsights(){
 var champs={},items={},three=0,sets=new Set();
 boards.forEach(function(b){sets.add(b.set);b.units.forEach(function(u){champs[u[0]]=(champs[u[0]]||0)+1;if(Number(u[1])>=3)three++;(u[3]||[]).forEach(function(id){var e=staticEntry(staticData&&staticData.items,id),name=(e&&e.name)||cleanEntityName(id);items[name]=(items[name]||0)+1})})});
 function top(map){return Object.keys(map).sort(function(a,b){return map[b]-map[a]})[0]||"—"}
 document.querySelector("#insightGrid").innerHTML='<article class="insight-card"><span>'+t("signatureChampion")+'</span><strong>'+escapeHtml(top(champs))+'</strong><small>'+((champs[top(champs)]||0))+' '+t("games").toLowerCase()+'</small></article>'+
 '<article class="insight-card"><span>'+t("mostUsedItem")+'</span><strong>'+escapeHtml(top(items))+'</strong><small>'+((items[top(items)]||0))+'x</small></article>'+
 '<article class="insight-card"><span>'+t("threeStars")+'</span><strong>'+three+'</strong><small>3★</small></article>'+
 '<article class="insight-card"><span>'+t("setsPlayed")+'</span><strong>'+sets.size+'</strong><small>'+Array.from(sets).sort(function(a,b){return Number(b)-Number(a)}).map(function(x){return "Set "+x}).join(" · ")+'</small></article>';
}
function renderRecentEvolution(){
 var el=document.querySelector("#evolutionGrid");if(!el||!boards.length)return;
 var ordered=boards.slice().sort(function(a,b){return Number(b.playedAt||0)-Number(a.playedAt||0)});
 var recent=ordered.slice(0,10),previous=ordered.slice(10,20);
 function metrics(list){
  if(!list.length)return {avg:null,top4:0,wins:0,gold:0};
  return {
   avg:list.reduce(function(s,b){return s+Number(b.placement||8)},0)/list.length,
   top4:Math.round(list.filter(function(b){return Number(b.placement)<=4}).length/list.length*100),
   wins:list.filter(function(b){return Number(b.placement)===1}).length,
   gold:Math.round(list.reduce(function(s,b){return s+Number(b.gold||0)},0)/list.length)
  }
 }
 var a=metrics(recent),b=metrics(previous),hasPrevious=previous.length>0;
 function delta(current,old,inverse){
  if(!hasPrevious||old==null||current==null)return {text:"—",className:"neutral"};
  var d=current-old,better=inverse?d<0:d>0;
  return {text:(d>0?"+":"")+d.toFixed(1),className:Math.abs(d)<0.05?"neutral":(better?"positive":"negative")}
 }
 var avgDelta=delta(a.avg,b.avg,true),topDelta=delta(a.top4,b.top4,false),winDelta=delta(a.wins,b.wins,false),goldDelta=delta(a.gold,b.gold,false);
 el.innerHTML='<article class="evolution-card"><span>'+t("avgPlacement")+'</span><strong>'+(a.avg!=null?a.avg.toFixed(2):"—")+'</strong><small class="'+avgDelta.className+'">'+avgDelta.text+(hasPrevious?" "+t("vsPreviousBlock"):"")+'</small></article>'+
 '<article class="evolution-card"><span>Top 4</span><strong>'+a.top4+'%</strong><small class="'+topDelta.className+'">'+topDelta.text+(hasPrevious?" p.p.":"")+'</small></article>'+
 '<article class="evolution-card"><span>'+t("wins")+'</span><strong>'+a.wins+'</strong><small class="'+winDelta.className+'">'+winDelta.text+(hasPrevious?" "+t("matchesWord"):"")+'</small></article>'+
 '<article class="evolution-card"><span>'+t("finalGoldAverage")+'</span><strong>'+a.gold+'g</strong><small class="'+goldDelta.className+'">'+goldDelta.text+(hasPrevious?"g":"")+'</small></article>';
 var trend=document.querySelector("#placementTrend"),series=ordered.slice(0,20).reverse();
 if(trend&&series.length){
  var w=800,h=160,padX=34,padY=20,usableW=w-padX*2,usableH=h-padY*2;
  var pts=series.map(function(board,i){var x=padX+(series.length===1?usableW/2:i*(usableW/(series.length-1))),place=Math.max(1,Math.min(8,Number(board.placement)||8)),y=padY+(place-1)*(usableH/7);return {x:x,y:y,p:place,id:board.id}});
  var poly=pts.map(function(p){return p.x.toFixed(1)+","+p.y.toFixed(1)}).join(" ");
  var circles=pts.map(function(p){return '<circle cx="'+p.x.toFixed(1)+'" cy="'+p.y.toFixed(1)+'" r="5" data-trend-board="'+escapeHtml(p.id)+'"><title>'+placementLabel(p.p)+'</title></circle>'}).join("");
  trend.innerHTML='<svg viewBox="0 0 '+w+' '+h+'" preserveAspectRatio="none" aria-hidden="true"><line x1="'+padX+'" y1="'+padY+'" x2="'+(w-padX)+'" y2="'+padY+'" class="trend-guide"/><line x1="'+padX+'" y1="'+(padY+3*usableH/7)+'" x2="'+(w-padX)+'" y2="'+(padY+3*usableH/7)+'" class="trend-guide top4"/><polyline points="'+poly+'" class="trend-line"/>'+circles+'</svg><div class="trend-labels"><span>1º</span><span>4º</span><span>8º</span></div>';
  trend.querySelectorAll("[data-trend-board]").forEach(function(dot){dot.addEventListener("click",function(){openBoard(dot.dataset.trendBoard,true)})})
 }
 var dist=document.querySelector("#placementDistribution");if(dist){
  var counts=Array.from({length:8},function(_,i){return boards.filter(function(board){return Number(board.placement)===i+1}).length}),max=Math.max.apply(null,counts.concat([1]));
  dist.innerHTML=counts.map(function(count,i){var pct=Math.round(count/max*100);return '<div class="placement-bar"><span>'+(i+1)+'º</span><div><i style="width:'+pct+'%"></i></div><strong>'+count+'</strong></div>'}).join("")
 }
}
function renderHallOfFame(){
 var el=document.querySelector("#hallGrid");if(!el||!boards.length)return;
 var best=boards.slice().sort(function(a,b){return a.placement-b.placement||b.damage-a.damage})[0];
 var richest=boards.slice().sort(function(a,b){return b.gold-a.gold})[0];
 var mostThree=boards.slice().sort(function(a,b){
  var aa=a.units.filter(function(u){return Number(u[1])>=3}).length,bb=b.units.filter(function(u){return Number(u[1])>=3}).length;return bb-aa
 })[0];
 var damage=boards.slice().sort(function(a,b){return Number(b.damage||0)-Number(a.damage||0)})[0];
 function card(label,b,value){return '<button class="hall-card" data-open-hall="'+escapeHtml(b.id)+'"><span>'+label+'</span><strong>'+escapeHtml(value)+'</strong><small>'+escapeHtml(boardDisplayTitle(b))+' · '+escapeHtml(b.date)+'</small></button>'}
 el.innerHTML=card(t("bestResult"),best,placementLabel(best.placement))+card(t("mostGoldLeft"),richest,richest.gold+"g")+card(t("mostThreeStars"),mostThree,mostThree.units.filter(function(u){return Number(u[1])>=3}).length+" × 3★")+card(t("highestDamage"),damage,String(damage.damage||0));
 el.querySelectorAll("[data-open-hall]").forEach(function(btn){btn.addEventListener("click",function(){openBoard(btn.dataset.openHall,true)})})
}
function renderSetStats(){
 var el=document.querySelector("#setStatsGrid");if(!el)return;var groups={};
 boards.forEach(function(b){var k=String(b.set||"?");if(!groups[k])groups[k]=[];groups[k].push(b)});
 el.innerHTML=Object.keys(groups).sort(function(a,b){return Number(b)-Number(a)}).map(function(k){
  var list=groups[k],games=list.length,avg=list.reduce(function(s,b){return s+b.placement},0)/games,top4=Math.round(list.filter(function(b){return b.placement<=4}).length/games*100),wins=list.filter(function(b){return b.placement===1}).length;
  var traits={};list.forEach(function(b){(b.traits||[]).forEach(function(tr){var n=String(tr).replace(/^\d+\s+/,"");traits[n]=(traits[n]||0)+1})});var topTrait=Object.keys(traits).sort(function(a,b){return traits[b]-traits[a]})[0]||"—";
  return '<article class="set-stat-card"><span class="eyebrow">Set '+escapeHtml(k)+'</span><div class="set-stat-kpis"><div><small>'+t("games")+'</small><strong>'+games+'</strong></div><div><small>'+t("averageShort")+'</small><strong>'+avg.toFixed(2)+'</strong></div><div><small>Top 4</small><strong>'+top4+'%</strong></div><div><small>'+t("wins")+'</small><strong>'+wins+'</strong></div></div><p>'+escapeHtml(topTrait)+'</p></article>'
 }).join("")
}
function renderPeriodStats(){
 var el=document.querySelector("#periodStatsGrid");if(!el)return;
 var dated=boards.filter(function(b){return Number(b.playedAt||0)>0});
 if(!dated.length){el.innerHTML='<div class="empty period-empty">'+t("noPeriodData")+'</div>';return}
 function build(key,label){
  var list=dated.filter(function(b){var d=new Date(Number(b.playedAt));return key(d)});
  if(!list.length)return "";
  var avg=list.reduce(function(s,b){return s+b.placement},0)/list.length;
  var top4=Math.round(list.filter(function(b){return b.placement<=4}).length/list.length*100);
  var wins=list.filter(function(b){return b.placement===1}).length;
  return '<article class="period-card"><span>'+escapeHtml(label)+'</span><strong>'+list.length+' '+t("matchesWord")+'</strong><small>'+t("averageShort")+' '+avg.toFixed(2)+' · Top 4 '+top4+'% · '+wins+' '+t("wins").toLowerCase()+'</small></article>'
 }
 var now=new Date(),month=now.getMonth(),year=now.getFullYear(),prev=new Date(year,month-1,1),prevM=prev.getMonth(),prevY=prev.getFullYear();
 var items=[
  build(function(d){return d.getFullYear()===year&&d.getMonth()===month},t("thisMonth")),
  build(function(d){return d.getFullYear()===prevY&&d.getMonth()===prevM},t("previousMonth")),
  build(function(d){return d.getFullYear()===year},t("yearWord")+" "+year),
  build(function(d){return d.getFullYear()===year-1},t("yearWord")+" "+(year-1))
 ].filter(Boolean);
 el.innerHTML=items.join("")||'<div class="empty period-empty">'+t("noPeriodData")+'</div>'
}
async function renderCloudCollections(){
 var section=document.querySelector("#cloudCollections"),grid=document.querySelector("#collectionGrid");
 if(!section||!grid)return;
 if(!window.MuseumCloud||!window.MuseumCloud.isSignedIn()){section.classList.add("hidden");return}
 section.classList.remove("hidden");
 try{
  var list=await window.MuseumCloud.listCollections(),query=collectionSearchTerm.toLowerCase();
  var visible=list.filter(function(x){return !query||[x.name,x.description].join(" ").toLowerCase().includes(query)});
  var count=document.querySelector("#collectionCount");if(count)count.textContent=visible.length+" / "+list.length;
  grid.innerHTML=visible.length?visible.map(function(x){return '<article class="collection-card" data-collection-card="'+escapeHtml(x.id)+'"><div><span class="eyebrow">'+(x.is_public?t("publicLabel"):t("collectionLabel"))+'</span><h3>'+escapeHtml(x.name)+'</h3><p>'+escapeHtml(x.description||"")+'</p><div class="collection-actions"><button type="button" data-col-rename="'+escapeHtml(x.id)+'">'+t("edit")+'</button><button type="button" data-col-public="'+escapeHtml(x.id)+'">'+(x.is_public?t("makePrivate"):t("makePublic"))+'</button>'+(x.is_public?'<button type="button" data-col-share="'+escapeHtml(x.id)+'">'+t("copyPublicLink")+'</button>':"")+'<button type="button" data-col-delete="'+escapeHtml(x.id)+'">'+t("deleteAction")+'</button></div></div><strong>'+((x.board_ids||[]).length)+' boards</strong></article>'}).join(""):'<div class="empty">'+(list.length?t("noCollectionFound"):t("createFirstCollection"))+'</div>';
  grid.querySelectorAll("[data-col-rename]").forEach(function(btn){btn.addEventListener("click",async function(){var item=list.find(function(x){return x.id===btn.dataset.colRename});if(!item)return;var name=prompt(t("collectionNamePrompt"),item.name);if(!name||!name.trim())return;var description=prompt(t("collectionDescriptionPrompt"),item.description||"");if(description===null)return;try{await window.MuseumCloud.updateCollection(item.id,{name:name,description:description});renderCloudCollections()}catch(err){alert(String(err.message||err))}})});
  grid.querySelectorAll("[data-col-public]").forEach(function(btn){btn.addEventListener("click",async function(){var item=list.find(function(x){return x.id===btn.dataset.colPublic});if(!item)return;try{await window.MuseumCloud.updateCollection(item.id,{is_public:!item.is_public});renderCloudCollections()}catch(err){alert(String(err.message||err))}})});
  grid.querySelectorAll("[data-col-share]").forEach(function(btn){btn.addEventListener("click",async function(){var item=list.find(function(x){return x.id===btn.dataset.colShare});if(!item||!loadedRiotId)return;try{var boardPayload=boards.map(function(b){return Object.assign({},b,{displayTitle:boardDisplayTitle(b)})});var url=await window.MuseumCloud.createPublicShare({kind:"collection",riotId:loadedRiotId,region:loadedPlatform,collection:item,boards:boardPayload});await navigator.clipboard.writeText(url);btn.textContent="Link copiado"}catch(err){alert(String(err.message||err))}})});
  grid.querySelectorAll("[data-col-delete]").forEach(function(btn){btn.addEventListener("click",async function(){var item=list.find(function(x){return x.id===btn.dataset.colDelete});if(!item||!confirm(t("deleteCollectionConfirm")+" "+item.name+"?"))return;try{await window.MuseumCloud.removeCollection(item.id);renderCloudCollections()}catch(err){alert(String(err.message||err))}})})
 }catch(err){grid.innerHTML='<div class="empty">'+escapeHtml(err.message||err)+'</div>'}
}
async function mergeCloudArchive(){
 if(!loadedRiotId||!window.MuseumCloud||!window.MuseumCloud.isSignedIn())return;
 try{
  await window.MuseumCloud.archiveBoards(loadedRiotId,loadedPlatform,boards.filter(function(b){return b.real}));
  var archived=await window.MuseumCloud.loadArchive(loadedRiotId,loadedPlatform),known=new Set(boards.map(function(b){return String(b.id)})),added=0;
  archived.forEach(function(b){if(b&&b.id&&!known.has(String(b.id))){boards.push(b);known.add(String(b.id));added++}});
  if(added){boards.sort(function(a,b){return Number(b.playedAt||0)-Number(a.playedAt||0)});document.querySelector("#collectionStatus").textContent=boards.length+" "+t("boardsInArchive");renderAll()}
 }catch(err){console.error("museum archive",err)}
}
function renderTimeline(){
 var el=document.querySelector("#timeline");if(!el)return;
 var groups={};
 boards.forEach(function(b){
  var setKey=String(b.set||"?");
  if(!groups[setKey])groups[setKey]={count:0,patches:{}};
  groups[setKey].count++;
  var patchKey=String(b.patch||"—");
  groups[setKey].patches[patchKey]=(groups[setKey].patches[patchKey]||0)+1;
 });
 var keys=Object.keys(groups).sort(function(a,b){return Number(b)-Number(a)});
 var setButtons='<div class="timeline-sets"><button data-timeline="all" class="'+(activeSet==="all"?"active":"")+'"><strong>'+t("timelineAll")+'</strong><span>'+boards.length+' boards</span></button>'+
  keys.map(function(k){return '<button data-timeline="'+k+'" class="'+(String(activeSet)===k?"active":"")+'"><strong>Set '+k+'</strong><span>'+groups[k].count+' boards</span></button>'}).join("")+'</div>';
 var patchButtons="";
 if(activeSet!=="all"&&groups[String(activeSet)]){
  var patches=Object.keys(groups[String(activeSet)].patches).sort().reverse();
  patchButtons='<div class="timeline-patches"><span class="timeline-label">Set '+escapeHtml(activeSet)+' → '+t("patch")+'</span><button data-timeline-patch="all" class="'+(patchValue==="all"?"active":"")+'">'+t("allPatches")+'</button>'+
   patches.map(function(p){return '<button data-timeline-patch="'+escapeHtml(p)+'" class="'+(String(patchValue)===p?"active":"")+'">'+escapeHtml(p)+' <small>'+groups[String(activeSet)].patches[p]+'</small></button>'}).join("")+'</div>';
 }
 el.innerHTML=setButtons+patchButtons;
 el.querySelectorAll("[data-timeline]").forEach(function(btn){btn.addEventListener("click",function(){
  activeSet=btn.dataset.timeline;setFilter.value="all";patchValue="all";document.querySelector("#patchFilter").value="all";visibleLimit=defaultVisibleLimit();syncMuseumUrlState();renderTimeline();render();
 })});
 el.querySelectorAll("[data-timeline-patch]").forEach(function(btn){btn.addEventListener("click",function(){
  patchValue=btn.dataset.timelinePatch;document.querySelector("#patchFilter").value=patchValue;visibleLimit=defaultVisibleLimit();syncMuseumUrlState();renderTimeline();render();
 })});
}
function updateCompareBar(){var hint=document.querySelector("#compareHint"),btn=document.querySelector("#compareBtn");if(hint)hint.textContent=compareSelection.length+" / 2 "+t("selected");if(btn)btn.disabled=compareSelection.length!==2}
function compareBoards(){
 if(compareSelection.length!==2)return;
 var pair=compareSelection.map(function(id){return boards.find(function(b){return b.id===id})}).filter(Boolean);if(pair.length!==2)return;
 function unitNames(board){return board.units.map(function(u){return u[0]})}
 function normalizedTraits(board){return (board.traits||[]).map(function(x){return String(x).replace(/^\\d+\\s+/,"")})}
 function boardItems(board){var out=[];(board.units||[]).forEach(function(u){(u[3]||[]).forEach(function(id){var entry=staticEntry(staticData&&staticData.items,id);out.push((entry&&entry.name)||cleanEntityName(id))})});return out}
 function augmentNames(board){return (board.augments||[]).map(function(id){var entry=staticEntry(staticData&&staticData.augments,id);return (entry&&entry.name)||cleanEntityName(id)})}
 function starTotal(board){return (board.units||[]).reduce(function(sum,u){return sum+(Number(u[1])||0)},0)}
 function itemCount(board){return (board.units||[]).reduce(function(sum,u){return sum+(u[3]||[]).length},0)}
 function unique(list){return Array.from(new Set(list.filter(Boolean)))}
 function intersect(a,b){var bs=new Set(b);return unique(a).filter(function(x){return bs.has(x)})}
 function difference(a,b){var bs=new Set(b);return unique(a).filter(function(x){return !bs.has(x)})}
 function chips(values,kind,prefix){if(!values.length)return '<span class="compare-none">—</span>';return values.map(function(x){return '<span class="diff-chip '+kind+'">'+(prefix||"")+escapeHtml(x)+'</span>'}).join("")}
 function compareSection(label,common,leftOnly,rightOnly){
  return '<section class="compare-breakdown"><h3>'+escapeHtml(label)+'</h3>'+
   '<div><span class="compare-label">'+t("common")+'</span><div class="compare-unit-diff">'+chips(common,"shared","")+'</div></div>'+
   '<div class="compare-split"><div><span class="compare-label">'+escapeHtml(boardDisplayTitle(pair[0]))+'</span><div class="compare-unit-diff">'+chips(leftOnly,"removed","− ")+'</div></div>'+
   '<div><span class="compare-label">'+escapeHtml(boardDisplayTitle(pair[1]))+'</span><div class="compare-unit-diff">'+chips(rightOnly,"added","+ ")+'</div></div></div></section>';
 }
 function side(board){
  return '<section class="compare-side"><span class="eyebrow">Set '+board.set+' · '+escapeHtml(board.date)+'</span><h2>'+escapeHtml(boardDisplayTitle(board))+'</h2>'+miniBoard(board)+
  '<div class="compare-kpis"><div><span>'+t("placement")+'</span>'+placementInlineHtml(board.placement)+'</div><div><span>'+t("level")+'</span><strong>'+board.level+'</strong></div><div><span>'+t("gold")+'</span><strong>'+board.gold+'g</strong></div><div><span>'+t("starPower")+'</span><strong>'+starTotal(board)+'</strong></div><div><span>'+t("items")+'</span><strong>'+itemCount(board)+'</strong></div><div><span>'+t("augments")+'</span><strong>'+(board.augments||[]).length+'</strong></div></div>'+
  '<div class="trait-row">'+traitHtml(board)+'</div></section>';
 }
 var a=pair[0],b=pair[1];
 var au=unitNames(a),bu=unitNames(b),at=normalizedTraits(a),bt=normalizedTraits(b),ai=boardItems(a),bi=boardItems(b),aa=augmentNames(a),ba=augmentNames(b);
 var summary='<div class="compare-delta"><span>'+t("placement")+': <strong>'+(a.placement===b.placement?"=":(a.placement<b.placement?escapeHtml(boardDisplayTitle(a)):escapeHtml(boardDisplayTitle(b))))+'</strong></span><span>'+t("level")+': <strong>'+(a.level===b.level?"=":(a.level>b.level?escapeHtml(boardDisplayTitle(a)):escapeHtml(boardDisplayTitle(b))))+'</strong></span><span>'+t("gold")+': <strong>'+Math.abs(a.gold-b.gold)+'g</strong></span><span>'+t("starPower")+': <strong>'+Math.abs(starTotal(a)-starTotal(b))+'</strong></span></div>';
 document.querySelector("#compareContent").innerHTML='<div class="compare-grid">'+side(a)+side(b)+summary+
 compareSection(t("units"),intersect(au,bu),difference(au,bu),difference(bu,au))+
 compareSection(t("traits"),intersect(at,bt),difference(at,bt),difference(bt,at))+
 compareSection(t("items"),intersect(ai,bi),difference(ai,bi),difference(bi,ai))+
 compareSection(t("augments"),intersect(aa,ba),difference(aa,ba),difference(ba,aa))+'</div>';
 document.querySelector("#compareDialog").showModal();
}
function renderAll(){syncSetFilter();syncPatchFilter();renderTimeline();updateCompareBar();updateStats();renderInsights();renderRecentEvolution();renderHallOfFame();renderSetStats();renderPeriodStats();render();renderCloudCollections();var more=document.querySelector("#loadMoreBtn");if(more)more.classList.toggle("hidden",!hasMore)}
function applyLanguage(){
 document.documentElement.lang=lang==="pt"?"pt-BR":"en";document.querySelectorAll("[data-i18n]").forEach(function(el){var key=el.dataset.i18n;if(copy[lang][key])el.textContent=copy[lang][key]});document.querySelectorAll("[data-i18n-placeholder]").forEach(function(el){el.placeholder=t(el.dataset.i18nPlaceholder)});document.querySelectorAll("[data-i18n-aria-label]").forEach(function(el){el.setAttribute("aria-label",t(el.dataset.i18nAriaLabel))});document.querySelector("#langToggle").textContent=lang==="pt"?"EN":"PT";refreshAutoSnapshotButton();renderAll();
}

function normalizeRiotMatch(match,index){
 var active=(Array.isArray(match.traits)?match.traits:[]).filter(function(x){return Number(x.style)>0||Number(x.numUnits)>1}).sort(function(a,b){return Number(b.numUnits)-Number(a.numUnits)});
 var traitLabels=active.slice(0,5).map(function(x){return String(x.numUnits||"")+" "+cleanEntityName(x.name)});
 var slots=visualSlots((match.units||[]).length);
 var units=(Array.isArray(match.units)?match.units:[]).map(function(u,i){return [cleanEntityName(u.characterId),Number(u.tier)||1,slots[i]===undefined?i:slots[i],Array.isArray(u.itemNames)?u.itemNames:[],u.characterId||"",Number(u.rarity)||0]});
 var played=Number(match.playedAt)||0,date=played?new Date(played).toLocaleDateString(lang==="pt"?"pt-BR":"en-US"):"—",time=played?new Date(played).toLocaleTimeString(lang==="pt"?"pt-BR":"en-US",{hour:"2-digit",minute:"2-digit"}):"";
 var version=String(match.gameVersion||"").split("."),patch=version.length>=2?version[0]+"."+version[1]:"—";
 return {id:String(match.id||("riot-"+index)),set:Number(match.setNumber)||0,placement:Number(match.placement)||8,title:traitLabels[0]||("Board "+(index+1)),patch:patch,date:date,time:time,playedAt:played,level:Number(match.level)||0,gold:Number(match.goldLeft)||0,traits:traitLabels.length?traitLabels:["TFT"],rawTraits:active,augments:Array.isArray(match.augments)?match.augments:[],units:units,real:true,queueId:Number(match.queueId)||0,duration:Number(match.duration)||0,damage:Number(match.damageToPlayers)||0,eliminations:Number(match.playersEliminated)||0,lastRound:Number(match.lastRound)||0,hasTelemetry:match.hasChibiTelemetry===true};
}
function setDemoNoteState(state){
 var note=document.querySelector(".demo-note");
 if(!note)return;
 note.classList.remove("state-loading","state-success","state-error");
 if(state)note.classList.add("state-"+state)
}
function friendlyError(error){
 var raw=String(error&&error.message||error||"");
 if(/AbortError|timed?\s*out|timeout/i.test(raw))return lang==="pt"?"A Riot demorou demais para responder. Tente novamente.":"Riot took too long to respond. Try again.";
 if(/429|rate/i.test(raw))return lang==="pt"?"Muitas consultas em pouco tempo. Tente novamente em instantes.":"Too many requests. Try again shortly.";
 if(/404|not.?found|summoner/i.test(raw))return lang==="pt"?"Riot ID não encontrado nessa região.":"Riot ID was not found in this region.";
 if(/network|fetch|failed/i.test(raw))return lang==="pt"?"Não foi possível conectar ao serviço agora.":"Could not connect to the service right now.";
 return raw&&raw!=="request_failed"?raw:t("loadError")
}
function setMuseumLoading(active){
 var museum=document.querySelector("#museum");if(!museum)return;
 museum.classList.toggle("is-loading",Boolean(active));
 if(active){
  grid.innerHTML=Array.from({length:8},function(){return '<article class="board-card skeleton-card" aria-hidden="true"><div class="skeleton skeleton-board"></div><div class="skeleton-lines"><span></span><span></span><span></span></div></article>'}).join("");
  document.querySelector("#emptyState").classList.add("hidden");
 }
}
async function postFunction(name,body){
 var controller=new AbortController(),timer=setTimeout(function(){controller.abort()},20000);
 try{
  var response=await fetch(API_BASE+"/"+name,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body),signal:controller.signal});
  var data=await response.json().catch(function(){return {}});
  if(!response.ok||data.error)throw new Error(data.message||data.error||("HTTP "+response.status));
  return data
 }catch(err){
  if(err&&err.name==="AbortError")throw new Error("timeout");
  throw err
 }finally{clearTimeout(timer)}
}
async function fetchRiotPage(riotId,platform,start){var parts=riotId.split("#");if(parts.length<2||!parts[0].trim()||!parts.slice(1).join("#").trim())throw new Error("Use Nome#TAG");var data=await postFunction("public-tft-history",{gameName:parts[0].trim(),tagLine:parts.slice(1).join("#").trim(),platform:platform,start:start,count:pageSize});return {parts:parts,data:data}}
async function refreshAutoSnapshotButton(){
 var btn=document.querySelector("#autoSnapshotBtn");if(!btn)return;
 if(!loadedRiotId){btn.disabled=true;btn.textContent=t("autoUpdateOff");btn.setAttribute("aria-pressed","false");return}
 if(!window.MuseumCloud||!window.MuseumCloud.isSignedIn()){btn.disabled=false;btn.textContent=t("autoUpdateLogin");btn.setAttribute("aria-pressed","false");return}
 try{
  var watch=await window.MuseumCloud.getWatchProfile(loadedRiotId,loadedPlatform),enabled=Boolean(watch&&watch.enabled);
  btn.disabled=false;btn.textContent=enabled?t("autoUpdateOn"):t("autoUpdateOff");btn.setAttribute("aria-pressed",String(enabled));btn.dataset.enabled=enabled?"true":"false";
  if(watch&&watch.last_run_at)btn.title=t("lastUpdate")+": "+new Date(watch.last_run_at).toLocaleString(lang==="pt"?"pt-BR":"en-US")
 }catch(_){btn.disabled=false;btn.textContent=t("autoUpdateError")}
}
async function loadPlayerProfile(riotId,platform){
 var parts=riotId.split("#");if(parts.length<2)return;
 try{
  var p=await postFunction("public-tft-profile",{gameName:parts[0].trim(),tagLine:parts.slice(1).join("#").trim(),platform:platform}),panel=document.querySelector("#profilePanel"),ranked=(p.ranked||[]).find(function(r){return /RANKED/i.test(r.queueType||"")})||(p.ranked||[])[0],summary=p.summary||{};
  panel.classList.remove("hidden");document.querySelector("#profileName").textContent=(p.player&&p.player.gameName?p.player.gameName:parts[0])+"#"+(p.player&&p.player.tagLine?p.player.tagLine:parts.slice(1).join("#"));
  document.querySelector("#profileRank").textContent=ranked?(ranked.tier+" "+ranked.rank+" · "+ranked.leaguePoints+" LP"):"Unranked";
  document.querySelector("#profileAvg").textContent=summary.averagePlacement!=null?Number(summary.averagePlacement).toFixed(2):"—";document.querySelector("#profileTop4").textContent=Math.round(Number(summary.top4Rate||0)*100)+"%";document.querySelector("#profileWin").textContent=Math.round(Number(summary.winRate||0)*100)+"%";document.querySelector("#profileGames").textContent=String(summary.matches||0);
  var icon=profileIconUrl(p.player&&p.player.profileIconId);document.querySelector("#profileIcon").innerHTML=icon?'<img src="'+icon+'" alt="">':initials(parts[0]);
 }catch(_){document.querySelector("#profilePanel").classList.add("hidden")}
}
async function loadRiotHistory(riotId,platform){
 var status=document.querySelector("#collectionStatus"),note=document.querySelector(".demo-note span");status.textContent=t("loading");note.textContent=t("loading");setDemoNoteState("loading");
 var result=await fetchRiotPage(riotId,platform,0),data=result.data,parts=result.parts;if(!Array.isArray(data.matches)||!data.matches.length)throw new Error(lang==="pt"?"Nenhuma partida recente encontrada.":"No recent matches found.");
 boards=data.matches.map(normalizeRiotMatch);compareSelection=[];activeSet="all";loadedRiotId=riotId;loadedPlatform=platform;nextStart=data.paging&&Number(data.paging.returned)?Number(data.paging.returned):boards.length;hasMore=Boolean(data.paging&&Number(data.paging.returned)===pageSize);
 document.querySelector("#museumTitle").textContent=(data.player&&data.player.gameName?data.player.gameName:parts[0])+"#"+(data.player&&data.player.tagLine?data.player.tagLine:parts.slice(1).join("#"));status.textContent=boards.length+(lang==="pt"?" boards oficiais carregados.":" official boards loaded.");note.textContent=t("realData");setDemoNoteState("success");if(!new URLSearchParams(location.search).has("filter"))activeFilter="all";applyUrlMuseumState(false);renderAll();mergeCloudArchive();refreshAutoSnapshotButton();
}
async function loadMoreHistory(){if(!loadedRiotId||!hasMore)return;var btn=document.querySelector("#loadMoreBtn");if(btn){btn.disabled=true;btn.textContent=t("loading")}try{var result=await fetchRiotPage(loadedRiotId,loadedPlatform,nextStart),list=Array.isArray(result.data.matches)?result.data.matches:[],known=new Set(boards.map(function(b){return b.id}));list.map(normalizeRiotMatch).forEach(function(b){if(!known.has(b.id)){boards.push(b);known.add(b.id)}});var returned=result.data.paging?Number(result.data.paging.returned)||0:list.length;nextStart+=returned;hasMore=returned===pageSize&&nextStart<100;renderAll();mergeCloudArchive()}catch(err){document.querySelector(".demo-note span").textContent=friendlyError(err)}finally{if(btn){btn.disabled=false;btn.textContent=t("loadMore");btn.classList.toggle("hidden",!hasMore)}}}
function updateShareUrl(riotId,platform){var url=new URL(location.href);url.searchParams.set("riot",riotId);url.searchParams.set("region",platform);url.searchParams.delete("board");history.replaceState({},"",url)}
function syncMuseumUrlState(){
 var url=new URL(location.href),setValue=activeSet!=="all"?activeSet:setFilter.value;
 if(activeFilter&&activeFilter!=="all")url.searchParams.set("filter",activeFilter);else url.searchParams.delete("filter");
 if(setValue&&setValue!=="all")url.searchParams.set("set",setValue);else url.searchParams.delete("set");
 if(patchValue&&patchValue!=="all")url.searchParams.set("patch",patchValue);else url.searchParams.delete("patch");
 if(sortMode&&sortMode!=="newest")url.searchParams.set("sort",sortMode);else url.searchParams.delete("sort");
 if(searchTerm)url.searchParams.set("q",searchTerm);else url.searchParams.delete("q");
 if(view&&view!=="grid")url.searchParams.set("view",view);else url.searchParams.delete("view");
 history.replaceState({},"",url)
}
function applyUrlMuseumState(shouldRender){
 var params=new URLSearchParams(location.search),filter=params.get("filter"),set=params.get("set"),patch=params.get("patch"),sort=params.get("sort"),q=params.get("q"),urlView=params.get("view");
 if(["all","top4","win","favorite"].includes(filter))activeFilter=filter;
 if(set)activeSet=set;
 if(patch)patchValue=patch;
 if(["newest","best","worst","gold"].includes(sort))sortMode=sort;
 if(q!=null){searchTerm=q;var search=document.querySelector("#museumSearch");if(search)search.value=q}
 if(["grid","compact"].includes(urlView))view=urlView;
 document.querySelectorAll(".filter").forEach(function(x){x.classList.toggle("active",x.dataset.filter===activeFilter)});
 var sortEl=document.querySelector("#sortFilter");if(sortEl)sortEl.value=sortMode;
 document.querySelectorAll("[data-view]").forEach(function(x){x.classList.toggle("active",x.dataset.view===view)});
 if(shouldRender)renderAll()
}
function maybeOpenBoardFromUrl(){var id=new URLSearchParams(location.search).get("board");if(id&&boards.some(function(b){return b.id===id}))openBoard(id,false)}
function hydrateFromUrl(){
 applyUrlMuseumState(true);
 var params=new URLSearchParams(location.search),riot=params.get("riot"),region=params.get("region")||"br1";
 if(!riot)return;
 document.querySelector("#riotId").value=riot;document.querySelector("#region").value=region;document.querySelector("#riotForm").requestSubmit()
}

document.querySelector("#closeDialog").addEventListener("click",closeBoard);dialog.addEventListener("click",function(e){if(e.target===dialog)closeBoard()});
document.querySelector("#langToggle").addEventListener("click",function(){lang=lang==="pt"?"en":"pt";localStorage.setItem("tbm-lang",lang);applyLanguage()});
document.querySelectorAll(".filter").forEach(function(btn){btn.addEventListener("click",function(){activeFilter=btn.dataset.filter;visibleLimit=defaultVisibleLimit();document.querySelectorAll(".filter").forEach(function(x){x.classList.toggle("active",x===btn)});syncMuseumUrlState();render()})});
document.querySelector("#favoritesTop").addEventListener("click",function(){document.querySelector('[data-filter="favorite"]').click();document.querySelector("#museum").scrollIntoView({behavior:"smooth"})});
setFilter.addEventListener("change",function(){activeSet="all";renderTimeline();visibleLimit=defaultVisibleLimit();syncMuseumUrlState();render()});
document.querySelector("#patchFilter").addEventListener("change",function(e){patchValue=e.target.value;visibleLimit=defaultVisibleLimit();syncMuseumUrlState();render()});
document.querySelector("#sortFilter").addEventListener("change",function(e){sortMode=e.target.value;visibleLimit=defaultVisibleLimit();syncMuseumUrlState();render()});
document.querySelector("#museumSearch").addEventListener("input",function(e){searchTerm=e.target.value.trim();visibleLimit=defaultVisibleLimit();syncMuseumUrlState();render()});
document.querySelectorAll("[data-view]").forEach(function(btn){btn.addEventListener("click",function(){view=btn.dataset.view;document.querySelectorAll("[data-view]").forEach(function(x){x.classList.toggle("active",x===btn)});syncMuseumUrlState();render()})});
document.querySelector("#riotForm").addEventListener("submit",async function(e){
 e.preventDefault();var value=document.querySelector("#riotId").value.trim(),platform=document.querySelector("#region").value,button=document.querySelector("#openMuseumBtn");if(!value)return;button.disabled=true;button.textContent=t("loading");setMuseumLoading(true);document.querySelector("#museum").scrollIntoView({behavior:"smooth"});
 try{var results=await Promise.allSettled([loadRiotHistory(value,platform),loadPlayerProfile(value,platform)]);if(results[0].status==="rejected")throw results[0].reason;updateShareUrl(value,platform);maybeOpenBoardFromUrl()}catch(err){boards=demoBoards.slice();var message=friendlyError(err);document.querySelector("#collectionStatus").textContent=message;document.querySelector(".demo-note span").textContent=message;setDemoNoteState("error");renderAll()}finally{setMuseumLoading(false);button.disabled=false;button.textContent=t("openMuseum")}
});
document.querySelector("#compareBtn").addEventListener("click",compareBoards);document.querySelector("#loadMoreBtn").addEventListener("click",loadMoreHistory);
document.querySelector("#revealMoreBtn").addEventListener("click",function(){visibleLimit+=defaultVisibleLimit();render()});
document.querySelector("#closeCompare").addEventListener("click",function(){document.querySelector("#compareDialog").close()});document.querySelector("#compareDialog").addEventListener("click",function(e){if(e.target.id==="compareDialog")e.target.close()});
document.querySelector("#shareProfileBtn").addEventListener("click",shareProfile);
document.querySelector("#autoSnapshotBtn").addEventListener("click",async function(){
 var btn=document.querySelector("#autoSnapshotBtn");
 if(!loadedRiotId)return;
 if(!window.MuseumCloud||!window.MuseumCloud.isSignedIn()){document.querySelector("#authDialog").showModal();return}
 var next=btn.dataset.enabled!=="true";btn.disabled=true;
 try{await window.MuseumCloud.setWatchProfile(loadedRiotId,loadedPlatform,next);await refreshAutoSnapshotButton()}catch(err){btn.disabled=false;btn.textContent=t("autoUpdateError");console.error(err)}
});
document.querySelector("#accountBtn").addEventListener("click",function(){document.querySelector("#authDialog").showModal()});
document.querySelector("#closeAuth").addEventListener("click",function(){document.querySelector("#authDialog").close()});
document.querySelector("#closeCollection").addEventListener("click",function(){document.querySelector("#collectionDialog").close()});
document.querySelector("#newCollectionBtn").addEventListener("click",function(){openCollectionPicker("")});
var collectionSearch=document.querySelector("#collectionSearch");if(collectionSearch)collectionSearch.addEventListener("input",function(e){collectionSearchTerm=e.target.value.trim();renderCloudCollections()});
document.querySelector("#authForm").addEventListener("submit",async function(e){
 e.preventDefault();var email=document.querySelector("#authEmail").value.trim(),status=document.querySelector("#authStatus");if(!email||!window.MuseumCloud)return;
 status.textContent=t("sending");try{await window.MuseumCloud.signIn(email);status.textContent=t("checkEmail")}catch(err){status.textContent=String(err.message||err)}
});
document.querySelector("#signOutBtn").addEventListener("click",async function(){if(window.MuseumCloud)await window.MuseumCloud.signOut()});
document.querySelector("#exportDataBtn").addEventListener("click",async function(){
 var status=document.querySelector("#authStatus");if(!window.MuseumCloud||!window.MuseumCloud.isSignedIn())return;
 status.textContent=t("preparingExport");
 try{
  var data=await window.MuseumCloud.exportUserData(),blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");
  a.href=url;a.download="tft-board-museum-dados.json";a.click();setTimeout(function(){URL.revokeObjectURL(url)},1000);status.textContent=t("exportDone")
 }catch(err){status.textContent=String(err.message||err)}
});
document.querySelector("#collectionForm").addEventListener("submit",async function(e){
 e.preventDefault();var name=document.querySelector("#collectionName").value.trim(),desc=document.querySelector("#collectionDescription").value.trim(),dlg=document.querySelector("#collectionDialog"),boardId=dlg.dataset.boardId||"",status=document.querySelector("#collectionStatusMessage");
 if(!window.MuseumCloud||!window.MuseumCloud.isSignedIn())return;
 try{var col=await window.MuseumCloud.createCollection({name:name,description:desc,boardIds:boardId?[boardId]:[]});status.textContent=t("collectionCreated")+": "+col.name;document.querySelector("#collectionName").value="";document.querySelector("#collectionDescription").value="";renderCloudCollections();if(boardId)openCollectionPicker(boardId)}catch(err){status.textContent=String(err.message||err)}
});
window.addEventListener("museum-auth-change",function(e){
 var user=e.detail&&e.detail.user,btn=document.querySelector("#accountBtn"),out=document.querySelector("#signOutBtn"),copy=document.querySelector("#authCopy"),dataActions=document.querySelector("#accountDataActions");
 btn.textContent=user?(user.email||t("account")):t("login");out.classList.toggle("hidden",!user);dataActions.classList.toggle("hidden",!user);copy.textContent=user?t("syncActive"):t("syncInactive");renderCloudCollections();refreshAutoSnapshotButton();if(user)mergeCloudArchive()
});
window.addEventListener("museum-cloud-state",function(e){
 var state=e.detail||{};favorites=new Set(state.favorites||[]);localStorage.setItem("tbm-favorites",JSON.stringify(Array.from(favorites)));if(state.notes)localStorage.setItem("tbm-notes",JSON.stringify(state.notes));render()
});
window.addEventListener("museum-collections-changed",renderCloudCollections);
var deferredInstallPrompt=null;
function refreshNetworkStatus(){
 var el=document.querySelector("#networkStatus");if(!el)return;
 var online=navigator.onLine;el.textContent=online?"Online":"Offline";el.classList.toggle("offline",!online)
}
window.addEventListener("online",refreshNetworkStatus);window.addEventListener("offline",refreshNetworkStatus);
window.addEventListener("beforeinstallprompt",function(event){
 event.preventDefault();deferredInstallPrompt=event;document.querySelector("#installBtn").classList.remove("hidden")
});
window.addEventListener("appinstalled",function(){deferredInstallPrompt=null;document.querySelector("#installBtn").classList.add("hidden")});
document.querySelector("#installBtn").addEventListener("click",async function(){
 if(!deferredInstallPrompt)return;deferredInstallPrompt.prompt();try{await deferredInstallPrompt.userChoice}catch(_){}deferredInstallPrompt=null;document.querySelector("#installBtn").classList.add("hidden")
});
refreshNetworkStatus();
if("serviceWorker" in navigator&&location.protocol.startsWith("http")){
 window.addEventListener("load",function(){navigator.serviceWorker.register("./sw.js").catch(function(err){console.warn("service worker",err)})})
}
applyLanguage();loadStaticData();hydrateFromUrl();