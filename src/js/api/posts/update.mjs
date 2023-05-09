import { API_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "PUT";

export async function updatePost(post) {
  if (!post.id) throw new Error("Missing post id");

  const url = `${API_URL}${action}/${post.id}}`;
  const body = JSON.stringify(post);

  const response = await authFetch(url, {
    method,
    body,
  });

  return await response.json();
}
