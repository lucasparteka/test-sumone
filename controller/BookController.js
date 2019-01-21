class BookController {

    constructor() {
        this.booksOrder();
    }

    booksOrder() {
        let valuesAvailables = [['title', '>'], ['title', '<'], ['author', '>'], ['author', '<'], ['year', '>'], ['year', '<']];
        let valuesSelected = [];

        document.querySelector('#ordenar').addEventListener('click', () => {
            let selectedAttributes = document.querySelectorAll('.divsDrop .card .custom-control-input');
            selectedAttributes.forEach((bookAttribute) => {
                if (bookAttribute.checked) {
                    valuesSelected.push(valuesAvailables[bookAttribute.value]);
                }
            });

            var arrayBooks = this.loadBooksArray();
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
            console.log(arrayBooks);
        });
        
    }

    loadBooksArray() {
        let book;
        let books = [];
        let a = document.querySelectorAll('tbody tr');
        //let td = tr.getElementByTagName('td');
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

    /* bookArrayOrder(array, attribute, operator) {
 
        let arrayOrder = array.slice();
        switch (operator) {
            case '>':
                arrayOrder.sort((a, b) => {
                    if (a[attribute] < b[attribute]) return -1;
                    if (a[attribute] > b[attribute]) return 1;
                    return 0;
                })
                break;
            case '<':
                arrayOrder.sort((a, b) => {
                    if (a[attribute] > b[attribute]) return -1;
                    if (a[attribute] < b[attribute]) return 1;
                    return 0;
                })
                break;
            default:
                console.log('nothing');
        }
 
        //console.log(array)
        return arrayOrder;
    }
 */
}

