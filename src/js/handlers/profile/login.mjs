import { login } from "../../api/auth/login.mjs";

export function setLoginFormListener() {
  const form = document.querySelector("#loginForm");

  if (!form) {
    return;
  }

  const inputs = form.querySelectorAll(".loginInput");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());

    // send to API
    login(profile, inputs);
  });
}
