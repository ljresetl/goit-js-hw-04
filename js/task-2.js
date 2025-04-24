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

function makeArray(firstArray, secondArray, maxLength) {
  const mergedArray = firstArray.concat(secondArray);

  if (mergedArray.length > maxLength) {
    return mergedArray.slice(0, maxLength);
  }

  return mergedArray;
}


// Якщо потрібно тільки в консоль, то потрібно замінити output на console.log нижче і видалити перші дві функції
output(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
output(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
output(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
output(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
output(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
output(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []