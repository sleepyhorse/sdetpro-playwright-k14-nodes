const Post = require("./Post")
const RequestHandler = require("./RequestHandler")
const BASE_URL = 'https://jsonplaceholder.typicode.com';
const SLUG = '/posts';
let url = `${BASE_URL}${SLUG}`

async function lab11() {
    const userId = 1;
    const postId = 5;

    const requestHandler = new RequestHandler()

    const targetPost = await requestHandler.getTargetPost(userId, postId, url);
    await requestHandler.printTargetPost(targetPost)

    const allPost = await requestHandler.getAllPosts(userId, url)
    console.log(allPost);

}
lab11()