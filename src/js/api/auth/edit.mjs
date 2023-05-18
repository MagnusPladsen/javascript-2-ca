import { authFetch } from "../authFetch.mjs";
import { API_URL } from "../constants.mjs";

const action = "/profiles/";
const method = "PUT";

export async function edit(profileData, name) {
  const url = `${API_URL}${action}${name}/media`;
  const body = JSON.stringify(profileData);
  try {
    const response = await authFetch(url, {
      method,
      body,
    });
    const data = await response.json();

    return data;
    // TODO: add error message for user
  } catch (error) {
    console.log(error);
  }
}
