const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);


const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');

function handleSubmit(e){ 
  e.preventDefault();
  
  if(!inputValue.value || inputValue.value <= 0) {
    alert('Por favor, insira um valor válido.');
    return;
  }else if(!selectedCurrency.value) {
    alert('Por favor, selecione uma moeda!');
    return;
  }
  converter();
  animatedResult();
};

function converter(){
  if(selectedCurrency.value === 'eur'){
    valueConverted = inputValue.value / 6.35;
    result.innerHTML = valueFormatter('pt-BR', 'EUR');

  }else if(selectedCurrency.value === 'dol'){
    valueConverted = inputValue.value / 5.45;
    result.innerHTML = valueFormatter('pt-BR', 'USD');
  }

  inputValue.value = '';
  selectedCurrency.value = '';
};

function valueFormatter(locale,currency){
  const value = valueConverted.toLocaleString(`${locale}`, {style: 'currency', currency: `${currency}`});
  return `<span>🤑</span> ${value} <span>🤑</span>`

};

function animatedResult() {
  return result.animate([
    {transform: 'translateY(-150px)'},
    {transform: 'translateY(0px)'}
  ], {duration: 500});
}