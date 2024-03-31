const Post = require('./Post');

class RequestHandler {

    async printTargetPost(userId, postId) {
        try {
            const post = await this._getPostById(postId);
            console.log(post.toString());
        } catch (error) {
            console.error(error.message);
        }
    }

    async printAllPosts(userId) {
        try {
            const allPosts = await this._getAllPosts(userId);
            allPosts.forEach(post => console.log(post.toString()));
        } catch (error) {
            console.error(error.message);
        }
    }

    async _getPostById(postId) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch post with ID ${postId}`);
        }
        const postData = await response.json();
        return new Post(postData.userId, postData.id, postData.title, postData.body);
    }

    async _getAllPosts(userId) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch posts for user ${userId}`);
        }
        const postData = await response.json();
        return postData.map(post => new Post(post.userId, post.id, post.title, post.body));
    }
}

module.exports = RequestHandler;
