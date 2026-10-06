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
pt:{eyebrow:"Seu histórico, transformado em coleção",heroTitle:"Cada board conta uma história.",heroText:"Revisite composições, itens, augments e momentos marcantes das suas partidas de TFT em um museu pessoal.",region:"Região",openMuseum:"Abrir meu museu",demoData:"Comece pesquisando um Riot ID. Enquanto isso, exibimos uma coleção demonstrativa.",adReserved:"Espaço reservado para anúncio",collection:"COLEÇÃO",collectionText:"8 boards preservados neste protótipo.",all:"Todos",wins:"Vitórias",favorites:"Favoritos",allSets:"Todos os sets",boards:"Boards",favoriteTrait:"Trait favorita",bestPlacement:"Melhor colocação",prototype:"Projeto independente",riotDisclaimer:"Não é endossado pela Riot Games.",emptyTitle:"Nenhum board aqui ainda.",emptyText:"Mude os filtros para explorar o restante da coleção.",newVersion:"Nova versão disponível.",update:"Atualizar",placement:"Colocação",level:"Nível",gold:"Ouro final",patch:"Patch",traits:"Traits",units:"Unidades",favorite:"Favoritar",unfavorite:"Remover favorito",compareTitle:"Comparar boards",compareHint:"Selecione 2 boards para comparar lado a lado.",compareAction:"Comparar",selected:"selecionados",timelineAll:"Todos",loading:"Consultando seu histórico oficial da Riot…",realData:"Histórico oficial carregado. A posição dos hexes é uma organização visual quando a Riot não fornece posicionamento.",loadError:"Não foi possível carregar o histórico agora. Mantive o museu demonstrativo.",visualLayout:"Arranjo visual — a Match API não informa a posição real das unidades.",loadMore:"Carregar mais partidas",officialSource:"Riot oficial",demoSource:"Demo",about:"Sobre",privacy:"Privacidade",terms:"Termos",contact:"Contato",playerProfile:"PERFIL TFT",avgPlacement:"Colocação média",winRate:"Vitórias",games:"Partidas",museumSearch:"Buscar champion, trait, item...",sortNewest:"Mais recentes",sortBest:"Melhor colocação",sortWorst:"Pior colocação",sortGold:"Mais ouro",allPatches:"Todos os patches",identity:"IDENTIDADE DE JOGO",museumInsights:"O que seu museu revela",augments:"Augments",queue:"Fila",duration:"Duração",damage:"Dano a jogadores",eliminations:"Eliminações",share:"Compartilhar",copyLink:"Copiar link",note:"Nota pessoal",notePlaceholder:"O que você lembra dessa partida?",saved:"Salvo",signatureChampion:"Champion assinatura",mostUsedItem:"Item mais usado",threeStars:"Unidades 3★",setsPlayed:"Sets no museu",items:"Itens",common:"Em comum",onlyHere:"Só neste board",starPower:"Total de estrelas"},
en:{eyebrow:"Your history, transformed into a collection",heroTitle:"Every board tells a story.",heroText:"Revisit compositions, items, augments and memorable TFT moments inside your personal museum.",region:"Region",openMuseum:"Open my museum",demoData:"Search a Riot ID to begin. Until then, a demo collection is shown.",adReserved:"Reserved advertising space",collection:"COLLECTION",collectionText:"8 boards preserved in this prototype.",all:"All",wins:"Wins",favorites:"Favorites",allSets:"All sets",boards:"Boards",favoriteTrait:"Favorite trait",bestPlacement:"Best placement",prototype:"Independent project",riotDisclaimer:"Not endorsed by Riot Games.",emptyTitle:"No boards here yet.",emptyText:"Change the filters to explore the rest of the collection.",newVersion:"New version available.",update:"Update",placement:"Placement",level:"Level",gold:"Final gold",patch:"Patch",traits:"Traits",units:"Units",favorite:"Favorite",unfavorite:"Remove favorite",compareTitle:"Compare boards",compareHint:"Select 2 boards to compare side by side.",compareAction:"Compare",selected:"selected",timelineAll:"All",loading:"Loading your official Riot match history…",realData:"Official history loaded. Hex positions are a visual arrangement when Riot does not provide positioning.",loadError:"Could not load match history right now. The demo museum was kept.",visualLayout:"Visual arrangement — Match API does not provide real unit positions.",loadMore:"Load more matches",officialSource:"Official Riot",demoSource:"Demo",about:"About",privacy:"Privacy",terms:"Terms",contact:"Contact",playerProfile:"TFT PROFILE",avgPlacement:"Average placement",winRate:"Wins",games:"Games",museumSearch:"Search champion, trait, item...",sortNewest:"Newest",sortBest:"Best placement",sortWorst:"Worst placement",sortGold:"Most gold",allPatches:"All patches",identity:"PLAY IDENTITY",museumInsights:"What your museum reveals",augments:"Augments",queue:"Queue",duration:"Duration",damage:"Player damage",eliminations:"Eliminations",share:"Share",copyLink:"Copy link",note:"Personal note",notePlaceholder:"What do you remember from this match?",saved:"Saved",signatureChampion:"Signature champion",mostUsedItem:"Most used item",threeStars:"3★ units",setsPlayed:"Sets in museum",items:"Items",common:"In common",onlyHere:"Only on this board",starPower:"Star total"}
};

var API_BASE="https://bieihhaobdztjyoweewa.supabase.co/functions/v1";
var lang=localStorage.getItem("tbm-lang")||"pt";
var activeFilter="all",activeSet="all",view="grid",sortMode="newest",searchTerm="",patchValue="all";
var favorites=new Set(JSON.parse(localStorage.getItem("tbm-favorites")||"[]"));
var compareSelection=[],staticData=null,loadedRiotId="",loadedPlatform="br1",nextStart=0,pageSize=20,hasMore=false;
var grid=document.querySelector("#boardGrid"),dialog=document.querySelector("#boardDialog"),setFilter=document.querySelector("#setFilter");

function t(key){return copy[lang][key]||key}
function placementLabel(n){return lang==="pt"?n+"º":"#"+n}
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
 return (ids||[]).slice(0,3).map(function(id){var e=staticEntry(staticData&&staticData.items,id),src=assetUrl("item",e);return src?'<img src="'+src+'" title="'+escapeHtml((e&&e.name)||cleanEntityName(id))+'" alt="">':""}).join("");
}
function traitHtml(board){
 var raws=board.rawTraits||[];
 return (board.traits||[]).map(function(label,i){var raw=raws[i],entry=raw?staticEntry(staticData&&staticData.traits,raw.name):null,src=assetUrl("trait",entry);return '<span class="trait with-icon">'+(src?'<img src="'+src+'" alt="">':"")+escapeHtml(label)+'</span>'}).join("");
}
function augmentHtml(board){
 if(!board.augments||!board.augments.length)return '<span class="trait">—</span>';
 return '<div class="augment-row">'+board.augments.map(function(id){var e=staticEntry(staticData&&staticData.augments,id),src=assetUrl("augment",e),name=(e&&e.name)||cleanEntityName(id);return '<span class="augment-card">'+(src?'<img src="'+src+'" alt="">':"")+'<span>'+escapeHtml(name)+'</span></span>'}).join("")+'</div>';
}
function miniBoard(board){
 var map=new Map(board.units.map(function(u){return [u[2],{name:u[0],stars:u[1],items:u[3]||[],rawId:u[4]||u[0],rarity:u[5]}]}));
 var cells=Array.from({length:28},function(_,slot){
  var u=map.get(slot);if(!u)return '<div class="hex"></div>';
  var entry=staticEntry(staticData&&staticData.champions,u.rawId),image=assetUrl("champion",entry),cost=rarityCost(u.rarity);
  return '<div class="hex unit" title="'+escapeHtml(u.name)+'"><span class="unit-dot cost-ring cost-'+cost+'">'+(image?'<img src="'+image+'" alt="" onerror="this.remove()">':initials(u.name))+'<span class="star-row">'+starText(u.stars)+'</span></span><span class="hex-items">'+itemImages(u.items)+'</span></div>';
 }).join("");
 return '<div class="mini-board">'+cells+'</div>';
}
function boardSearchText(b){
 var items=[];(b.units||[]).forEach(function(u){items.push(u[0],u[4]);(u[3]||[]).forEach(function(x){var e=staticEntry(staticData&&staticData.items,x);items.push(x,e&&e.name)})});
 return [b.title,b.patch,b.set].concat(b.traits||[],b.augments||[],items).join(" ").toLowerCase();
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
function render(){
 var data=visibleBoards();grid.classList.toggle("compact",view==="compact");
 grid.innerHTML=data.map(function(board){
  return '<article class="board-card" data-id="'+escapeHtml(board.id)+'" tabindex="0">'+
  '<button class="favorite-btn '+(favorites.has(board.id)?"active":"")+'" data-fav="'+escapeHtml(board.id)+'" title="'+(favorites.has(board.id)?t("unfavorite"):t("favorite"))+'">★</button>'+
  '<button class="compare-toggle '+(compareSelection.includes(board.id)?"active":"")+'" data-compare="'+escapeHtml(board.id)+'">'+(compareSelection.includes(board.id)?"✓":"＋")+'</button>'+
  '<div class="board-card-top"><span class="placement '+(board.placement===1?"win":"")+'">'+placementLabel(board.placement)+'</span>'+miniBoard(board)+'</div>'+
  '<div class="board-meta"><h3>'+escapeHtml(board.title)+'</h3><p>Set '+escapeHtml(board.set)+' · '+escapeHtml(board.date)+' <span class="source-badge '+(board.real?"real":"demo")+'">'+(board.real?t("officialSource"):t("demoSource"))+'</span></p><div class="trait-row">'+traitHtml(board)+'</div>'+
  '<div class="board-card-footer"><span>Lv. '+board.level+'</span><span>'+board.gold+'g</span><span>'+escapeHtml(board.patch)+'</span></div></div></article>';
 }).join("");
 document.querySelector("#emptyState").classList.toggle("hidden",data.length>0);bindCards();
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
 return b.units.map(function(u){var e=staticEntry(staticData&&staticData.champions,u[4]||u[0]),image=assetUrl("champion",e),cost=rarityCost(u[5]);return '<span class="unit-chip cost-'+cost+'">'+(image?'<img src="'+image+'" alt="">':"")+'<span>'+escapeHtml(u[0])+' · '+u[1]+'★</span><span class="item-icons">'+itemImages(u[3])+'</span></span>'}).join("");
}
function updateBoardUrl(id){var url=new URL(location.href);if(id)url.searchParams.set("board",id);else url.searchParams.delete("board");history.replaceState({},"",url)}
function boardShareUrl(id){var url=new URL(location.href);if(loadedRiotId){url.searchParams.set("riot",loadedRiotId);url.searchParams.set("region",loadedPlatform)}url.searchParams.set("board",id);return url.toString()}
async function publicBoardShareUrl(id){
 var b=boards.find(function(x){return x.id===id});
 if(window.MuseumCloud&&window.MuseumCloud.isSignedIn()&&loadedRiotId&&b){
  try{return await window.MuseumCloud.createPublicShare({kind:"board",riotId:loadedRiotId,region:loadedPlatform,board:b})}catch(err){console.error(err)}
 }
 return boardShareUrl(id)
}
async function shareBoard(id){var url=await publicBoardShareUrl(id),b=boards.find(function(x){return x.id===id});try{if(navigator.share)await navigator.share({title:"TFT Board Museum · "+(b?b.title:"Board"),url:url});else{await navigator.clipboard.writeText(url);alert(t("saved"))}}catch(_){}}
async function shareProfile(){
 if(!loadedRiotId)return;
 var url=new URL(location.href);url.searchParams.set("riot",loadedRiotId);url.searchParams.set("region",loadedPlatform);url.searchParams.delete("board");
 if(window.MuseumCloud&&window.MuseumCloud.isSignedIn()){
  try{url=new URL(await window.MuseumCloud.createPublicShare({kind:"profile",riotId:loadedRiotId,region:loadedPlatform}))}catch(err){console.error(err)}
 }
 try{if(navigator.share)await navigator.share({title:"TFT Board Museum · "+loadedRiotId,url:url.toString()});else await navigator.clipboard.writeText(url.toString())}catch(_){}
}
function exportBoardPng(id){
 var b=boards.find(function(x){return x.id===id});if(!b)return;
 var canvas=document.createElement("canvas");canvas.width=1200;canvas.height=630;var ctx=canvas.getContext("2d");
 var g=ctx.createLinearGradient(0,0,1200,630);g.addColorStop(0,"#171b28");g.addColorStop(1,"#090b12");ctx.fillStyle=g;ctx.fillRect(0,0,1200,630);
 ctx.fillStyle="#d7ad62";ctx.font="700 26px Arial";ctx.fillText("TFT BOARD MUSEUM",70,70);
 ctx.fillStyle="#f5f1e6";ctx.font="700 64px Georgia";ctx.fillText(String(b.title).slice(0,30),70,155);
 ctx.fillStyle="#d7ad62";ctx.font="700 46px Arial";ctx.fillText(placementLabel(b.placement),70,225);
 ctx.fillStyle="#a8abb9";ctx.font="26px Arial";ctx.fillText("Set "+b.set+" · "+b.patch+" · "+b.date,155,222);
 ctx.font="22px Arial";ctx.fillText((b.traits||[]).slice(0,4).join("  ·  "),70,278);
 var x=70,y=340;
 (b.units||[]).slice(0,12).forEach(function(u,i){
  var col=i%6,row=Math.floor(i/6),cx=x+col*175,cy=y+row*115;
  ctx.fillStyle="#202536";ctx.beginPath();ctx.roundRect(cx,cy,155,88,16);ctx.fill();
  ctx.fillStyle="#f0cb83";ctx.font="700 21px Arial";ctx.fillText(String(u[0]).slice(0,12),cx+14,cy+32);
  ctx.fillStyle="#a8abb9";ctx.font="18px Arial";ctx.fillText(starText(u[1]),cx+14,cy+61);
 });
 ctx.fillStyle="#777d90";ctx.font="18px Arial";ctx.fillText("tft-board-museum · "+(loadedRiotId||"demo"),70,600);
 var a=document.createElement("a");a.download="tft-board-"+String(b.id).replace(/[^a-z0-9_-]/gi,"-")+".png";a.href=canvas.toDataURL("image/png");a.click();
}
async function openCollectionPicker(boardId){
 var dlg=document.querySelector("#collectionDialog"),choices=document.querySelector("#collectionChoices"),status=document.querySelector("#collectionStatusMessage");
 if(!window.MuseumCloud||!window.MuseumCloud.isSignedIn()){document.querySelector("#authDialog").showModal();return}
 dlg.dataset.boardId=boardId||"";status.textContent="";choices.innerHTML="Carregando…";dlg.showModal();
 try{
  var list=await window.MuseumCloud.listCollections();
  choices.innerHTML=list.length?list.map(function(x){return '<button type="button" class="collection-choice" data-collection-id="'+escapeHtml(x.id)+'"><strong>'+escapeHtml(x.name)+'</strong><span>'+((x.board_ids||[]).length)+' boards</span></button>'}).join(""):'<span class="collection-empty">Nenhuma coleção ainda.</span>';
  choices.querySelectorAll("[data-collection-id]").forEach(function(btn){btn.addEventListener("click",async function(){
   try{await window.MuseumCloud.addBoardToCollection(btn.dataset.collectionId,boardId);status.textContent="Board adicionado.";renderCloudCollections()}catch(err){status.textContent=String(err.message||err)}
  })})
 }catch(err){choices.innerHTML='<span class="collection-empty">'+escapeHtml(err.message||err)+'</span>'}
}
function openBoard(id,updateUrl){
 var b=boards.find(function(x){return x.id===id});if(!b)return;
 if(updateUrl)updateBoardUrl(id);
 var note=notes()[id]||"";
 document.querySelector("#dialogContent").innerHTML='<div class="dialog-layout"><div class="dialog-board">'+miniBoard(b)+'</div><div class="dialog-info">'+
 '<span class="eyebrow">Set '+escapeHtml(b.set)+' · '+escapeHtml(b.date)+(b.time?" · "+escapeHtml(b.time):"")+'</span><h2>'+escapeHtml(b.title)+'</h2><p>'+t("placement")+': <strong>'+placementLabel(b.placement)+'</strong></p>'+
 '<div class="dialog-stat-grid"><div class="dialog-stat"><span>'+t("level")+'</span><strong>'+b.level+'</strong></div><div class="dialog-stat"><span>'+t("gold")+'</span><strong>'+b.gold+'g</strong></div><div class="dialog-stat"><span>'+t("queue")+'</span><strong>'+escapeHtml(queueLabel(b.queueId))+'</strong></div><div class="dialog-stat"><span>'+t("duration")+'</span><strong>'+formatDuration(b.duration)+'</strong></div><div class="dialog-stat"><span>'+t("damage")+'</span><strong>'+Number(b.damage||0)+'</strong></div><div class="dialog-stat"><span>'+t("eliminations")+'</span><strong>'+Number(b.eliminations||0)+'</strong></div></div>'+
 '<span class="eyebrow">'+t("traits")+'</span><div class="trait-row">'+traitHtml(b)+'</div><span class="eyebrow" style="margin-top:24px">'+t("augments")+'</span>'+augmentHtml(b)+
 '<span class="eyebrow" style="margin-top:24px">'+t("units")+'</span><div class="unit-list">'+unitListHtml(b)+'</div>'+
 '<div class="board-actions"><button class="primary-action" data-share-board="'+escapeHtml(b.id)+'">'+t("share")+'</button><button data-copy-board="'+escapeHtml(b.id)+'">'+t("copyLink")+'</button><button data-export-board="'+escapeHtml(b.id)+'">PNG</button><button data-collection-board="'+escapeHtml(b.id)+'">Coleção</button></div>'+
 '<div class="note-box"><label>'+t("note")+'</label><textarea data-note-board="'+escapeHtml(b.id)+'" placeholder="'+t("notePlaceholder")+'">'+escapeHtml(note)+'</textarea></div>'+
 (b.real?'<p style="margin-top:18px;color:#777d90;font-size:11px;line-height:1.5">'+t("visualLayout")+'</p>':"")+'</div></div>';
 dialog.showModal();
 var share=document.querySelector("[data-share-board]");if(share)share.addEventListener("click",function(){shareBoard(b.id)});
 var copyBtn=document.querySelector("[data-copy-board]");if(copyBtn)copyBtn.addEventListener("click",async function(){try{await navigator.clipboard.writeText(await publicBoardShareUrl(b.id));copyBtn.textContent=t("saved")}catch(_){}})
 var exportBtn=document.querySelector("[data-export-board]");if(exportBtn)exportBtn.addEventListener("click",function(){exportBoardPng(b.id)});
 var collectionBtn=document.querySelector("[data-collection-board]");if(collectionBtn)collectionBtn.addEventListener("click",function(){openCollectionPicker(b.id)});
 var noteEl=document.querySelector("[data-note-board]");if(noteEl)noteEl.addEventListener("input",function(){saveNote(b.id,noteEl.value)});
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
function renderHallOfFame(){
 var el=document.querySelector("#hallGrid");if(!el||!boards.length)return;
 var best=boards.slice().sort(function(a,b){return a.placement-b.placement||b.damage-a.damage})[0];
 var richest=boards.slice().sort(function(a,b){return b.gold-a.gold})[0];
 var mostThree=boards.slice().sort(function(a,b){
  var aa=a.units.filter(function(u){return Number(u[1])>=3}).length,bb=b.units.filter(function(u){return Number(u[1])>=3}).length;return bb-aa
 })[0];
 var damage=boards.slice().sort(function(a,b){return Number(b.damage||0)-Number(a.damage||0)})[0];
 function card(label,b,value){return '<button class="hall-card" data-open-hall="'+escapeHtml(b.id)+'"><span>'+label+'</span><strong>'+escapeHtml(value)+'</strong><small>'+escapeHtml(b.title)+' · '+escapeHtml(b.date)+'</small></button>'}
 el.innerHTML=card("Melhor resultado",best,placementLabel(best.placement))+card("Mais ouro restante",richest,richest.gold+"g")+card("Mais unidades 3★",mostThree,mostThree.units.filter(function(u){return Number(u[1])>=3}).length+" × 3★")+card("Maior dano registrado",damage,String(damage.damage||0));
 el.querySelectorAll("[data-open-hall]").forEach(function(btn){btn.addEventListener("click",function(){openBoard(btn.dataset.openHall,true)})})
}
function renderSetStats(){
 var el=document.querySelector("#setStatsGrid");if(!el)return;var groups={};
 boards.forEach(function(b){var k=String(b.set||"?");if(!groups[k])groups[k]=[];groups[k].push(b)});
 el.innerHTML=Object.keys(groups).sort(function(a,b){return Number(b)-Number(a)}).map(function(k){
  var list=groups[k],games=list.length,avg=list.reduce(function(s,b){return s+b.placement},0)/games,top4=Math.round(list.filter(function(b){return b.placement<=4}).length/games*100),wins=list.filter(function(b){return b.placement===1}).length;
  var traits={};list.forEach(function(b){(b.traits||[]).forEach(function(tr){var n=String(tr).replace(/^\d+\s+/,"");traits[n]=(traits[n]||0)+1})});var topTrait=Object.keys(traits).sort(function(a,b){return traits[b]-traits[a]})[0]||"—";
  return '<article class="set-stat-card"><span class="eyebrow">Set '+escapeHtml(k)+'</span><div class="set-stat-kpis"><div><small>Partidas</small><strong>'+games+'</strong></div><div><small>Média</small><strong>'+avg.toFixed(2)+'</strong></div><div><small>Top 4</small><strong>'+top4+'%</strong></div><div><small>Vitórias</small><strong>'+wins+'</strong></div></div><p>'+escapeHtml(topTrait)+'</p></article>'
 }).join("")
}
async function renderCloudCollections(){
 var section=document.querySelector("#cloudCollections"),grid=document.querySelector("#collectionGrid");
 if(!section||!grid)return;
 if(!window.MuseumCloud||!window.MuseumCloud.isSignedIn()){section.classList.add("hidden");return}
 section.classList.remove("hidden");
 try{
  var list=await window.MuseumCloud.listCollections();
  grid.innerHTML=list.length?list.map(function(x){return '<article class="collection-card"><div><span class="eyebrow">COLEÇÃO</span><h3>'+escapeHtml(x.name)+'</h3><p>'+escapeHtml(x.description||"")+'</p></div><strong>'+((x.board_ids||[]).length)+' boards</strong></article>'}).join(""):'<div class="empty">Crie sua primeira coleção.</div>'
 }catch(err){grid.innerHTML='<div class="empty">'+escapeHtml(err.message||err)+'</div>'}
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
  activeSet=btn.dataset.timeline;setFilter.value="all";patchValue="all";document.querySelector("#patchFilter").value="all";renderTimeline();render();
 })});
 el.querySelectorAll("[data-timeline-patch]").forEach(function(btn){btn.addEventListener("click",function(){
  patchValue=btn.dataset.timelinePatch;document.querySelector("#patchFilter").value=patchValue;renderTimeline();render();
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
   '<div class="compare-split"><div><span class="compare-label">'+escapeHtml(pair[0].title)+'</span><div class="compare-unit-diff">'+chips(leftOnly,"removed","− ")+'</div></div>'+
   '<div><span class="compare-label">'+escapeHtml(pair[1].title)+'</span><div class="compare-unit-diff">'+chips(rightOnly,"added","+ ")+'</div></div></div></section>';
 }
 function side(board){
  return '<section class="compare-side"><span class="eyebrow">Set '+board.set+' · '+escapeHtml(board.date)+'</span><h2>'+escapeHtml(board.title)+'</h2>'+miniBoard(board)+
  '<div class="compare-kpis"><div><span>'+t("placement")+'</span><strong>'+placementLabel(board.placement)+'</strong></div><div><span>'+t("level")+'</span><strong>'+board.level+'</strong></div><div><span>'+t("gold")+'</span><strong>'+board.gold+'g</strong></div><div><span>'+t("starPower")+'</span><strong>'+starTotal(board)+'</strong></div><div><span>'+t("items")+'</span><strong>'+itemCount(board)+'</strong></div><div><span>'+t("augments")+'</span><strong>'+(board.augments||[]).length+'</strong></div></div>'+
  '<div class="trait-row">'+traitHtml(board)+'</div></section>';
 }
 var a=pair[0],b=pair[1];
 var au=unitNames(a),bu=unitNames(b),at=normalizedTraits(a),bt=normalizedTraits(b),ai=boardItems(a),bi=boardItems(b),aa=augmentNames(a),ba=augmentNames(b);
 var summary='<div class="compare-delta"><span>'+t("placement")+': <strong>'+(a.placement===b.placement?"=":(a.placement<b.placement?escapeHtml(a.title):escapeHtml(b.title)))+'</strong></span><span>'+t("level")+': <strong>'+(a.level===b.level?"=":(a.level>b.level?escapeHtml(a.title):escapeHtml(b.title)))+'</strong></span><span>'+t("gold")+': <strong>'+Math.abs(a.gold-b.gold)+'g</strong></span><span>'+t("starPower")+': <strong>'+Math.abs(starTotal(a)-starTotal(b))+'</strong></span></div>';
 document.querySelector("#compareContent").innerHTML='<div class="compare-grid">'+side(a)+side(b)+summary+
 compareSection(t("units"),intersect(au,bu),difference(au,bu),difference(bu,au))+
 compareSection(t("traits"),intersect(at,bt),difference(at,bt),difference(bt,at))+
 compareSection(t("items"),intersect(ai,bi),difference(ai,bi),difference(bi,ai))+
 compareSection(t("augments"),intersect(aa,ba),difference(aa,ba),difference(ba,aa))+'</div>';
 document.querySelector("#compareDialog").showModal();
}
function renderAll(){syncSetFilter();syncPatchFilter();renderTimeline();updateCompareBar();updateStats();renderInsights();renderHallOfFame();renderSetStats();render();renderCloudCollections();var more=document.querySelector("#loadMoreBtn");if(more)more.classList.toggle("hidden",!hasMore)}
function applyLanguage(){
 document.documentElement.lang=lang==="pt"?"pt-BR":"en";document.querySelectorAll("[data-i18n]").forEach(function(el){var key=el.dataset.i18n;if(copy[lang][key])el.textContent=copy[lang][key]});document.querySelectorAll("[data-i18n-placeholder]").forEach(function(el){el.placeholder=t(el.dataset.i18nPlaceholder)});document.querySelector("#langToggle").textContent=lang==="pt"?"EN":"PT";renderAll();
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
async function postFunction(name,body){var response=await fetch(API_BASE+"/"+name,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)}),data=await response.json().catch(function(){return {}});if(!response.ok||data.error)throw new Error(data.message||data.error||"request_failed");return data}
async function fetchRiotPage(riotId,platform,start){var parts=riotId.split("#");if(parts.length<2||!parts[0].trim()||!parts.slice(1).join("#").trim())throw new Error("Use Nome#TAG");var data=await postFunction("public-tft-history",{gameName:parts[0].trim(),tagLine:parts.slice(1).join("#").trim(),platform:platform,start:start,count:pageSize});return {parts:parts,data:data}}
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
 var status=document.querySelector("#collectionStatus"),note=document.querySelector(".demo-note span");status.textContent=t("loading");note.textContent=t("loading");
 var result=await fetchRiotPage(riotId,platform,0),data=result.data,parts=result.parts;if(!Array.isArray(data.matches)||!data.matches.length)throw new Error(lang==="pt"?"Nenhuma partida recente encontrada.":"No recent matches found.");
 boards=data.matches.map(normalizeRiotMatch);compareSelection=[];activeSet="all";loadedRiotId=riotId;loadedPlatform=platform;nextStart=data.paging&&Number(data.paging.returned)?Number(data.paging.returned):boards.length;hasMore=Boolean(data.paging&&Number(data.paging.returned)===pageSize);
 document.querySelector("#museumTitle").textContent=(data.player&&data.player.gameName?data.player.gameName:parts[0])+"#"+(data.player&&data.player.tagLine?data.player.tagLine:parts.slice(1).join("#"));status.textContent=boards.length+(lang==="pt"?" boards oficiais carregados.":" official boards loaded.");note.textContent=t("realData");activeFilter="all";document.querySelectorAll(".filter").forEach(function(x){x.classList.toggle("active",x.dataset.filter==="all")});renderAll();
}
async function loadMoreHistory(){if(!loadedRiotId||!hasMore)return;var btn=document.querySelector("#loadMoreBtn");if(btn){btn.disabled=true;btn.textContent=t("loading")}try{var result=await fetchRiotPage(loadedRiotId,loadedPlatform,nextStart),list=Array.isArray(result.data.matches)?result.data.matches:[],known=new Set(boards.map(function(b){return b.id}));list.map(normalizeRiotMatch).forEach(function(b){if(!known.has(b.id)){boards.push(b);known.add(b.id)}});var returned=result.data.paging?Number(result.data.paging.returned)||0:list.length;nextStart+=returned;hasMore=returned===pageSize&&nextStart<100;renderAll()}catch(err){document.querySelector(".demo-note span").textContent=(err&&err.message)?String(err.message):t("loadError")}finally{if(btn){btn.disabled=false;btn.textContent=t("loadMore");btn.classList.toggle("hidden",!hasMore)}}}
function updateShareUrl(riotId,platform){var url=new URL(location.href);url.searchParams.set("riot",riotId);url.searchParams.set("region",platform);url.searchParams.delete("board");history.replaceState({},"",url)}
function maybeOpenBoardFromUrl(){var id=new URLSearchParams(location.search).get("board");if(id&&boards.some(function(b){return b.id===id}))openBoard(id,false)}
function hydrateFromUrl(){var params=new URLSearchParams(location.search),riot=params.get("riot"),region=params.get("region")||"br1";if(!riot)return;document.querySelector("#riotId").value=riot;document.querySelector("#region").value=region;document.querySelector("#riotForm").requestSubmit()}

document.querySelector("#closeDialog").addEventListener("click",closeBoard);dialog.addEventListener("click",function(e){if(e.target===dialog)closeBoard()});
document.querySelector("#langToggle").addEventListener("click",function(){lang=lang==="pt"?"en":"pt";localStorage.setItem("tbm-lang",lang);applyLanguage()});
document.querySelectorAll(".filter").forEach(function(btn){btn.addEventListener("click",function(){activeFilter=btn.dataset.filter;document.querySelectorAll(".filter").forEach(function(x){x.classList.toggle("active",x===btn)});render()})});
document.querySelector("#favoritesTop").addEventListener("click",function(){document.querySelector('[data-filter="favorite"]').click();document.querySelector("#museum").scrollIntoView({behavior:"smooth"})});
setFilter.addEventListener("change",function(){activeSet="all";renderTimeline();render()});
document.querySelector("#patchFilter").addEventListener("change",function(e){patchValue=e.target.value;render()});
document.querySelector("#sortFilter").addEventListener("change",function(e){sortMode=e.target.value;render()});
document.querySelector("#museumSearch").addEventListener("input",function(e){searchTerm=e.target.value.trim();render()});
document.querySelectorAll("[data-view]").forEach(function(btn){btn.addEventListener("click",function(){view=btn.dataset.view;document.querySelectorAll("[data-view]").forEach(function(x){x.classList.toggle("active",x===btn)});render()})});
document.querySelector("#riotForm").addEventListener("submit",async function(e){
 e.preventDefault();var value=document.querySelector("#riotId").value.trim(),platform=document.querySelector("#region").value,button=document.querySelector("#openMuseumBtn");if(!value)return;button.disabled=true;button.textContent=t("loading");document.querySelector("#museum").scrollIntoView({behavior:"smooth"});
 try{var results=await Promise.allSettled([loadRiotHistory(value,platform),loadPlayerProfile(value,platform)]);if(results[0].status==="rejected")throw results[0].reason;updateShareUrl(value,platform);maybeOpenBoardFromUrl()}catch(err){boards=demoBoards.slice();document.querySelector("#collectionStatus").textContent=t("loadError");document.querySelector(".demo-note span").textContent=(err&&err.message)?String(err.message):t("loadError");renderAll()}finally{button.disabled=false;button.textContent=t("openMuseum")}
});
document.querySelector("#compareBtn").addEventListener("click",compareBoards);document.querySelector("#loadMoreBtn").addEventListener("click",loadMoreHistory);
document.querySelector("#closeCompare").addEventListener("click",function(){document.querySelector("#compareDialog").close()});document.querySelector("#compareDialog").addEventListener("click",function(e){if(e.target.id==="compareDialog")e.target.close()});
document.querySelector("#shareProfileBtn").addEventListener("click",shareProfile);
document.querySelector("#accountBtn").addEventListener("click",function(){document.querySelector("#authDialog").showModal()});
document.querySelector("#closeAuth").addEventListener("click",function(){document.querySelector("#authDialog").close()});
document.querySelector("#closeCollection").addEventListener("click",function(){document.querySelector("#collectionDialog").close()});
document.querySelector("#newCollectionBtn").addEventListener("click",function(){openCollectionPicker("")});
document.querySelector("#authForm").addEventListener("submit",async function(e){
 e.preventDefault();var email=document.querySelector("#authEmail").value.trim(),status=document.querySelector("#authStatus");if(!email||!window.MuseumCloud)return;
 status.textContent="Enviando…";try{await window.MuseumCloud.signIn(email);status.textContent="Confira seu e-mail para entrar no Museum."}catch(err){status.textContent=String(err.message||err)}
});
document.querySelector("#signOutBtn").addEventListener("click",async function(){if(window.MuseumCloud)await window.MuseumCloud.signOut()});
document.querySelector("#collectionForm").addEventListener("submit",async function(e){
 e.preventDefault();var name=document.querySelector("#collectionName").value.trim(),desc=document.querySelector("#collectionDescription").value.trim(),dlg=document.querySelector("#collectionDialog"),boardId=dlg.dataset.boardId||"",status=document.querySelector("#collectionStatusMessage");
 if(!window.MuseumCloud||!window.MuseumCloud.isSignedIn())return;
 try{var col=await window.MuseumCloud.createCollection({name:name,description:desc,boardIds:boardId?[boardId]:[]});status.textContent="Coleção criada: "+col.name;document.querySelector("#collectionName").value="";document.querySelector("#collectionDescription").value="";renderCloudCollections();if(boardId)openCollectionPicker(boardId)}catch(err){status.textContent=String(err.message||err)}
});
window.addEventListener("museum-auth-change",function(e){
 var user=e.detail&&e.detail.user,btn=document.querySelector("#accountBtn"),out=document.querySelector("#signOutBtn"),copy=document.querySelector("#authCopy");
 btn.textContent=user?(user.email||"Conta"):"Entrar";out.classList.toggle("hidden",!user);copy.textContent=user?"Sincronização ativa neste dispositivo.":"Entre por e-mail para sincronizar favoritos, notas e coleções.";renderCloudCollections()
});
window.addEventListener("museum-cloud-state",function(e){
 var state=e.detail||{};favorites=new Set(state.favorites||[]);localStorage.setItem("tbm-favorites",JSON.stringify(Array.from(favorites)));if(state.notes)localStorage.setItem("tbm-notes",JSON.stringify(state.notes));render()
});
window.addEventListener("museum-collections-changed",renderCloudCollections);
applyLanguage();loadStaticData();hydrateFromUrl();