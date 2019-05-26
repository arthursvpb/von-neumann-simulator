// FUNÇÃO PARA TRANSFORMAR OS INPUTS EM BINÁRIO
var form = document.querySelector("form");
var entrada1 = document.querySelector("#entrada1");
var entrada2 = document.querySelector("#entrada2");
var displayBin1 = document.querySelector("#displayBin1");
var displayBin2 = document.querySelector("#displayBin2");
var tds = document.querySelectorAll("td");

// Contador para pintar as células
var i = 0;

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

  // Pintar 3 células na RAM quando for submitado um input
  var count = 0;
  while(count < 3){

    tds[i++].classList.add("bg-white");

    count++;
  }

});
