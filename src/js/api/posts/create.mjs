import { API_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "POST";

export async function createPost(post) {
  const url = `${API_URL}${action}`;
  const body = JSON.stringify(post);

  const response = await authFetch(url, {
    method,
    body,
  });

  return await response.json();
}
