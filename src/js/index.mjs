import * as storage from "./storage/index.mjs";
import * as navigation from "./handlers/navigation/index.mjs";
import * as post from "./handlers/posts/index.mjs";
import * as profile from "./handlers/profile/index.mjs";
import * as display from "./display/index.mjs";
import * as URL from "./url/index.mjs";

// TODO: ERROR HANDLING

const path = URL.getPath();

navigation.setLoggedInChecker(path);
navigation.setLoggedInNavBarListener(path);
navigation.setNavDropDownListener();

switch (path) {
  case "/":
    if (storage.checkIfLoggedIn()) {
      window.location.href = "/posts/";
    }
    profile.setLoginFormListener();
    break;
  case "/index.html":
    if (storage.checkIfLoggedIn()) {
      window.location.href = "/posts/";
    }
    profile.setLoginFormListener();
    break;
  case "/profile/":
    display.displayProfile(storage.getProfile().name);
    profile.setLogOutListener();
    break;
  case "/profile/user/":
    display.displayProfile(URL.getParams("name"));
    break;
  case "/profile/register/":
    profile.setRegisterFormListener();
    break;
  case "/post/":
    display.displayPost();
    break;
  case "/post/new/":
    post.createPost();
    break;
  case "/posts/":
    display.displayPosts();
    break;
  default:
    break;
}
