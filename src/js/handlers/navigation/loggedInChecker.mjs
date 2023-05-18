import * as storage from "../../storage/index.mjs";
import * as URL from "../../url/index.mjs";

export function setLoggedInChecker() {
  const path = URL.getPath();
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
