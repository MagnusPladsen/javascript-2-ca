import { API_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "GET";

export async function getPost(id) {
  if (!id) throw new Error("Missing post id");

  const url = `${API_URL}${action}/${id}?_author=true`;

  const response = await authFetch(url, {
    method,
  });

  return await response.json();
}

export async function getPosts() {
  const url = `${API_URL}${action}?_author=true`;

  const response = await authFetch(url, {
    method,
  });

  return await response.json();
}

export async function getPostsByTag(tag) {
  const url = `${API_URL}${action}?_author=true&_tag=${tag}`;

  const response = await authFetch(url, {
    method,
  });

  return await response.json();
}

export async function getPostsByDate(sortType) {
  const url = `${API_URL}${action}?_author=true&sort=created&sortOrder=${sortType}`;

  const response = await authFetch(url, {
    method,
  });

  return await response.json();
}