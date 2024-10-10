function Calculadora() {
 let currentDisplayValue = '';
 this.appendToDisplay = function(value) {
  currentDisplayValue += value;
  document.getElementById('display').value = currentDisplayValue;
 };
 this.clearDisplay = function() {
  currentDisplayValue = '';
  document.getElementById('display').value = '';
 };
 this.calculate = function() {
  let result;
  try {
   result = eval(currentDisplayValue);
  } catch (error) {
   result = 'Erro';
  }
  document.getElementById('display').value = result;
  currentDisplayValue = '';
 };
}

const minhaCalculadora = new Calculadora();

document.querySelectorAll('.key').forEach(button => {
 button.addEventListener('click', function() {
  const value = this.innerText;
  if (value === 'C') {
   minhaCalculadora.clearDisplay();
  } else if (value === '=') {
   minhaCalculadora.calculate();
  } else {
   minhaCalculadora.appendToDisplay(value);
  }
 });
});