import { API_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "POST";

export async function register(profile) {
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
      alert(data.errors[0].message);
      return;
    } else {
      alert("You have successfully registered! Please log in.");
      window.location.href = "/";
    }
    // TODO: add error message for user
    
  } catch (error) {
    console.log(error);
  }
}
