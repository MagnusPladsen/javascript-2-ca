import { API_URL } from "../constants.mjs";

const action = "/auth/login";
const method = "POST";

export async function login(profile) {
  const url = `${API_URL}${action}`;
  const body = JSON.stringify(profile);
  const headers = {
    "Content-Type": "application/json",
  };

  const response = await fetch(url, {
    method,
    headers,
    body,
  });
  const data = await response.json();
  console.log(data);
}
