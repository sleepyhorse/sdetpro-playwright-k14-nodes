const Post = require("./Post");
const RequestHandler = require("./RequestHandler");

// Execution
lab11();

// Function Declaration
async function lab11(){
    // Given params
    const userId = 1;
    const postId = 5;

    // Create RequestHandler object
    const requestHandler = new RequestHandler();

    // Print target post
    await requestHandler.printTargetPost(userId, postId);

    // Print all posts
    await requestHandler.printAllPosts(userId);
}
