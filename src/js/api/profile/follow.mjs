import { API_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/profiles";
const method = "PUT";

export async function followUser(name, followType) {
  if (!name) throw new Error("Missing profile name");

  const url = `${API_URL}${action}/${name}/${followType}`;

  const response = await authFetch(url, {
    method,
    body : JSON.stringify({}),
  });

  return await response.json();
}
