// Функція для виведення результату на екран
function displayResult(message) {
  const resultDiv = document.getElementById('results');
  const p = document.createElement('p');
  p.textContent = message;
  resultDiv.appendChild(p);
}

// Об'єднана функція для виводу і в консоль, і на екран
function output(message) {
  console.log(message);
  displayResult(message);
}

function filterArray(numbers, value) {
  const result = [];

  for (const number of numbers) {
    if (number > value) {
      result.push(number);
    }
  }

  return result;
}

// Якщо потрібно тільки в консоль, то потрібно замінити output на console.log нижче і видалити перші дві функції
output(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
output(filterArray([1, 2, 3, 4, 5], 4)); // [5]
output(filterArray([1, 2, 3, 4, 5], 5)); // []
output(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
output(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]