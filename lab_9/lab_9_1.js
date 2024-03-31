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

readline.question('Enter userId: ', userId => {
    readline.question('Enter postId: ', postId => {
        // Fetch and print post content by postId
        fetchPost(postId)
            .then(post => {
                console.log('Post content:');
                console.log(post);
            })
            .catch(error => console.error('Error fetching post:', error));

        // Fetch and print all posts for the user by userId
        fetchUserPosts(userId)
            .then(posts => {
                console.log('\nAll posts for the user:');
                console.log(posts);
            })
            .catch(error => console.error('Error fetching user posts:', error))
            .finally(() => readline.close());
    });
});
