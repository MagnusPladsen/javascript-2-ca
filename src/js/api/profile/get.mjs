import { API_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/profiles";
const method = "GET";

export async function getProfile(name) {
  if (!name) throw new Error("Missing profile name");

  const url = `${API_URL}${action}/${name}?_posts=true`;

  const response = await authFetch(url, {
    method,
  });

  return await response.json();
}
