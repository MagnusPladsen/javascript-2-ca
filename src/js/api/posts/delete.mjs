import { API_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "DELETE";

export async function deletePost(id) {
  if (!id) throw new Error("Missing post id");

  const url = `${API_URL}${action}/${id}}`;

  const response = await authFetch(url, {
    method,
  });

  return await response.json();
}
