class Post {
    constructor(userId, postId, title, body) {
        this.userId = userId;
        this.postId = postId;
        this.title = title;
        this.body = body;
    }

    toString() {
        return `Post ${this.postId} by User ${this.userId}: ${this.title}\n${this.body}`;
    }
}

module.exports = Post;
