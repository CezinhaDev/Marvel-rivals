let indice = 0;
const imagensVisiveis = 4; 
const larguraImagem = 400; 
const totalImagens = document.querySelectorAll('.carrossel img').length;

function moverCarrossel(direcao) {
  indice += direcao * imagensVisiveis;

  if (indice < 0) {
    indice = totalImagens - imagensVisiveis;
  } else if (indice >= totalImagens) {
    indice = 0; 
  }

  document.querySelector('.carrossel').style.transform = `translateX(${-indice * larguraImagem}px)`;
}







$(document).ready(function () {
  $('#carouselExampleIndicators').carousel({
    interval: 2000, // Tempo entre slides em milissegundos (ajustável)
    ride: 'carousel', // Ativa automaticamente ao carregar a página
  });

  // Botões de controle
  $('.carousel-control-prev').click(function () {
    $('#carouselExampleIndicators').carousel('prev');
  });

  $('.carousel-control-next').click(function () {
    $('#carouselExampleIndicators').carousel('next');
  });
});

