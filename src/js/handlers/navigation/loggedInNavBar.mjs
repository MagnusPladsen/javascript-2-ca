import * as storage from "../../storage/index.mjs";
import * as display from "../../display/index.mjs";

export function setLoggedInNavBarListener(path) {
  const navList = document.querySelector("#navList");
  if (!navList) {
    return;
  }
  if (storage.checkIfLoggedIn()) {
    const profile = storage.getProfile();
    display.renderLoggedInNavBar(navList, profile, path);
  }
}
