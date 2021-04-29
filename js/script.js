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

function addBookCard() {
    let bookElement = document.createElement("div");
    bookElement.setAttribute('class', 'library-book');
    bookElement.setAttribute('id', `${idNumber}`);

    let bookElementTitle = document.createElement('h2');
    bookElementTitle.appendChild(document.createTextNode(`${bookList[0].title}`));

    let bookElementAuthor = document.createElement('h3');
    bookElementAuthor.appendChild(document.createTextNode(`${bookList[0].author}`));

    let bookElementPages = document.createElement('p');
    bookElementPages.appendChild(document.createTextNode(`${bookList[0].pages}`));

    let bookElementProgress = document.createElement('p');
    bookElementProgress.appendChild(document.createTextNode(`${bookList[0].progress}`));

    let bookElementButton = document.createElement('button');
    bookElementButton.setAttribute('class', 'removal-button');
    bookElementButton.appendChild(document.createTextNode(`Remove Book`));
}

function insertBook() {
    addBookCard();

    bookElementButton.addEventListener('click', event => {
        let parentOfBook = bookElementButton.parentNode;
        if (confirm('Are you sure you want to remove this book?')) {
            parentOfBook.parentNode.removeChild(bookElement);
        }
    });

    // Add a pop up that asks if thehy're sure they want to remove the book. if statements with true false

    bookElement.appendChild(bookElementTitle);
    bookElement.appendChild(bookElementAuthor);
    bookElement.appendChild(bookElementPages);        
    bookElement.appendChild(bookElementProgress);
    bookElement.appendChild(bookElementButton)
    libraryMain.appendChild(bookElement);
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
        insertBook();
        idNumber++
    }
}

let titleInput = document.getElementById('book-title');
let authorInput = document.getElementById('book-author');
let pagesInput = document.getElementById('book-pages');
let progressInput = document.getElementById('book-progress');
let addBookButton = document.getElementById('add-book-button');
let completedStatus = document.getElementById('completed-status');
let libraryMain = document.getElementById('library-main');
let removalButtons = document.querySelectorAll('.removal-button');

let bookTitle = null;
let bookAuthor = null;
let bookPages = 0;
let bookProgress = 0;
let bookStatus = null;
let idNumber = 0;

let bookList = [];

addBookButton.addEventListener('click', event => {getBook()});

// playground

