class BookController {

    constructor() {
        this._array = [];
        this.createBooks();
    }

    createBooks() {

        this._array.push(new Book(1, 'Java How To Program', 'Deitel & Deitel', 2007));
        this._array.push(new Book(2, 'Patterns of Enterprise Application Architecture', 'Martin Fowler', 2002));
        this._array.push(new Book(3, 'Head First Design Patterns', 'Elisabeth Freeman', 2004));
        this._array.push(new Book(4, 'Internet & World Wide Web: How to Program', 'Deitel & Deitel', 2007));

        let aaa = this._array.slice();
        this._array.slice(this.orderBookAtribute(aaa, 'author', '<'));
        console.log(aaa);
        console.log(this._array)
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