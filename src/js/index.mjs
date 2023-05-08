import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import { setNavDropDownListener } from "./handlers/navDropDown.mjs";
import { checkIfLoggedIn } from "./storage/storage.mjs";

setNavDropDownListener();

const path = window.location.pathname;

switch (path) {
  case "/profile/register/":
    setRegisterFormListener();
    break;
  case "/":
    setLoginFormListener();
    break;
  case "/profile/":
    // redirect to login if not logged in
    if (checkIfLoggedIn()) {
      window.location.href = "/";
    }

    break;
  default:
    break;
}
