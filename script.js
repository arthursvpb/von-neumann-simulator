// FUNÇÃO PARA TRANSFORMAR OS INPUTS EM BINÁRIO
var form = document.querySelector("form");
var entrada1 = document.querySelector("#entrada1");
var entrada2 = document.querySelector("#entrada2");
var displayBin1 = document.querySelector("#displayBin1");
var displayBin2 = document.querySelector("#displayBin2");
var tds = document.querySelectorAll("td");
var selectFuncao = document.querySelector("#selectFuncao");
var selectRegister = document.querySelector("#selectRegister");
var regDisplay = document.querySelectorAll(".regDisplay");
var execute = document.querySelector("#execute");

// Variáveis da memória RAM
var ramValues = [];
var functionValues = [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42];
var valueValues = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43];
var regValues = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44];

// Função para pegar os valores dentro da RAM
function getCellValues() {
    ramValues = [];
    var celulasMemoria = document.getElementById('celulasMemoria');
    for (var r = 0, n = celulasMemoria.rows.length; r < n; r++) {
        for (var c = 0, m = celulasMemoria.rows[r].cells.length; c < m; c++) {
          ramValues.push(celulasMemoria.rows[r].cells[c].innerHTML);
        }
    }
}

getCellValues();

// Colocar o valor da RAM no registrador selecionado
function printValues() {
  // debugger
  for(let j = 0; j < 45; j++){
    if (j in functionValues) {
      // console.log(functionValues[j])
      // vai para dentro da ULA
    }
    if (j in valueValues) {
      // console.log(valueValues[j])
      // vai para dentro do registrador designado
    }
    if (j in regValues) {
      // console.log(regValues[j])
      // local onde sera armazenado o valor
      var registradorTable = document.getElementById('registradorTable');
      for (var r = 0, n = registradorTable.rows.length; r < n; r++) {
        // for (var c = 0, m = registradorTable.rows[r].cells.length; c < m; c++) {
        if (registradorTable.rows[r].cells[0].attributes.registervalue.value == regValues[j]){
          for (var k = 1, n = ramValues.length, o = 3; k < n; k+=o){
            console.log(ramValues[k])
          }
          // registradorTable.rows[r].cells[c].innerHTML
        }
      }
    }
  }
};



// Contador para pintar as células
var i = 0;

// Converte e mostra o display do INPUT1 (numero)
entrada1.addEventListener("input", function() {
  var bin1 = (+entrada1.value).toString(2);
  displayBin1.textContent = bin1;
});

// Converte e mostra o display do INPUT2 (selecionar registrador)
selectRegister.addEventListener("input", function() {
  var bin2 = (+selectRegister[selectRegister.selectedIndex].value);
  displayBin2.textContent = bin2;
});

// Pega os binários e salva
form.addEventListener("submit", function (evento){

  // Prevenir atualização da página
  evento.preventDefault();

  var bin1 = (+entrada1.value).toString(2);

  //** Pintar 3 células na RAM e colocar os valores quando for submitado um input **\\

  // Seleciona o conteúdo da funcao selecionada e coloca na RAM
  tds[i].textContent = selectFuncao[selectFuncao.selectedIndex].textContent;

  // Adiciona os conteúdos dos inputs na RAM
  tds[i+1].textContent = bin1;

  // Seleciona o valor do index selecionado do regitrador e coloca na RAM.
  tds[i+2].textContent = selectRegister[selectRegister.selectedIndex].value;

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
