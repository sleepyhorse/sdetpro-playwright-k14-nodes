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

// Function to fetch post content by postId
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

// Function to fetch all posts for a user by userId
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

// Main function
async function main() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter user ID: ", async (userId) => {
        try {
            rl.question("Enter post ID: ", async (postId) => {
                try {
                    const postContent = await fetchPostContent(postId);
                    console.log(`Post Content for Post ID ${postId}: ${postContent}`);

                    const userPosts = await fetchUserPosts(userId);
                    console.log(`All Posts for User ID ${userId}:`);
                    userPosts.forEach(post => {
                        console.log(`Title: ${post.title}, Content: ${post.content}`);
                    });

                    rl.close();
                } catch (error) {
                    console.error("Error:", error.message);
                    rl.close();
                }
            });
        } catch (error) {
            console.error("Error:", error.message);
            rl.close();
        }
    });
}

// Call the main function
main();
