const { sendRequest } = require('./RequestHelper.js')
const Post = require("./Post")

class RequestHandler {

    constructor() {

    }

    async getTargetPost(userId, postId, url) {
        //Contruct the returned data as a Post data model from class Post
        const filterPosts = await this._getAllPosts(userId, url);
        const targetPost = filterPosts.filter(function (post) {
            return (post.id === postId)
        })[0];


        const post = await this._convertToPostObj(targetPost)
        return post

    }
    async printTargetPost(targetPost) {
        if (targetPost) {
            console.log(targetPost);
        } else {
            console.log(' The post not exist');
        }
    }

    //Contruct the returned data as a [ Post data model from class Post
    async printAllPosts(userId, url) {
        let filterPosts = await this._getAllPosts(userId, url);
        console.log(filterPosts);

    }
    async getAllPosts(userId, url) {
        let postArr = [];
        let allPost = await this._getAllPosts(userId, url);
       
        for (let index = 0; index < allPost.length; index++) {
            const post = await this._convertToPostObj(allPost[index])
            postArr.push(post)
            
        }
       return postArr;

    }
    async _getAllPosts(userId, url) {
        const posts = await sendRequest(url);
        return posts.filter(function (post) {
            return (post.userId === userId)
        })


    }

    async _convertToPostObj(rawData) {
        const post = new Post()
        Object.keys(rawData).forEach(key => {
            post[key] = rawData[key];
        });
        return post;
    }
}

module.exports = RequestHandler
