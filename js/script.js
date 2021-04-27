function Book(title, author, pages, progress) {
    this.title = title
    this.author = author
    this.pages = pages
    this.progress = progress
    // this.readYet = readYet
    this.info = function() {
        return`${this.title} by ${this.author}, ${this.pages} pages, ${this.readYet}`;
    }
}

function getBook() {
    if (bookTitle == null || bookAuthor == null || bookPages == null || bookProgress || null) {
        return
    } else {
        bookTitle = titleInput.value;
        bookAuthor = authorInput.value;
        bookPages = pagesInput.value;
        bookProgress = progressInput.value;
        let newBook = new Book(bookTitle, bookAuthor, bookPages, bookProgress)
        bookList.push(newBook);
    }
}

let titleInput = document.getElementById('book-title');
let authorInput = document.getElementById('book-author');
let pagesInput = document.getElementById('book-pages');
let progressInput = document.getElementById('book-progress');
let addBookButton = document.getElementById('add-book-button');

let bookTitle = null;
let bookAuthor = null;
let bookPages = 0;
let bookProgress = 0;

let bookList = [];

addBookButton.addEventListener('click', getBook())