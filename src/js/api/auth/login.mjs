import { API_URL } from "../constants.mjs";
import {
  saveTokenToLocalStorage,
  saveProfileToLocalStorage,
  checkIfLoggedIn,
} from "../../storage/storage.mjs";

const action = "/auth/login";
const method = "POST";

export async function login(profile, inputs) {
  const url = `${API_URL}${action}`;
  const body = JSON.stringify(profile);
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const response = await fetch(url, {
      method,
      headers,
      body,
    });

    const data = await response.json();

    if (data.errors) {
      inputs.forEach((input) => {
        input.style.border = "1px solid red";
      });
      alert(data.errors[0].message);
      return;
    }

    const { accessToken, ...user } = data;

    if (accessToken === undefined) {
      alert("Incorrect username or password. Please try again.");
      return;
    }

    saveTokenToLocalStorage(accessToken);

    saveProfileToLocalStorage(user);

    // redirect to profile page if logged in successfully
    if (checkIfLoggedIn()) {
      window.location.href = "/feed/";
    }
  } catch (error) {
    console.log(error);
  }
}
