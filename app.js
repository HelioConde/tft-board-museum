var boards=[
{id:"b1",set:15,placement:1,title:"Rebel Crown",patch:"15.3",date:"05/10/2026",level:9,gold:18,traits:["7 Rebel","2 Bastion","2 Executioner"],units:[["Jinx",2,17],["Ziggs",2,10],["Ekko",2,18],["Rumble",2,9],["Viego",2,24],["Senna",2,16],["Aurora",2,23],["Garen",2,11],["Yuumi",2,12]]},
{id:"b2",set:15,placement:2,title:"Bastion Archive",patch:"15.3",date:"04/10/2026",level:8,gold:7,traits:["6 Bastion","3 Sorcerer"],units:[["Garen",2,3],["Rell",3,4],["Swain",2,10],["Lux",2,18],["Ahri",2,19],["Taric",2,11],["Morgana",2,17],["Janna",2,24]]},
{id:"b3",set:15,placement:4,title:"Executioner's Hall",patch:"15.3",date:"03/10/2026",level:8,gold:3,traits:["4 Executioner","4 Duelist"],units:[["Yasuo",2,2],["Akali",2,9],["Katarina",3,16],["Shen",2,10],["Lee",2,18],["Qiyana",2,23],["Diana",1,24],["Irelia",2,11]]},
{id:"b4",set:15,placement:7,title:"The Greed Exhibit",patch:"15.2",date:"02/10/2026",level:8,gold:41,traits:["4 Rebel","2 Bastion"],units:[["Jinx",1,17],["Ziggs",2,18],["Rumble",1,10],["Garen",2,3],["Senna",2,24],["Ekko",1,11],["Yuumi",2,25],["Viego",1,4]]},
{id:"b5",set:14,placement:1,title:"Golden Frontline",patch:"14.8",date:"28/09/2026",level:9,gold:12,traits:["6 Vanguard","3 Dynamo"],units:[["Leona",3,3],["Braum",2,4],["Vi",2,10],["Zeri",2,18],["Jhin",2,19],["Rakan",2,11],["Sona",2,24],["Sylas",2,17],["Sett",2,25]]},
{id:"b6",set:14,placement:3,title:"Night Carousel",patch:"14.8",date:"26/09/2026",level:8,gold:9,traits:["5 Nightbringer","2 Invoker"],units:[["Diana",2,17],["Aphelios",2,18],["Sejuani",2,3],["Morgana",2,10],["Lee",2,11],["Lissandra",3,24],["Yasuo",2,25],["Vladimir",2,4]]},
{id:"b7",set:14,placement:4,title:"Invoker Study",patch:"14.7",date:"24/09/2026",level:8,gold:16,traits:["4 Invoker","3 Mystic"],units:[["Karma",2,17],["Syndra",2,18],["Ivern",2,10],["Lulu",2,11],["Taric",2,3],["Rell",2,4],["Garen",1,24],["Teemo",1,25]]},
{id:"b8",set:14,placement:6,title:"Last Roll",patch:"14.7",date:"22/09/2026",level:7,gold:1,traits:["4 Duelist","2 Mystic"],units:[["Yasuo",3,17],["Fiora",2,18],["Jax",2,10],["Irelia",2,11],["Lee",1,3],["Rell",1,4],["Lulu",2,24]]}
];

var copy={
pt:{eyebrow:"Seu histórico, transformado em coleção",heroTitle:"Cada board conta uma história.",heroText:"Revisite composições, posicionamento, itens e momentos marcantes das suas partidas de TFT em um museu pessoal.",region:"Região",openMuseum:"Abrir meu museu",demoData:"Protótipo com dados demonstrativos — integração Riot será conectada na próxima etapa.",adReserved:"Espaço reservado para anúncio",collection:"COLEÇÃO",collectionText:"8 boards preservados neste protótipo.",all:"Todos",wins:"Vitórias",favorites:"Favoritos",allSets:"Todos os sets",boards:"Boards",favoriteTrait:"Trait favorita",bestPlacement:"Melhor colocação",prototype:"Protótipo independente",riotDisclaimer:"Não é endossado pela Riot Games.",emptyTitle:"Nenhum board aqui ainda.",emptyText:"Mude os filtros para explorar o restante da coleção.",newVersion:"Nova versão disponível.",update:"Atualizar",placement:"Colocação",level:"Nível",gold:"Ouro final",patch:"Patch",traits:"Traits",units:"Unidades",favorite:"Favoritar",unfavorite:"Remover favorito",compareTitle:"Comparar boards",compareHint:"Selecione 2 boards para comparar lado a lado.",compareAction:"Comparar",selected:"selecionados",timelineAll:"Todos",loading:"Consultando seu histórico oficial da Riot…",realData:"Histórico oficial carregado. A posição dos hexes é apenas uma organização visual quando a Riot não fornece posicionamento.",loadError:"Não foi possível carregar o histórico agora. Mantive o museu demonstrativo.",visualLayout:"Arranjo visual — a Match API não informa a posição real das unidades."},
en:{eyebrow:"Your history, transformed into a collection",heroTitle:"Every board tells a story.",heroText:"Revisit compositions, positioning, items and memorable TFT moments inside your personal museum.",region:"Region",openMuseum:"Open my museum",demoData:"Prototype with demo data — Riot integration will be connected in the next stage.",adReserved:"Reserved advertising space",collection:"COLLECTION",collectionText:"8 boards preserved in this prototype.",all:"All",wins:"Wins",favorites:"Favorites",allSets:"All sets",boards:"Boards",favoriteTrait:"Favorite trait",bestPlacement:"Best placement",prototype:"Independent prototype",riotDisclaimer:"Not endorsed by Riot Games.",emptyTitle:"No boards here yet.",emptyText:"Change the filters to explore the rest of the collection.",newVersion:"New version available.",update:"Update",placement:"Placement",level:"Level",gold:"Final gold",patch:"Patch",traits:"Traits",units:"Units",favorite:"Favorite",unfavorite:"Remove favorite",compareTitle:"Compare boards",compareHint:"Select 2 boards to compare side by side.",compareAction:"Compare",selected:"selected",timelineAll:"All",loading:"Loading your official Riot match history…",realData:"Official history loaded. Hex positions are only a visual arrangement when Riot does not provide positioning.",loadError:"Could not load match history right now. The demo museum was kept.",visualLayout:"Visual arrangement — Match API does not provide real unit positions."}
};

var lang=localStorage.getItem("tbm-lang")||"pt";
var activeFilter="all";
var view="grid";
var favorites=new Set(JSON.parse(localStorage.getItem("tbm-favorites")||"[]"));
var compareSelection=[];
var activeSet="all";
var staticData=null;
var grid=document.querySelector("#boardGrid");
var dialog=document.querySelector("#boardDialog");
var setFilter=document.querySelector("#setFilter");

function t(key){return copy[lang][key]||key}
function placementLabel(n){return lang==="pt"?n+"º":"#"+n}
function initials(name){return name.split(/\s+/).map(function(p){return p[0]}).join("").slice(0,2).toUpperCase()}
function staticEntry(data,id){
  if(!data||!id)return null;
  if(data[id])return data[id];
  var normalized=String(id).toLowerCase();
  return Object.values(data).find(function(entry){return String(entry.id||"").toLowerCase()===normalized})||null;
}
function assetUrl(kind,entry){
  if(!staticData||!entry||!entry.image||!entry.image.full)return "";
  return "https://ddragon.leagueoflegends.com/cdn/"+staticData.version+"/img/tft-"+kind+"/"+encodeURIComponent(entry.image.full);
}
async function loadStaticData(){
  try{
    var versions=await fetch("https://ddragon.leagueoflegends.com/api/versions.json").then(function(r){return r.json()});
    var version=Array.isArray(versions)&&versions[0]?String(versions[0]):"";
    var base="https://ddragon.leagueoflegends.com/cdn/"+version+"/data/pt_BR/";
    var responses=await Promise.all([
      fetch(base+"tft-champion.json").then(function(r){return r.json()}),
      fetch(base+"tft-item.json").then(function(r){return r.json()}),
      fetch(base+"tft-trait.json").then(function(r){return r.json()})
    ]);
    staticData={version:version,champions:responses[0].data||{},items:responses[1].data||{},traits:responses[2].data||{}};
    render();
  }catch(_){}
}
function miniBoard(board){
  var map=new Map(board.units.map(function(u){return [u[2],{name:u[0],stars:u[1],items:u[3]||[],rawId:u[4]||u[0]}]}));
  var cells=Array.from({length:28},function(_,slot){
    var u=map.get(slot);
    if(!u)return '<div class="hex"></div>';
    var raw=u.rawId||u.name;
    var entry=staticEntry(staticData&&staticData.champions,raw);
    var image=assetUrl("champion",entry);
    return '<div class="hex unit" title="'+u.name+'"><span class="unit-dot">'+(image?'<img src="'+image+'" alt="" onerror="this.remove()">':initials(u.name))+'</span></div>';
  }).join("");
  return '<div class="mini-board">'+cells+'</div>';
}
function visibleBoards(){
  var set=activeSet==="all"?setFilter.value:String(activeSet);
  return boards.filter(function(b){
    var setOk=set==="all"||String(b.set)===set;
    var filterOk=activeFilter==="all"||(activeFilter==="top4"&&b.placement<=4)||(activeFilter==="win"&&b.placement===1)||(activeFilter==="favorite"&&favorites.has(b.id));
    return setOk&&filterOk;
  });
}
function render(){
  var data=visibleBoards();
  grid.classList.toggle("compact",view==="compact");
  grid.innerHTML=data.map(function(board){
    var traits=board.traits.map(function(x){return '<span class="trait">'+x+'</span>'}).join("");
    return '<article class="board-card" data-id="'+board.id+'" tabindex="0">'+
      '<button class="favorite-btn '+(favorites.has(board.id)?"active":"")+'" data-fav="'+board.id+'" title="'+(favorites.has(board.id)?t("unfavorite"):t("favorite"))+'">★</button>'+
      '<button class="compare-toggle '+(compareSelection.includes(board.id)?"active":"")+'" data-compare="'+board.id+'">'+(compareSelection.includes(board.id)?"✓":"＋")+'</button>'+
      '<div class="board-card-top"><span class="placement '+(board.placement===1?"win":"")+'">'+placementLabel(board.placement)+'</span>'+miniBoard(board)+'</div>'+
      '<div class="board-meta"><h3>'+board.title+'</h3><p>Set '+board.set+' · '+board.date+'</p><div class="trait-row">'+traits+'</div>'+
      '<div class="board-card-footer"><span>Lv. '+board.level+'</span><span>'+board.gold+'g</span><span>'+board.patch+'</span></div></div></article>';
  }).join("");
  document.querySelector("#emptyState").classList.toggle("hidden",data.length>0);
  bindCards();
}
function bindCards(){
  document.querySelectorAll(".board-card").forEach(function(card){
    card.addEventListener("click",function(e){if(e.target.closest("[data-fav]")||e.target.closest("[data-compare]"))return;openBoard(card.dataset.id)});
    card.addEventListener("keydown",function(e){if(e.key==="Enter")openBoard(card.dataset.id)});
  });
  document.querySelectorAll("[data-compare]").forEach(function(btn){
    btn.addEventListener("click",function(e){
      e.stopPropagation();
      var id=btn.dataset.compare;
      if(compareSelection.includes(id))compareSelection=compareSelection.filter(function(x){return x!==id});
      else if(compareSelection.length<2)compareSelection.push(id);
      else compareSelection=[compareSelection[1],id];
      updateCompareBar();
      render();
    });
  });
  document.querySelectorAll("[data-fav]").forEach(function(btn){
    btn.addEventListener("click",function(e){
      e.stopPropagation();
      var id=btn.dataset.fav;
      if(favorites.has(id))favorites.delete(id);else favorites.add(id);
      localStorage.setItem("tbm-favorites",JSON.stringify(Array.from(favorites)));
      render();
    });
  });
}
function openBoard(id){
  var b=boards.find(function(x){return x.id===id});
  if(!b)return;
  var traits=b.traits.map(function(x){return '<span class="trait">'+x+'</span>'}).join("");
  var units=b.units.map(function(u){
    var entry=staticEntry(staticData&&staticData.champions,u[4]||u[0]);
    var image=assetUrl("champion",entry);
    var items=(u[3]||[]).map(function(itemId){var item=staticEntry(staticData&&staticData.items,itemId);var src=assetUrl("item",item);return src?'<img src="'+src+'" title="'+(item&&item.name||cleanEntityName(itemId))+'" alt="">':""}).join("");
    return '<span class="unit-chip">'+(image?'<img src="'+image+'" alt="">':"")+u[0]+' · '+u[1]+'★<span class="item-icons">'+items+'</span></span>';
  }).join("");
  document.querySelector("#dialogContent").innerHTML=
    '<div class="dialog-layout"><div class="dialog-board">'+miniBoard(b)+'</div><div class="dialog-info">'+
    '<span class="eyebrow">Set '+b.set+' · '+b.date+'</span><h2>'+b.title+'</h2><p>'+t("placement")+': <strong>'+placementLabel(b.placement)+'</strong></p>'+
    '<div class="dialog-stat-grid"><div class="dialog-stat"><span>'+t("level")+'</span><strong>'+b.level+'</strong></div><div class="dialog-stat"><span>'+t("gold")+'</span><strong>'+b.gold+'g</strong></div><div class="dialog-stat"><span>'+t("patch")+'</span><strong>'+b.patch+'</strong></div><div class="dialog-stat"><span>'+t("units")+'</span><strong>'+b.units.length+'</strong></div></div>'+
    '<span class="eyebrow">'+t("traits")+'</span><div class="trait-row">'+traits+'</div><span class="eyebrow" style="margin-top:26px">'+t("units")+'</span><div class="unit-list">'+units+'</div>'+(b.real?'<p style="margin-top:22px;color:#777d90;font-size:11px;line-height:1.5">'+t("visualLayout")+'</p>':'')+'</div></div>';
  dialog.showModal();
}

function renderTimeline(){
  var el=document.querySelector("#timeline");if(!el)return;
  var groups={};
  boards.forEach(function(b){var key=String(b.set||"?");groups[key]=(groups[key]||0)+1});
  var keys=Object.keys(groups).sort(function(a,b){return Number(b)-Number(a)});
  el.innerHTML='<button data-timeline="all" class="'+(activeSet==="all"?"active":"")+'"><strong>'+t("timelineAll")+'</strong><span>'+boards.length+' boards</span></button>'+
    keys.map(function(k){return '<button data-timeline="'+k+'" class="'+(String(activeSet)===k?"active":"")+'"><strong>Set '+k+'</strong><span>'+groups[k]+' boards</span></button>'}).join("");
  el.querySelectorAll("[data-timeline]").forEach(function(btn){btn.addEventListener("click",function(){activeSet=btn.dataset.timeline;setFilter.value="all";renderTimeline();render()})});
}
function updateCompareBar(){
  var hint=document.querySelector("#compareHint"),btn=document.querySelector("#compareBtn");
  if(hint)hint.textContent=compareSelection.length+" / 2 "+t("selected");
  if(btn)btn.disabled=compareSelection.length!==2;
}
function compareBoards(){
  if(compareSelection.length!==2)return;
  var pair=compareSelection.map(function(id){return boards.find(function(b){return b.id===id})}).filter(Boolean);
  if(pair.length!==2)return;
  function side(b){
    var traits=b.traits.map(function(x){return '<span class="trait">'+x+'</span>'}).join("");
    return '<section class="compare-side"><span class="eyebrow">Set '+b.set+' · '+b.date+'</span><h2>'+b.title+'</h2>'+miniBoard(b)+
      '<div class="compare-kpis"><div><span>'+t("placement")+'</span><strong>'+placementLabel(b.placement)+'</strong></div><div><span>'+t("level")+'</span><strong>'+b.level+'</strong></div><div><span>'+t("gold")+'</span><strong>'+b.gold+'g</strong></div></div><div class="trait-row">'+traits+'</div></section>';
  }
  var a=pair[0],b=pair[1];
  document.querySelector("#compareContent").innerHTML='<div class="compare-grid">'+side(a)+side(b)+'<div class="compare-delta"><span>'+t("placement")+': <strong>'+(a.placement<b.placement?a.title:b.title)+'</strong></span><span>'+t("level")+': <strong>'+(a.level===b.level?"=":(a.level>b.level?a.title:b.title))+'</strong></span><span>'+t("gold")+': <strong>'+Math.abs(a.gold-b.gold)+'g</strong></span></div></div>';
  document.querySelector("#compareDialog").showModal();
}

function applyLanguage(){
  document.documentElement.lang=lang==="pt"?"pt-BR":"en";
  document.querySelectorAll("[data-i18n]").forEach(function(el){var key=el.dataset.i18n;if(copy[lang][key])el.textContent=copy[lang][key]});
  document.querySelector("#langToggle").textContent=lang==="pt"?"EN":"PT";
  renderTimeline();updateCompareBar();render();
}


var API_BASE="https://bieihhaobdztjyoweewa.supabase.co/functions/v1";
function cleanEntityName(value){
  var text=String(value||"").split("_").pop()||"Unknown";
  return text.replace(/^TFT\d*/i,"").replace(/([a-z])([A-Z])/g,"$1 $2")||"Unknown";
}
function visualSlots(count){
  var preferred=[17,18,16,10,11,9,24,23,25,3,4,2,12,19,15,22,26,5,6,1,13,20,14,21,27,7,8,0];
  return preferred.slice(0,count);
}
function normalizeRiotMatch(match,index){
  var active=(Array.isArray(match.traits)?match.traits:[]).filter(function(x){return Number(x.style)>0||Number(x.numUnits)>1}).sort(function(a,b){return Number(b.numUnits)-Number(a.numUnits)});
  var traitLabels=active.slice(0,4).map(function(x){return String(x.numUnits||"")+" "+cleanEntityName(x.name)});
  var slots=visualSlots((match.units||[]).length);
  var units=(Array.isArray(match.units)?match.units:[]).map(function(u,i){return [cleanEntityName(u.characterId),Number(u.tier)||1,slots[i]===undefined?i:slots[i],Array.isArray(u.itemNames)?u.itemNames:[]]});
  var played=Number(match.playedAt)||0;
  var date=played?new Date(played).toLocaleDateString(lang==="pt"?"pt-BR":"en-US"):"—";
  var version=String(match.gameVersion||"").split(".");
  var patch=version.length>=2?version[0]+"."+version[1]:"—";
  return {id:String(match.id||("riot-"+index)),set:Number(match.setNumber)||0,placement:Number(match.placement)||8,title:traitLabels[0]||("Board "+(index+1)),patch:patch,date:date,playedAt:played,level:Number(match.level)||0,gold:Number(match.goldLeft)||0,traits:traitLabels.length?traitLabels:["TFT"],rawTraits:active,units:units.map(function(u,i){u[4]=(match.units[i]&&match.units[i].characterId)||u[0];return u}),real:true};
}
async function loadRiotHistory(riotId,platform){
  var parts=riotId.split("#");
  if(parts.length<2||!parts[0].trim()||!parts.slice(1).join("#").trim())throw new Error("Use Nome#TAG");
  var status=document.querySelector("#collectionStatus");
  var note=document.querySelector(".demo-note span");
  status.textContent=t("loading");note.textContent=t("loading");
  var response=await fetch(API_BASE+"/public-tft-history",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({gameName:parts[0].trim(),tagLine:parts.slice(1).join("#").trim(),platform:platform,start:0,count:20})});
  var data=await response.json().catch(function(){return {}});
  if(!response.ok||data.error)throw new Error(data.message||data.error||"riot_history_failed");
  if(!Array.isArray(data.matches)||!data.matches.length)throw new Error(lang==="pt"?"Nenhuma partida recente encontrada.":"No recent matches found.");
  boards=data.matches.map(normalizeRiotMatch);
  document.querySelector("#museumTitle").textContent=(data.player&&data.player.gameName?data.player.gameName:parts[0])+"#"+(data.player&&data.player.tagLine?data.player.tagLine:parts.slice(1).join("#"));
  status.textContent=boards.length+(lang==="pt"?" boards oficiais carregados.":" official boards loaded.");
  note.textContent=t("realData");
  setFilter.value="all";
  activeFilter="all";
  document.querySelectorAll(".filter").forEach(function(x){x.classList.toggle("active",x.dataset.filter==="all")});
  render();
}

document.querySelector("#closeDialog").addEventListener("click",function(){dialog.close()});
dialog.addEventListener("click",function(e){if(e.target===dialog)dialog.close()});
document.querySelector("#langToggle").addEventListener("click",function(){lang=lang==="pt"?"en":"pt";localStorage.setItem("tbm-lang",lang);applyLanguage()});
document.querySelectorAll(".filter").forEach(function(btn){btn.addEventListener("click",function(){activeFilter=btn.dataset.filter;document.querySelectorAll(".filter").forEach(function(x){x.classList.toggle("active",x===btn)});render()})});
document.querySelector("#favoritesTop").addEventListener("click",function(){document.querySelector('[data-filter="favorite"]').click();document.querySelector("#museum").scrollIntoView({behavior:"smooth"})});
setFilter.addEventListener("change",function(){activeSet="all";renderTimeline();render()});
document.querySelectorAll("[data-view]").forEach(function(btn){btn.addEventListener("click",function(){view=btn.dataset.view;document.querySelectorAll("[data-view]").forEach(function(x){x.classList.toggle("active",x===btn)});render()})});
document.querySelector("#riotForm").addEventListener("submit",async function(e){e.preventDefault();var value=document.querySelector("#riotId").value.trim();var platform=document.querySelector("#region").value;document.querySelector("#museum").scrollIntoView({behavior:"smooth"});try{await loadRiotHistory(value,platform)}catch(err){document.querySelector("#collectionStatus").textContent=t("loadError");document.querySelector(".demo-note span").textContent=(err&&err.message)?String(err.message):t("loadError");render()}});
document.querySelector("#compareBtn").addEventListener("click",compareBoards);
document.querySelector("#closeCompare").addEventListener("click",function(){document.querySelector("#compareDialog").close()});
document.querySelector("#compareDialog").addEventListener("click",function(e){if(e.target.id==="compareDialog")e.target.close()});
applyLanguage();
loadStaticData();