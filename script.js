// FUNÇÃO PARA TRANSFORMAR OS INPUTS EM BINÁRIO
var form = document.querySelector("form");
var entrada1 = document.querySelector("#entrada1");
var entrada2 = document.querySelector("#entrada2");
var displayBin1 = document.querySelector("#displayBin1");
var displayBin2 = document.querySelector("#displayBin2");
var tds = document.querySelectorAll("td");

// Converte e mostra o display do INPUT1
entrada1.addEventListener("input", function() {
  var bin1 = (+entrada1.value).toString(2);
  displayBin1.textContent = bin1;
});

// Converte e mostra o display do INPUT2
entrada2.addEventListener("input", function() {
  var bin2 = (+entrada2.value).toString(2);
  displayBin2.textContent = bin2;
});

// Pega os binários e salva
form.addEventListener("submit", function (evento){

  evento.preventDefault();

  var bin1 = (+entrada1.value).toString(2);
  var bin2 = (+entrada2.value).toString(2);

  // alert(bin1);
  // alert(bin2);

  // Pintar quando for enviado um input
  // Ainda falta ajeitar a função para pintar 3 quadrados em ordem toda vez que apertar submit
  for (var i = 0; i < 3; i++) {
    tds[i].classList.add("bg-white");
  }

});
