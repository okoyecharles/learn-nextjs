import POSTS from "./data";

export const getPostById = (id) => {
  return POSTS.find((post) => post.id === +id);
};

const postIndex = (id) => {
  return POSTS.findIndex((post) => post.id === +id);
};

export const isLastPost = (id) => postIndex(id) === POSTS.length - 1;
export const isFirstPost = (id) => postIndex(id) === 0;
export const nextPostId = (id) => POSTS[postIndex(id) + 1].id;
export const prevPostId = (id) => POSTS[postIndex(id) - 1].id;
