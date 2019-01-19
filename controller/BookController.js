var books = [
{id: 1, title: 'Java How To Program', author: 'Deitel & Deitel', year: 2007},
{id: 2, title: 'Patterns of Enterprise Application Architecture', author: 'Martin Fowler', year: 2002},
{id: 3, title: 'Head First Design Patterns', author: 'Elisabeth Freeman', year: 2004},
{id: 4, title: 'Java How To Program', author: 'Deitel & Deitel', year: 2007}
];

books.sort(orderTitleAsc);

function orderTitleAsc(a, b){
    if(a.title < b.title) return -1;
    if(a.title > b.title) return 1;
    return 0;
}

/* books.forEach((a, b)=>{
    console.log(a, b);
}) */
console.log(books);