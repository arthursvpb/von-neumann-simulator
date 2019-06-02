// FUNÇÃO PARA TRANSFORMAR OS INPUTS EM BINÁRIO
var submit = document.querySelector("#submit");
var entrada1 = document.querySelector("#entrada1");
var entrada2 = document.querySelector("#entrada2");
var displayBin1 = document.querySelector("#displayBin1");
var displayBin2 = document.querySelector("#displayBin2");
var tds = document.querySelectorAll("td");
var selectFuncao = document.querySelector("#selectFuncao");
var selectRegister = document.querySelector("#selectRegister");
var regDisplay = document.querySelectorAll(".regDisplay");
var execute = document.querySelector("#execute");
var celulasMemoria = document.getElementById('celulasMemoria');

var ramValues = [];
var functionValues = [];
var regLabel = document.querySelectorAll(".regLabel");
var regValues = [];
var binValues = [];

var aluFuncao = document.querySelector('.aluFuncao');
var irFuncao = document.querySelector('.irFuncao');
var pcFuncao = document.querySelector('.pcFuncao');

// Função que está sendo executada no momento
var executando = document.querySelector('#executando');


// Colocar o valor da RAM no registrador selecionado




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
submit.addEventListener('submit', function (evento){

  // Prevenir atualização da página
  evento.preventDefault();

  alert("Submit!");

  var bin1 = (+entrada1.value).toString(2);

  //** Pintar 3 células na RAM e colocar os valores quando for submitado um input **\\

  // Seleciona o conteúdo da funcao selecionada e coloca na RAM
  // Função sleep para dar efeito do delay
  var now = new Date().getTime();
  while ( new Date().getTime() < now + 2000 ){
    tds[i].textContent = selectFuncao[selectFuncao.selectedIndex].textContent;

    // Adiciona os conteúdos dos inputs na RAM
    tds[i+1].textContent = bin1;

    // Seleciona o valor do index selecionado do regitrador e coloca na RAM.
    tds[i+2].textContent = selectRegister[selectRegister.selectedIndex].value;
  }




  // Ja cria o Array com os valores da RAM no momento do input
  ramValues.push(selectFuncao[selectFuncao.selectedIndex].textContent);
  ramValues.push(bin1);
  ramValues.push(selectRegister[selectRegister.selectedIndex].value);

  // Cria o array das funcoes para serem executadas
  functionValues.push(selectFuncao[selectFuncao.selectedIndex].textContent);

  // Cria o array do endereço da próxima instrução
  regValues.push(selectRegister[selectRegister.selectedIndex].value);

  // Cria o array do conteúdo do endereço
  binValues.push(bin1);


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


execute.addEventListener('submit', function(evento) {

  // Prevenir atualização da página
  evento.preventDefault();

  alert("Run!");

  // DELAY
  var now = new Date().getTime();
  while ( new Date().getTime() < now + 1000 ){
    // ULTRA MASTER GAMBIARRA SEM LOOP NA TORA MESMO
    for(var j = 2; j <= 45; j+=3){
      if(ramValues[j] == regDisplay[0].textContent){
        regDisplay[0].textContent = ramValues[j-1];
        regDisplay[0].classList.add("bg-success");
        regLabel[0].classList.add("bg-warning");
      }

      if(ramValues[j] == regDisplay[1].textContent){
        regDisplay[1].textContent = ramValues[j-1];
        regDisplay[1].classList.add("bg-success");
        regLabel[1].classList.add("bg-warning");
      }

      if(ramValues[j] == regDisplay[2].textContent){
        regDisplay[2].textContent = ramValues[j-1];
        regDisplay[2].classList.add("bg-success");
        regLabel[2].classList.add("bg-warning");

      }

      if(ramValues[j] == regDisplay[3].textContent){
        regDisplay[3].textContent = ramValues[j-1];
        regDisplay[3].classList.add("bg-success");
        regLabel[3].classList.add("bg-warning");

      }

      if(ramValues[j] == regDisplay[4].textContent){
        regDisplay[4].textContent = ramValues[j-1];
        regDisplay[4].classList.add("bg-success");
        regLabel[4].classList.add("bg-warning");

      }

      if(ramValues[j] == regDisplay[5].textContent){
        regDisplay[5].textContent = ramValues[j-1];
        regDisplay[5].classList.add("bg-success");
        regLabel[5].classList.add("bg-warning");

      }

      if(ramValues[j] == regDisplay[6].textContent){
        regDisplay[6].textContent = ramValues[j-1];
        regDisplay[6].classList.add("bg-success");
        regLabel[6].classList.add("bg-warning");

      }

      if(ramValues[j] == regDisplay[7].textContent){
        regDisplay[7].textContent = ramValues[j-1];
        regDisplay[7].classList.add("bg-success");
        regLabel[7].classList.add("bg-warning");

      }

      if(ramValues[j] == regDisplay[8].textContent){
        regDisplay[8].textContent = ramValues[j-1];
        regDisplay[8].classList.add("bg-success");
        regLabel[8].classList.add("bg-warning");

      }

      if(ramValues[j] == regDisplay[9].textContent){
        regDisplay[9].textContent = ramValues[j-1];
        regDisplay[9].classList.add("bg-success");
        regLabel[9].classList.add("bg-warning");

      }

      if(ramValues[j] == regDisplay[10].textContent){
        regDisplay[10].textContent = ramValues[j-1];
        regDisplay[10].classList.add("bg-success");
        regLabel[10].classList.add("bg-warning");

      }

      if(ramValues[j] == regDisplay[11].textContent){
        regDisplay[11].textContent = ramValues[j-1];
        regDisplay[11].classList.add("bg-success");
        regLabel[11].classList.add("bg-warning");

      }

      if(ramValues[j] == regDisplay[12].textContent){
        regDisplay[12].textContent = ramValues[j-1];
        regDisplay[12].classList.add("bg-success");
        regLabel[12].classList.add("bg-warning");

      }

      if(ramValues[j] == regDisplay[13].textContent){
        regDisplay[13].textContent = ramValues[j-1];
        regDisplay[13].classList.add("bg-success");
        regLabel[13].classList.add("bg-warning");

      }

      if(ramValues[j] == regDisplay[14].textContent){
        regDisplay[14].textContent = ramValues[j-1];
        regDisplay[14].classList.add("bg-success");
        regLabel[14].classList.add("bg-warning");

      }
    }

  }



  aluFuncao.textContent = functionValues[0];
  aluFuncao.parentNode.classList.add("bg-primary");

  irFuncao.textContent = functionValues[1];
  irFuncao.parentNode.classList.add("bg-info");

  pcFuncao.textContent = regValues[1];
  pcFuncao.parentNode.classList.add("bg-warning");

  if (executando.textContent == "mult") {
    // console.log("pegou")
      regDisplay[(parseInt(regValues[0], 2)-1)].textContent = ((parseInt(binValues[1], 2) * parseInt(binValues[0], 2)).toString(2));
      regValues.shift();
  }
  if (executando.textContent == "add") {
    // console.log("pegou")
      regDisplay[(parseInt(regValues[0], 2)-1)].textContent = ((parseInt(binValues[1], 2) + parseInt(binValues[0], 2)).toString(2));
      regValues.shift();
  }
  if (executando.textContent == "sub") {
    // console.log("pegou")
      regDisplay[(parseInt(regValues[0], 2)-1)].textContent = ((parseInt(binValues[1], 2) - parseInt(binValues[0], 2)).toString(2));
      regValues.shift();
  }
  if (executando.textContent == "div") {
    // console.log("pegou")
      regDisplay[(parseInt(regValues[0], 2)-1)].textContent = (parseInt((parseInt(binValues[1], 2) / parseInt(binValues[0], 2))).toString(2));
      regValues.shift();
  }
  if (executando.textContent == "and") {
    // console.log("pegou")
      regDisplay[(parseInt(regValues[0], 2)-1)].textContent = (parseInt((parseInt(binValues[1], 2) && parseInt(binValues[0], 2))).toString(2));
      regValues.shift();
  }
  if (executando.textContent == "or") {
    // console.log("pegou")
      regDisplay[(parseInt(regValues[0], 2)-1)].textContent = (parseInt((parseInt(binValues[1], 2) || parseInt(binValues[0], 2))).toString(2));
      regValues.shift();
  }
  if (executando.textContent == "not") {
    // console.log("pegou")
      if ((parseInt(binValues[0], 2)).toString(2) == (parseInt(binValues[1], 2)).toString(2)) {
        regDisplay[(parseInt(regValues[0], 2)-1)].textContent = regDisplay[(parseInt(regValues[0], 2)-1)].textContent * (- 1) + 1;
      };
      regValues.shift();
  }


  functionValues.shift();


});
