function Book(title, author, pages, readYet) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readYet = readYet
    this.info = function() {
        return`${this.title} by ${this.author}, ${this.pages} pages, ${this.readYet}`;
    }
}

// function getBook() {
//     bookTitle = 
// }