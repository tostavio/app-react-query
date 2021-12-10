import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

const baseApi = axios.create({
  baseURL: `${BASE_URL}`,
  responseType: 'json',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

export const API = {
  fetchPostList: () => baseApi.get(`/posts`),
  deletePost: (postId) => baseApi.delete(`/posts/${postId}`),
  patchPost: (postId, post) => baseApi.patch(`/posts/${postId}`, {
    params: post
  }),
}