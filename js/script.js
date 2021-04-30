function Book(title, author, readYet) {
    this.title = title
    this.author = author
    this.readYet = readYet
}

function getValues() {
    bookTitle = titleInput.value;
    bookAuthor = authorInput.value;
    bookReadYet = bookStatus.value;
}

// function showForm() {
//     bookAddForm.classList.add('show-form');
//     bookAddForm.classList.remove('hide-form');
// }

// function hideForm() {
//     bookAddForm.classList.add('hide-form');
//     bookAddForm.classList.remove('show-form');
// }

function resetValues() {
    bookTitle = null;
    bookAuthor = null;   
    titleInput.value = '';
    authorInput.value = '';
}

function insertBook() {
    let bookElement = document.createElement("div");
    bookElement.setAttribute('class', 'library-book');
    bookElement.setAttribute('id', `${idNumber}`);

    let bookElementTitle = document.createElement('h2');
    bookElementTitle.appendChild(document.createTextNode(`${bookList[0].title}`));

    let bookElementAuthor = document.createElement('h3');
    bookElementAuthor.appendChild(document.createTextNode(`${bookList[0].author}`));

    let bookElementReadYet = document.createElement('button');
    bookElementReadYet.appendChild(document.createTextNode(`${bookList[0].readYet}`));

    let bookElementButton = document.createElement('button');
    bookElementButton.setAttribute('class', 'removal-button');
    bookElementButton.appendChild(document.createTextNode(`Remove Book`));

    bookElementButton.addEventListener('click', event => {
        let parentOfBook = bookElementButton.parentNode;
        if (confirm('Are you sure you want to remove this book?')) {
            parentOfBook.parentNode.removeChild(bookElement);
        }
    });

    bookElement.appendChild(bookElementTitle);
    bookElement.appendChild(bookElementAuthor);
    bookElement.appendChild(bookElementReadYet);
    bookElement.appendChild(bookElementButton)
    libraryMain.appendChild(bookElement);
}

function getBook() {
    getValues();
    if (bookTitle == '' || bookAuthor ==  '') {
        alert('You must have values in each input field');
    } else {
        let newBook = new Book(bookTitle, bookAuthor, bookStatus.value);
        bookList.unshift(newBook);
        resetValues();
        insertBook();
        idNumber++
    }
}

let titleInput = document.getElementById('book-title');
let authorInput = document.getElementById('book-author');
let bookStatus = document.getElementById('status');
let addBookButton = document.getElementById('add-book-button');
let libraryMain = document.getElementById('library-main');
let newBookButton = document.getElementById('new-book');
let removalButtons = document.querySelectorAll('.removal-button');

let bookAddForm = document.querySelector('.add-book-card');

let bookTitle = null;
let bookAuthor = null;
let idNumber = 0;

let bookList = [];

addBookButton.addEventListener('click', event => {
    getBook();
    hideForm();
});
newBookButton.addEventListener('click', event => {
    showForm();
});
// playground


let show = document.getElementById('show');
show.addEventListener('click', event => {
    showForm();
});
let hide = document.getElementById('hide')
hide.addEventListener('click', event => {
    hideForm();
});