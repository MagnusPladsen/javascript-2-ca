import * as storage from "../../storage/index.mjs";

const logoutButton = document.querySelector("#logoutButton");

export function setLogOutListener() {
  if (logoutButton & storage.checkIfLoggedIn()) {
    logoutButton.addEventListener("click", () => {
      storage.logOut();
      window.location.href = "/";
    });
  }
}
