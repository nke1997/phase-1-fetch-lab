function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch("https://anapioficeandfire.com/api/books")
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(data => renderBooks(data))
};

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach (book => {
    const bookLi = document.createElement("li")
    bookLi.textContent = book.name
    main.appendChild(bookLi)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});