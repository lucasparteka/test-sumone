class Book {

    constructor (id, title, author, year, ){

        this._id = id;
        this._title = title,
        this._author = author,
        this._year = year
    }

    get id(){
        return this._id;
    }

    get title(){
        return this._title;
    }

    get author(){
        return this._author;
    }

    get year(){
        return this._year;
    }

    set id(value){
        this._id = value;
    }

    set title(value){
        this._title = value;
    }

    set author(value){
        this._author = value;
    }

    set year(value){
        this._year = value;
    }

}