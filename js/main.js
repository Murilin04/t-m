(function(){
  "use strict";

  // ======================= PERSONALIZE AQUI =======================
  // Dados puxados do Instagram @tem_manutencao. Ajuste se algo mudar.
  var CONFIG = {
    nomeEmpresa: "T&M Manutenção",
    // Link oficial de WhatsApp da conta (Instagram > @tem_manutencao > Whatsapp).
    // Se um dia eles gerarem um número de WhatsApp Business normal, troque por:
    // "https://wa.me/55DDDNUMERO"
    whatsappLink: "https://wa.me/message/6XUC6Z4WZH77O1",
    instagramUrl: "https://www.instagram.com/tem_manutencao/",
    regiaoTexto: "Atendemos Planaltina (GO) e região. Manda seu endereço no WhatsApp que confirmamos na hora se cobrimos sua área.",
    horarioTexto: "seg. a sáb., 8h às 18h"
  };
  // =================================================================

  function waLink(message){
    return CONFIG.whatsappLink + "?text=" + encodeURIComponent(message);
  }

  ["igTop","igVideosLink","igHandleLink","igFollow","igFooterLink","igFloat"].forEach(function(id){
    var el = document.getElementById(id);
    if (el) el.href = CONFIG.instagramUrl;
  });

  var genericMsg = "Olá! Vi o site da " + CONFIG.nomeEmpresa + " e quero um orçamento para manutenção da minha piscina.";

  ["waTop","waHero","waFinal","waFloat"].forEach(function(id){
    var el = document.getElementById(id);
    if (el) el.href = waLink(genericMsg);
  });

  document.querySelectorAll('a[data-plan]').forEach(function(a){
    var plan = a.getAttribute('data-plan');
    a.href = waLink("Olá! Vi o site da " + CONFIG.nomeEmpresa + " e quero contratar o plano " + plan + ".");
  });

  ["bizNameTop","bizNameDiff","bizNameFoot"].forEach(function(id){
    var el = document.getElementById(id);
    if (el) el.textContent = CONFIG.nomeEmpresa;
  });
  document.getElementById("coverageText").textContent = CONFIG.regiaoTexto;
  document.getElementById("hoursText").textContent = CONFIG.horarioTexto;

  // smooth scroll for in-page section links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var id = a.getAttribute('href').slice(1);
      var target = id && document.getElementById(id);
      if (target){
        e.preventDefault();
        target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block:'start' });
      }
    });
  });
})();
