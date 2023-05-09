import { API_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "GET";

export async function getPost(id) {
  if (!id) throw new Error("Missing post id");

  const url = `${API_URL}${action}/${id}}`;

  const response = await authFetch(url, {
    method,
  });

  return await response.json();
}

export async function getPosts() {
  const url = `${API_URL}${action}`;

  const response = await authFetch(url, {
    method,
  });

  return await response.json();
}
