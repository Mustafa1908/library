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


function render() {
  for(let i = 0; i < myLibrary.length; i ++) {
    let cards = document.querySelector(".card-container");
    cards.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i ++) {
      let card = document.createElement("div");
      let title = document.createElement("p");
      let author = document.createElement("p");
      let pages = document.createElement("p");
      let read = document.createElement("p");
      title.innerText = myLibrary[i].title;
      author.innerText = myLibrary[i].author;
      pages.innerText = myLibrary[i].pages;
      read.innerText = myLibrary[i].read;
      card.appendChild(title);
      card.appendChild(author);
      card.appendChild(pages);
      card.appendChild(read);
      cards.appendChild(card);
    }
  }
}

let submit = document.querySelector(".submit-button");

submit.addEventListener("click", function(event) {
  event.preventDefault();
  addBookToLibrary();
  render();
})


const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".add-book-text");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

submit.addEventListener("click", () => {
  dialog.close();
});