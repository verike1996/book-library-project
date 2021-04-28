function Book(title, author, pages, progress, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.progress = progress
    this.status = status
    // this.readYet = readYet
    // this.info = function() {
    //     return`${this.title} by ${this.author}, ${this.pages} pages, ${this.readYet}`;
    // }
}

function getValues() {
    bookTitle = titleInput.value;
    bookAuthor = authorInput.value;
    bookPages = pagesInput.value;
    bookProgress = progressInput.value;
    bookStatus = completedStatus.checked;
}

function resetValues() {
    bookTitle = null;
    bookAuthor = null;
    bookPages = 0;
    bookProgress = 0;
    bookStatus = null;
}

function insertBook() {
    libraryMain.innerHTML = `<h1>${bookList[0].title}</h1>`
}

function getBook() {
    getValues();
    if (isNaN(bookPages) || isNaN(bookProgress)) {
        alert('You must enter numbers for Book Pages or Pages Read');
    } else if (bookTitle == null || bookAuthor == null || bookPages == null || bookProgress == null) {
        alert('You must have values in each input field')
    } else {
        let newBook = new Book(bookTitle, bookAuthor, bookPages, bookProgress, bookStatus);
        bookList.unshift(newBook);
        resetValues();
        insertBook();
    }
}

let titleInput = document.getElementById('book-title');
let authorInput = document.getElementById('book-author');
let pagesInput = document.getElementById('book-pages');
let progressInput = document.getElementById('book-progress');
let addBookButton = document.getElementById('add-book-button');
let completedStatus = document.getElementById('completed-status');
let libraryMain = document.getElementById('library-main');

let bookTitle = null;
let bookAuthor = null;
let bookPages = 0;
let bookProgress = 0;
let bookStatus = null;

let bookList = [];

addBookButton.addEventListener('click', event => {getBook()})