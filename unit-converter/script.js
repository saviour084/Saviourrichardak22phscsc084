function convertValue() {
  const input = document.getElementById('numberInput').value;
  const type = document.getElementById('conversionType').value;
  const resultBox = document.getElementById('resultBox');

  if (input === '' || isNaN(input)) {
    resultBox.textContent = 'Please enter a valid number';
    resultBox.classList.add('error');
    return;
  }

  resultBox.classList.remove('error');
  const num = parseFloat(input);
  let result, label;

  switch (type) {
    case 'cm-to-m':
      result = num / 100;
      label = 'meters';
      break;
    case 'km-to-m':
      result = num * 1000;
      label = 'meters';
      break;
    case 'kg-to-g':
      result = num * 1000;
      label = 'grams';
      break;
  }

  resultBox.textContent = `${num} → ${result} ${label}`;
}