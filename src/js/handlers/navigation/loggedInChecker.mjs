import * as storage from "../../storage/index.mjs";

export function setLoggedInChecker(path) {
  // redirect to login if not logged in
  if (
    !storage.checkIfLoggedIn() &&
    path !== "/" &&
    path !== "/index.html" &&
    path !== "/profile/register/"
  ) {
    window.location.href = "/";
  }
}
