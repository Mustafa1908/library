let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = document.getElementById("title");
  let author = document.getElementById("author");
  let pages = document.getElementById("pages");
  let read = document.getElementById("read");
  let newBook = new Book(title.value, author.value, pages.value, read.checked);
  myLibrary.push(newBook);
  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = "";
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

function render() {
  for (let i = 0; i <= myLibrary.length; i++) {
    let cards = document.querySelector(".card-container");
    cards.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
      let card = document.createElement("div");
      card.innerHTML = `
        <div>
          <p>"${myLibrary[i].title}"</p>
          <p>${myLibrary[i].author}</p>
          <p>${myLibrary[i].pages} pages</p>
          <button class="button-read" onclick="toggleRead(${i})">${
        myLibrary[i].read ? "Read" : "Not Read Yet"
      }</button>
          <button class="button-remove" onclick="removeBook(${i})">Remove</button>
        </div>
      `;
      cards.appendChild(card);
    }
  }
}

function removeBook(index) {
  console.log("hey");
  myLibrary.splice(index, 1);
  render();
}

let bookForm = document.querySelector(".form");

bookForm.addEventListener("submit", function (event) {
  event.preventDefault();
  dialog.close();
  addBookToLibrary();
  render();
});

const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".add-book-text");

showButton.addEventListener("click", () => {
  dialog.showModal();
});
