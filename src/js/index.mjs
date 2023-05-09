import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import { setNavDropDownListener } from "./handlers/navDropDown.mjs";
import * as storage from "./storage/storage.mjs";
import * as posts from "./api/posts/index.mjs";

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
    if (!storage.checkIfLoggedIn()) {
      window.location.href = "/";
    }

    break;
  default:
    break;
}


