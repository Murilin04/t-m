(function(){
  "use strict";

  // ======================= PERSONALIZE AQUI =======================
  // Dados puxados do Instagram @tem_manutencao. Ajuste se algo mudar.
  var CONFIG = {
    nomeEmpresa: "T&M Manutenção",
    // Os dois sócios que podem atender pelo WhatsApp. Quem clicar em qualquer
    // botão de WhatsApp do site escolhe com quem falar antes de abrir o chat.
    // "link" é usado quando não há um número direto (ex.: o link oficial que o
    // Instagram gera); "phone" é usado para montar um link wa.me/55DDDNUMERO.
    whatsappContatos: [
      { nome: "Tiago", link: "https://wa.me/message/6XUC6Z4WZH77O1" },
      { nome: "Matheus", phone: "5561993100420" }
    ],
    instagramUrl: "https://www.instagram.com/tem_manutencao/",
    regiaoTexto: "Atendemos Planaltina (GO), Formosa (GO) e região. Manda seu endereço no WhatsApp que confirmamos na hora se cobrimos sua área.",
    horarioTexto: "seg. a sáb., 8h às 18h"
  };
  // =================================================================

  function waLink(contato, message){
    var base = contato.link || ("https://wa.me/" + contato.phone);
    return base + "?text=" + encodeURIComponent(message);
  }

  ["igTop","igVideosLink","igHandleLink","igFollow","igFooterLink","igFloat"].forEach(function(id){
    var el = document.getElementById(id);
    if (el) el.href = CONFIG.instagramUrl;
  });

  var genericMsg = "Olá! Vi o site da " + CONFIG.nomeEmpresa + " e quero um orçamento para manutenção da minha piscina.";

  ["waTop","waHero","waFinal","waFloat"].forEach(function(id){
    var el = document.getElementById(id);
    if (el){
      el.href = waLink(CONFIG.whatsappContatos[0], genericMsg);
      el.dataset.waMsg = genericMsg;
      el.classList.add('js-wa-trigger');
    }
  });

  document.querySelectorAll('a[data-plan]').forEach(function(a){
    var plan = a.getAttribute('data-plan');
    var msg = "Olá! Vi o site da " + CONFIG.nomeEmpresa + " e quero contratar o plano " + plan + ".";
    a.href = waLink(CONFIG.whatsappContatos[0], msg);
    a.dataset.waMsg = msg;
    a.classList.add('js-wa-trigger');
  });

  // escolha de contato: ao clicar em qualquer botão de WhatsApp, abre um
  // modal perguntando com qual dos dois sócios a pessoa quer falar.
  var waModal = document.getElementById('waModal');
  var waModalOptions = document.getElementById('waModalOptions');
  var waModalClose = document.getElementById('waModalClose');
  var lastWaTrigger = null;

  function openWaModal(message){
    waModalOptions.innerHTML = '';
    CONFIG.whatsappContatos.forEach(function(contato){
      var a = document.createElement('a');
      a.className = 'wa-modal-option';
      a.href = waLink(contato, message);
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = 'Falar com ' + contato.nome;
      a.addEventListener('click', function(){ waModal.close(); });
      waModalOptions.appendChild(a);
    });
    if (typeof waModal.showModal === 'function') waModal.showModal();
    else waModal.setAttribute('open', '');
  }

  document.addEventListener('click', function(e){
    var trigger = e.target.closest('.js-wa-trigger');
    if (!trigger) return;
    e.preventDefault();
    lastWaTrigger = trigger;
    openWaModal(trigger.dataset.waMsg || genericMsg);
  });

  waModalClose.addEventListener('click', function(){ waModal.close(); });

  // clicar fora do painel (no backdrop do <dialog>) fecha o modal
  waModal.addEventListener('click', function(e){
    if (e.target === waModal) waModal.close();
  });

  waModal.addEventListener('close', function(){
    if (lastWaTrigger) lastWaTrigger.focus();
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
