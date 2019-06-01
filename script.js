// FUNÇÃO PARA TRANSFORMAR OS INPUTS EM BINÁRIO
var form = document.querySelector("form");
var entrada1 = document.querySelector("#entrada1");
var entrada2 = document.querySelector("#entrada2");
var displayBin1 = document.querySelector("#displayBin1");
var displayBin2 = document.querySelector("#displayBin2");
var tds = document.querySelectorAll("td");
var selectFuncao = document.querySelector("#selectFuncao");

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

  // Pintar 3 células na RAM e colocar os valores quando for submitado um input

  // Seleciona o conteúdo da funcao selecionada e coloca na RAM
  tds[i].textContent = selectFuncao[selectFuncao.selectedIndex].textContent;

  // Adiciona os conteúdos dos inputs na RAM
  tds[i+1].textContent = bin1;
  tds[i+2].textContent = bin2;

  // Contador para pintar 3
  var count = 0;
  while(count < 3){

    tds[i].classList.add("bg-success");

    i++;

    count++;
    
  }

});

// Desativar input do teclado quando digito em um input number
$("[type='number']").keypress(function (evt) {
    evt.preventDefault();
});
