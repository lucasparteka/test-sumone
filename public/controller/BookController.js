class BookController {

    constructor() {
        this.booksOrder();
        this.addBook();
    }

    booksOrder() {
        let valuesAvailables = [['title', '>'], ['title', '<'], ['author', '>'], ['author', '<'], ['year', '>'], ['year', '<']];
        document.querySelector('#ordenar').addEventListener('click', () => {
            let valuesSelected = [];
            var arrayBooks = new Array;
            let selectedAttributes = 0;
            selectedAttributes = document.querySelectorAll('.divsDrop .card .custom-control-input');
            selectedAttributes.forEach((bookAttribute) => {
                if (bookAttribute.checked) {
                    valuesSelected.push(valuesAvailables[bookAttribute.value]);
                }
            });

            arrayBooks = this.loadBooksArray();
            arrayBooks.sort(function (a, b) {
                for (let i = 0; i < valuesSelected.length; i++) {
                    if (valuesSelected[i][1] == '>') {
                        if (a[valuesSelected[i][0]] > b[valuesSelected[i][0]]) return 1;
                        if (a[valuesSelected[i][0]] < b[valuesSelected[i][0]]) return -1;
                    } else if (valuesSelected[i][1] == '<') {
                        if (a[valuesSelected[i][0]] > b[valuesSelected[i][0]]) return -1;
                        if (a[valuesSelected[i][0]] < b[valuesSelected[i][0]]) return 1;
                    } else {
                        alert('error');
                    }
                }
            });
            this.insertModalLines(arrayBooks);
        });
    }

    insertModalLines(arrayBooks) {
        for (let j = 0; j < arrayBooks.length; j++) {
            let book = arrayBooks[j];
            let tr = document.createElement('tr');
            tr.innerHTML += `
                    <tr>
                        <td>${book.id}</td>
                        <td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.year}</td>
                    </tr>
                `;
            document.querySelector("#sorted-table").appendChild(tr);
        }
    }

    loadBooksArray() {
        let book;
        let books = [];
        let a = document.querySelectorAll('tbody tr');
        let b = [...a];
        for (let k = 0; k < b.length; k++) {
            let idBook = b[k].getElementsByTagName("td")[0].innerHTML;
            let titleBook = b[k].getElementsByTagName("td")[1].innerHTML;
            let authorBook = b[k].getElementsByTagName("td")[2].innerHTML;
            let yearBook = b[k].getElementsByTagName("td")[3].innerHTML;
            book = new Book(idBook, titleBook, authorBook, yearBook);
            books.push(book);
        }
        return books;
    }

    addBook() {
        document.querySelector('#btn-add-book').addEventListener('click', () => {

            let tr = 0;
            tr = document.createElement('tr');
            tr.innerHTML += `
                <tr>
                    <td>${document.querySelector("#field-id").value}</td>
                    <td>${document.querySelector("#field-title").value.substr(0, 1).toUpperCase() + document.querySelector("#field-title").value.substr(1)}</td>
                    <td>${document.querySelector("#field-author").value.substr(0, 1).toUpperCase() + document.querySelector("#field-author").value.substr(1)}</td>
                    <td>${document.querySelector("#field-year").value}</td>
                </tr>
                `;
            document.querySelector("tbody").appendChild(tr);
            document.querySelector("#form-add-book").reset();
        })
    }

}

