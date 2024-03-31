class Post {
    constructor(userId, id, title, body){
        this._userId = userId;
        this._id = id;
        this._title = title;
        this._body = body;
    }
    get userId(){
        return this._userId;
    }

    set userId(userId){
        return this._userId = userId;
    }
    get id(){
        return this._id;
    }

    set id(id){
        return this._id = id;
    }

    get title(){
        return this._title;
    }

    set title(title){
        return this._title = title;
    }

    get body(){
        return this._body;
    }

    set body(body){
        return this._body = body;
    }
}
module.exports = Post
