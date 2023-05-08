import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import { setNavDropDownListener } from "./handlers/navDropDown.mjs";

setNavDropDownListener();

const path = window.location.pathname;

switch (path) {
  case "/profile/register/":
    setRegisterFormListener();
    break;
  default:
    setLoginFormListener();
    break;
}
