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

function slugify(title) {
  return title.toLowerCase().split(" ").join("-");
}

// Якщо потрібно тільки в консоль, то потрібно замінити output на console.log нижче і видалити перші дві функції
output(slugify("Arrays for beginners")); // "arrays-for-beginners"
output(slugify("English for developer")); // "english-for-developer"
output(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
output(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
