import * as storage from "../../storage/index.mjs";


export function setLogOutListener() {
  const logOutButton = document.querySelector("#logOutButton");
  if (!!logOutButton & storage.checkIfLoggedIn()) {
    logOutButton.addEventListener("click", () => {
      storage.logOut();
      console.log("logged out");
      console.log(storage.getProfile());
      window.location.href = "/";
    });
  }
}
