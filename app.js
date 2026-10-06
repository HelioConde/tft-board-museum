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
pt:{eyebrow:"Seu histórico, transformado em coleção",heroTitle:"Cada board conta uma história.",heroText:"Revisite composições, posicionamento, itens e momentos marcantes das suas partidas de TFT em um museu pessoal.",region:"Região",openMuseum:"Abrir meu museu",demoData:"Protótipo com dados demonstrativos — integração Riot será conectada na próxima etapa.",adReserved:"Espaço reservado para anúncio",collection:"COLEÇÃO",collectionText:"8 boards preservados neste protótipo.",all:"Todos",wins:"Vitórias",favorites:"Favoritos",allSets:"Todos os sets",boards:"Boards",favoriteTrait:"Trait favorita",bestPlacement:"Melhor colocação",prototype:"Protótipo independente",riotDisclaimer:"Não é endossado pela Riot Games.",emptyTitle:"Nenhum board aqui ainda.",emptyText:"Mude os filtros para explorar o restante da coleção.",newVersion:"Nova versão disponível.",update:"Atualizar",placement:"Colocação",level:"Nível",gold:"Ouro final",patch:"Patch",traits:"Traits",units:"Unidades",favorite:"Favoritar",unfavorite:"Remover favorito"},
en:{eyebrow:"Your history, transformed into a collection",heroTitle:"Every board tells a story.",heroText:"Revisit compositions, positioning, items and memorable TFT moments inside your personal museum.",region:"Region",openMuseum:"Open my museum",demoData:"Prototype with demo data — Riot integration will be connected in the next stage.",adReserved:"Reserved advertising space",collection:"COLLECTION",collectionText:"8 boards preserved in this prototype.",all:"All",wins:"Wins",favorites:"Favorites",allSets:"All sets",boards:"Boards",favoriteTrait:"Favorite trait",bestPlacement:"Best placement",prototype:"Independent prototype",riotDisclaimer:"Not endorsed by Riot Games.",emptyTitle:"No boards here yet.",emptyText:"Change the filters to explore the rest of the collection.",newVersion:"New version available.",update:"Update",placement:"Placement",level:"Level",gold:"Final gold",patch:"Patch",traits:"Traits",units:"Units",favorite:"Favorite",unfavorite:"Remove favorite"}
};

var lang=localStorage.getItem("tbm-lang")||"pt";
var activeFilter="all";
var view="grid";
var favorites=new Set(JSON.parse(localStorage.getItem("tbm-favorites")||"[]"));
var grid=document.querySelector("#boardGrid");
var dialog=document.querySelector("#boardDialog");
var setFilter=document.querySelector("#setFilter");

function t(key){return copy[lang][key]||key}
function placementLabel(n){return lang==="pt"?n+"º":"#"+n}
function initials(name){return name.split(/\s+/).map(function(p){return p[0]}).join("").slice(0,2).toUpperCase()}
function miniBoard(board){
  var map=new Map(board.units.map(function(u){return [u[2],{name:u[0],stars:u[1]}]}));
  var cells=Array.from({length:28},function(_,slot){
    var u=map.get(slot);
    if(!u)return '<div class="hex"></div>';
    return '<div class="hex unit" title="'+u.name+'"><span class="unit-dot">'+initials(u.name)+'</span></div>';
  }).join("");
  return '<div class="mini-board">'+cells+'</div>';
}
function visibleBoards(){
  var set=setFilter.value;
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
      '<div class="board-card-top"><span class="placement '+(board.placement===1?"win":"")+'">'+placementLabel(board.placement)+'</span>'+miniBoard(board)+'</div>'+
      '<div class="board-meta"><h3>'+board.title+'</h3><p>Set '+board.set+' · '+board.date+'</p><div class="trait-row">'+traits+'</div>'+
      '<div class="board-card-footer"><span>Lv. '+board.level+'</span><span>'+board.gold+'g</span><span>'+board.patch+'</span></div></div></article>';
  }).join("");
  document.querySelector("#emptyState").classList.toggle("hidden",data.length>0);
  bindCards();
}
function bindCards(){
  document.querySelectorAll(".board-card").forEach(function(card){
    card.addEventListener("click",function(e){if(e.target.closest("[data-fav]"))return;openBoard(card.dataset.id)});
    card.addEventListener("keydown",function(e){if(e.key==="Enter")openBoard(card.dataset.id)});
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
  var units=b.units.map(function(u){return '<span class="unit-chip">'+u[0]+' · '+u[1]+'★</span>'}).join("");
  document.querySelector("#dialogContent").innerHTML=
    '<div class="dialog-layout"><div class="dialog-board">'+miniBoard(b)+'</div><div class="dialog-info">'+
    '<span class="eyebrow">Set '+b.set+' · '+b.date+'</span><h2>'+b.title+'</h2><p>'+t("placement")+': <strong>'+placementLabel(b.placement)+'</strong></p>'+
    '<div class="dialog-stat-grid"><div class="dialog-stat"><span>'+t("level")+'</span><strong>'+b.level+'</strong></div><div class="dialog-stat"><span>'+t("gold")+'</span><strong>'+b.gold+'g</strong></div><div class="dialog-stat"><span>'+t("patch")+'</span><strong>'+b.patch+'</strong></div><div class="dialog-stat"><span>'+t("units")+'</span><strong>'+b.units.length+'</strong></div></div>'+
    '<span class="eyebrow">'+t("traits")+'</span><div class="trait-row">'+traits+'</div><span class="eyebrow" style="margin-top:26px">'+t("units")+'</span><div class="unit-list">'+units+'</div></div></div>';
  dialog.showModal();
}
function applyLanguage(){
  document.documentElement.lang=lang==="pt"?"pt-BR":"en";
  document.querySelectorAll("[data-i18n]").forEach(function(el){var key=el.dataset.i18n;if(copy[lang][key])el.textContent=copy[lang][key]});
  document.querySelector("#langToggle").textContent=lang==="pt"?"EN":"PT";
  render();
}

document.querySelector("#closeDialog").addEventListener("click",function(){dialog.close()});
dialog.addEventListener("click",function(e){if(e.target===dialog)dialog.close()});
document.querySelector("#langToggle").addEventListener("click",function(){lang=lang==="pt"?"en":"pt";localStorage.setItem("tbm-lang",lang);applyLanguage()});
document.querySelectorAll(".filter").forEach(function(btn){btn.addEventListener("click",function(){activeFilter=btn.dataset.filter;document.querySelectorAll(".filter").forEach(function(x){x.classList.toggle("active",x===btn)});render()})});
document.querySelector("#favoritesTop").addEventListener("click",function(){document.querySelector('[data-filter="favorite"]').click();document.querySelector("#museum").scrollIntoView({behavior:"smooth"})});
setFilter.addEventListener("change",render);
document.querySelectorAll("[data-view]").forEach(function(btn){btn.addEventListener("click",function(){view=btn.dataset.view;document.querySelectorAll("[data-view]").forEach(function(x){x.classList.toggle("active",x===btn)});render()})});
document.querySelector("#riotForm").addEventListener("submit",function(e){e.preventDefault();var value=document.querySelector("#riotId").value.trim()||"Jogador#TAG";document.querySelector("#museumTitle").textContent=value;document.querySelector("#museum").scrollIntoView({behavior:"smooth"})});
applyLanguage();