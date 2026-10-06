(function(){
  var key="tbm-consent-v1";
  function read(){try{return JSON.parse(localStorage.getItem(key)||"null")}catch(_){return null}}
  function save(value){localStorage.setItem(key,JSON.stringify({essential:true,measurement:Boolean(value.measurement),ads:Boolean(value.ads),updatedAt:new Date().toISOString()}));remove()}
  function remove(){var el=document.querySelector("#consentToast");if(el)el.remove()}
  function show(){
    if(read())return;
    var el=document.createElement("aside");el.id="consentToast";el.className="consent-toast";
    el.innerHTML='<p><strong>Privacidade no Museum.</strong><br>Cookies essenciais mantêm preferências locais. Anúncios ainda estão desativados; você pode deixar preparada sua preferência para medição e publicidade futura.</p><div class="consent-actions"><button type="button" data-consent="essential">Somente essenciais</button><button type="button" class="accept" data-consent="optional">Aceitar opcionais</button></div>';
    document.body.appendChild(el);
    el.querySelector('[data-consent="essential"]').addEventListener("click",function(){save({measurement:false,ads:false})});
    el.querySelector('[data-consent="optional"]').addEventListener("click",function(){save({measurement:true,ads:true})});
  }
  window.TBMConsent={get:read,reset:function(){localStorage.removeItem(key);show()}};
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",show);else show();
})();