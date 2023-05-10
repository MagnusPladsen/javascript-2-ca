import * as storage from "../storage/storage.mjs";

const logoutButton = document.querySelector("#logoutButton");

export function setLogOutListener() {
  logoutButton.addEventListener("click", () => {
    if (storage.checkIfLoggedIn()) {
      storage.logout();
    }
    window.location.href = "/";
  });
}
