// DARK MODE
const darkModeBtn = document.getElementById('darkModeBtn');

// VERIFICA TEMA SALVO
if(localStorage.getItem('theme') === 'dark') {

  document.body.classList.add('dark');

}

// ALTERA TEMA
darkModeBtn.addEventListener('click', () => {

  document.body.classList.toggle('dark');

  if(document.body.classList.contains('dark')) {

    localStorage.setItem('theme', 'dark');

  } else {

    localStorage.setItem('theme', 'light');

  }

});

// FORMULÁRIO
const form = document.getElementById('vacinaForm');

form.addEventListener('submit', (e) => {

  e.preventDefault();

  alert('Agendamento realizado com sucesso!');

  form.reset();

});

// MICRO ANIMAÇÕES
const cards = document.querySelectorAll(
  '.card, .benefit-card, .dashboard-card'
);

window.addEventListener('scroll', () => {

  cards.forEach(card => {

    const top = card.getBoundingClientRect().top;

    if(top < window.innerHeight - 100) {

      card.style.opacity = '1';
      card.style.transform = 'translateY(0px)';

    }

  });

});

cards.forEach(card => {

  card.style.opacity = '0';
  card.style.transform = 'translateY(40px)';
  card.style.transition = '0.6s';

});

// CONSOLE
setTimeout(() => {

  console.log('DoseControl ativo');

}, 2000);