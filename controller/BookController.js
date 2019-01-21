class BookController {

    constructor() {
        this.booksOrder();
        this.addBook();
        this.removeModalLines();
    }

    booksOrder() {
        let valuesAvailables = [['title', '>'], ['title', '<'], ['author', '>'], ['author', '<'], ['year', '>'], ['year', '<']];
        let valuesSelected = [];
        var arrayBooks = new Array;
        document.querySelector('#ordenar').addEventListener('click', () => {
            let selectedAttributes = document.querySelectorAll('.divsDrop .card .custom-control-input');
            selectedAttributes.forEach((bookAttribute) => {
                if (bookAttribute.checked) {
                    valuesSelected.push(valuesAvailables[bookAttribute.value]);
                }
            });

            arrayBooks = this.loadBooksArray();
            arrayBooks.sort(function (a, b) {

                for (let i in valuesSelected) {
                    if (valuesSelected[i][1] == '>') {
                        if (a[valuesSelected[i][0]] > b[valuesSelected[i][0]]) return 1;
                        if (a[valuesSelected[i][0]] < b[valuesSelected[i][0]]) return -1;
                    } else {
                        if (a[valuesSelected[i][i]] > b[valuesSelected[i][0]]) return -1;
                        if (a[valuesSelected[i][i]] < b[valuesSelected[i][0]]) return 1;
                    }
                    if (i == valuesSelected.length - 1) break;
                }

            });

            for (let i in arrayBooks) {
                let book = arrayBooks[i];
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
        });

    }

    removeModalLines() {

        console.log('olá');

        $(document).ready(function () {
            $("#modal-center").on('hidden.bs.modal', function () {
                document.querySelector('#sorted-table').innerHTML = "";
                this.arrayBooks.splice(0, arrayBooks.length);
                console.log(arrayBooks.length)
                this.valuesSelected.splice(0, valuesSelected.length);
                console.log(valuesSelected.length);
            });
        });
    }

    loadBooksArray() {
        let book;
        let books = [];
        let a = document.querySelectorAll('tbody tr');
        let b = [...a];
        for (let i in b) {
            let idBook = b[i].getElementsByTagName("td")[0].innerHTML;
            let titleBook = b[i].getElementsByTagName("td")[1].innerHTML;
            let authorBook = b[i].getElementsByTagName("td")[2].innerHTML;
            let yearBook = b[i].getElementsByTagName("td")[3].innerHTML;
            book = new Book(idBook, titleBook, authorBook, yearBook);
            books.push(book);
        }
        return books;
    }

    addBook() {
        document.querySelector('#btn-add-book').addEventListener('click', () => {

            let tr = document.createElement('tr');

            tr.innerHTML += `
        <tr>
            <td>${document.querySelector("#field-id").value}</td>
            <td>${document.querySelector("#field-title").value}</td>
            <td>${document.querySelector("#field-author").value}</td>
            <td>${document.querySelector("#field-year").value}</td>
         </tr>
        `;

            document.querySelector("tbody").appendChild(tr);
            document.querySelector("#form-add-book").reset();
        })
    }
}

