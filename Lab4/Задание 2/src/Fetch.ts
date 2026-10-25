import { Api, CommentDTO, PostDTO } from "./Api";

const api = new Api();

export async function getOddPosts(): Promise<PostDTO[]> {
    return api.getPosts().then((posts) => posts.filter((post) => post.id % 2 !== 0).slice(0, 5));
}

export async function getEvenComments(): Promise<CommentDTO[]> {
    return api.getComments().then((comments) => comments.filter((comment) => comment.id % 2 === 0).slice(0, 5));
}