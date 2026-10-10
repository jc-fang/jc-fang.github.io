(function () {
  var btn = document.getElementById('news-toggle');
  if (!btn) return;
  var older = document.querySelectorAll('.news__item--older');
  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') === 'true';
    older.forEach(function (li) { li.hidden = open; });
    btn.setAttribute('aria-expanded', String(!open));
    btn.querySelector('.toggle__label').textContent = open ? btn.dataset.show : btn.dataset.hide;
  });
})();
