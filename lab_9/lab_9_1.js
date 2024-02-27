// Simulated database containing user data and posts
const database = {
    users: {
        1: { name: "John", posts: [101, 102] },
        2: { name: "Alice", posts: [103, 104] }
    },
    posts: {
        101: { title: "Post 1 by John", content: "Content of post 1" },
        102: { title: "Post 2 by John", content: "Content of post 2" },
        103: { title: "Post 1 by Alice", content: "Content of post 1" },
        104: { title: "Post 2 by Alice", content: "Content of post 2" }
    }
};

// Function to simulate fetching post content by postId
function fetchPostContent(postId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const post = database.posts[postId];
            if (post) {
                resolve(post.content);
            } else {
                reject(new Error("Post not found"));
            }
        }, 1000); // Simulating delay
    });
}

// Function to simulate fetching user's posts
function fetchUserPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = database.users[userId];
            if (user) {
                const posts = user.posts.map(postId => database.posts[postId]);
                resolve(posts);
            } else {
                reject(new Error("User not found"));
            }
        }, 1000); // Simulating delay
    });
}

// Prompt user to input userId and postId
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter user ID: ", (userId) => {
    rl.question("Enter post ID: ", (postId) => {
        fetchPostContent(postId)
            .then((content) => {
                console.log(`Post Content for Post ID ${postId}: ${content}`);
                return fetchUserPosts(userId);
            })
            .then((posts) => {
                console.log(`All Posts for User ID ${userId}:`);
                posts.forEach(post => {
                    console.log(`Title: ${post.title}, Content: ${post.content}`);
                });
            })
            .catch((error) => {
                console.error("Error:", error.message);
            })
            .finally(() => {
                rl.close();
            });
    });
});
