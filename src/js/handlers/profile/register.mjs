import * as auth from "../../api/auth/index.mjs"

export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");

  if (!form) {
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());

    // send to API
    auth.register(profile);
  });
}
