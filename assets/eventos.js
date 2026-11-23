// Mostra cada evento só dentro da janela de datas (data-inicio / data-fim, formato AAAA-MM-DD).
(function () {
  var hoje = new Date();
  var h = hoje.getFullYear() + '-' + String(hoje.getMonth() + 1).padStart(2, '0') + '-' + String(hoje.getDate()).padStart(2, '0');
  document.querySelectorAll('.evento[data-fim]').forEach(function (el) {
    var ini = el.getAttribute('data-inicio') || '0000-00-00';
    var fim = el.getAttribute('data-fim') || '9999-99-99';
    if (h < ini || h > fim) { el.style.display = 'none'; }
  });
  // QR code (só aparece em computador, ver CSS)
  var alvo = document.getElementById('qr-code');
  if (alvo && window.QRCode) {
    var url = new URL('../baixar.html?c=' + alvo.getAttribute('data-cidade'), window.location.href).href;
    new QRCode(alvo, { text: url, width: 128, height: 128 });
  }
})();
