import { API_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";
import * as profile from "../profile/index.mjs";

const action = "/auth/login";
const method = "POST";

export async function login(profileData) {
  const url = `${API_URL}${action}`;
  const body = JSON.stringify(profileData);
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

    const { accessToken, ...user } = data;

    if (accessToken === undefined) {
      alert("Incorrect username or password. Please try again.");
      return;
    }

    storage.saveToken(accessToken);

    // get full profile with following and followers array
    const fullProfile = await profile.getProfile(user.name);

    storage.saveProfile(fullProfile);

    // redirect to profile page if logged in successfully
    if (storage.checkIfLoggedIn()) {
      window.location.href = "/posts/";
    }
  } catch (error) {
    console.log(error);
  }
}
