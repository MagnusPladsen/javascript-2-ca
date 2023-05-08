import { API_URL } from "../constants.mjs";
import {
  saveTokenToLocalStorage,
  saveProfileToLocalStorage,
} from "../../storage/storage.mjs";

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

  const { accessToken, ...user } = await response.json();

  saveTokenToLocalStorage(accessToken);

  saveProfileToLocalStorage(user);
}
