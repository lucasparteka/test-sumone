class BookController {

    constructor() {
        this._array = [];

        //this.createBooks();
        this.orderBooks();
    }

    /* get Obj(){
        return this.obj;
    }

    set Obj(value){
        this.obj = value;
    } */
    /*  createBooks() {
 
         this._array.push(new Book(1, 'Java How To Program', 'Deitel & Deitel', 2007));
         this._array.push(new Book(2, 'Patterns of Enterprise Application Architecture', 'Martin Fowler', 2002));
         this._array.push(new Book(3, 'Head First Design Patterns', 'Elisabeth Freeman', 2004));
         this._array.push(new Book(4, 'Internet & World Wide Web: How to Program', 'Deitel & Deitel', 2007));
 
         let aaa = this._array.slice();
         this._array.slice(this.orderBookAtribute(aaa, 'author', '<'));
         console.log(aaa);
         console.log(this._array)
     } */

    orderBooks() {
        let obj = [['title', '>'], ['title', '<'], ['author', '>'], ['author', '<'], ['year', '>'], ['year', '<']];
        let arr = [];
        document.querySelector('#ordenar').addEventListener('click', () => {
            var atributes = document.querySelectorAll('.divsDrop .card .custom-control-input');
            atributes.forEach((a) => {
                if (a.checked) {
                    arr.push(obj[a.value]);
                }
            });
            //console.log(arr);
            let arrayBooks = this.loadBooksArray();
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

    orderBookAtribute(array, atribute, operator) {

        switch (operator) {
            case '>':
                this._array.sort((a, b) => {
                    if (a[atribute] < b[atribute]) return -1;
                    if (a[atribute] > b[atribute]) return 1;
                    return 0;
                })
                break;
            case '<':
                this._array.sort((a, b) => {
                    if (a[atribute] > b[atribute]) return -1;
                    if (a[atribute] < b[atribute]) return 1;
                    return 0;
                })
                break;
            default:
                console.log('nothing');
        }

        //console.log(this._array);
        return array;
    }

}