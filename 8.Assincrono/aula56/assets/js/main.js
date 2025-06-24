document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});

function carregaPagina(el) {
  const href = el.getAttribute('href');

  fetch(href)
    .then(response => {
      if (!response.ok) throw new Error('Erro 404: Página não encontrada');
      return response.text();
    })
    .then(html => {
      carregaResultado(html);
    })
    .catch(e => console.log(e))
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}