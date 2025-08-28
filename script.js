const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);


const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');

function handleSubmit(e) {
  e.preventDefault();
  
  if(!inputValue.value || inputValue.value <= 0) {
    alert('Por favor, insira um valor válido.');
    return;
  }else if(!selectedCurrency.value)
    alert('Por favor, selecione uma moeda!');
    return;

};

function converter(){
  if(!selectedCurrency === 'eur'){
    valueConverted = inputValue.value
  }
};

function valueFormatter(){

};