// Function to fetch post content by postId
function fetchPost(postId) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(post => resolve(post))
            .catch(error => reject(error));
    });
}

// Function to fetch all posts for a user by userId
function fetchUserPosts(userId) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(posts => resolve(posts))
            .catch(error => reject(error));
    });
}

// Allow user to input userId and postId
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter userId: ', async (userId) => {
    readline.question('Enter postId: ', async (postId) => {
        try {
            // Fetch and print post content by postId
            const postPromise = fetchPost(postId);
            const post = await postPromise;
            console.log('Post content:');
            console.log(post);

            // Fetch and print all posts for the user by userId
            const userPostsPromise = fetchUserPosts(userId);
            const userPosts = await userPostsPromise;
            console.log('\nAll posts for the user:');
            console.log(userPosts);
        } catch (error) {
            console.error(error.message);
        } finally {
            readline.close();
        }
    });
});
