var array = [];

addBook(1, 'Java How To Program', 'Deitel & Deitel', 2007);
addBook(2, 'Patterns of Enterprise Application Architecture', 'Martin Fowler', 2002);
addBook(3, 'Head First Design Patterns', 'Elisabeth Freeman', 2004);
addBook(4, 'Internet & World Wide Web: How to Program', 'Deitel & Deitel', 2007);

function addBook(id, title, author, year) {
    var book = new Book(id, title, author, year);
    array.push(book);

}

this.orderBookAtribute('year', '>');

function orderBookAtribute(atribute, operator) {
    switch (operator) {
        case '>':
            array.sort((a, b) => {
                if (a[atribute] < b[atribute]) return -1;
                if (a[atribute] > b[atribute]) return 1;
                return 0;
            })
            break;
        case '<':
            array.sort((a, b) => {
                if (a[atribute] > b[atribute]) return -1;
                if (a[atribute] < b[atribute]) return 1;
                return 0;
            })
            break;
        default:
            console.log('nothing');
    }
}

array.forEach((a)=>{
    console.log(a.year);
})
