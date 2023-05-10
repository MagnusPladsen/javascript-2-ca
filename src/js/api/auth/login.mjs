import { API_URL } from "../constants.mjs";
import * as storage from "../../storage/storage.mjs";

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

    storage.saveToken(accessToken);

    storage.saveProfile(user);

    // redirect to profile page if logged in successfully
    if (storage.checkIfLoggedIn()) {
      window.location.href = "/posts/";
    }
  } catch (error) {
    console.log(error);
  }
}
