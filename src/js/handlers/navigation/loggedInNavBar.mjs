import * as storage from "../../storage/index.mjs";
import * as display from "../../display/index.mjs";
import * as URL from "../../url/index.mjs";

export function setLoggedInNavBarListener() {
  const path = URL.getPath();
  const navList = document.querySelector("#navList");
  if (!navList) {
    return;
  }
  if (storage.checkIfLoggedIn()) {
    const profile = storage.getProfile();
    display.displayLoggedInNavBar(navList, profile, path);
  }
}
