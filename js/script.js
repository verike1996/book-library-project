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
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    progressInput.value = '';
    completedStatus.checked = '';
}

function insertBook() {
    let newHTML = `<h1>${bookList[0].title}</h1>`;
    libraryMain.insertAdjacentElement(newHTML, libraryMain);
}

function getBook() {
    getValues();
    if (bookTitle == '' || bookAuthor ==  '' || bookPages == '' || bookProgress == '') {
        alert('You must have values in each input field');
    } else if (isNaN(bookPages) || isNaN(bookProgress)) {
        alert('You must enter numbers for Book Pages or Pages Read');
    } else {
        let newBook = new Book(bookTitle, bookAuthor, bookPages, bookProgress, bookStatus);
        bookList.unshift(newBook);
        resetValues();
        addBookToDOM();
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

addBookButton.addEventListener('click', event => {getBook()});


// playground

function addBookToDOM() {
    let bookElement = document.createElement("div");
    bookElement.setAttribute('class', 'library-book');
    let bookElementTitle = document.createElement('span');
    bookElementTitle.appendChild(document.createTextNode(`${bookList[0].title}`));

    let bookElementAuthor = document.createElement('span');
    bookElementAuthor.appendChild(document.createTextNode(`${bookList[0].author}`));

    let bookElementPages = document.createElement('span');
    bookElementPages.appendChild(document.createTextNode(`${bookList[0].pages}`));

    let bookElementProgress = document.createElement('span');
    bookElementProgress.appendChild(document.createTextNode(`${bookList[0].progress}`));

    bookElement.appendChild(bookElementTitle);
    bookElement.appendChild(bookElementAuthor);
    bookElement.appendChild(bookElementPages);        bookElement.appendChild(bookElementProgress);
    libraryMain.appendChild(bookElement);
}