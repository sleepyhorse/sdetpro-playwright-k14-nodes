const fetch = require('node-fetch'); // npm install node-fetch
import fetch from 'node-fetch';
// Function to fetch post content by postId
function fetchPostContent(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Post not found');
            }
            return response.json();
        })
        .then(data => data.body);
}

// Function to fetch all posts for a user by userId
function fetchUserPosts(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('User not found');
            }
            return response.json();
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
                    console.log(`Title: ${post.title}, Content: ${post.body}`);
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
