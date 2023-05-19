import * as storage from "./storage/index.mjs";
import * as navigation from "./handlers/navigation/index.mjs";
import * as post from "./handlers/posts/index.mjs";
import * as profile from "./handlers/profile/index.mjs";
import * as display from "./display/index.mjs";
import * as URL from "./url/index.mjs";

// TODO: ERROR HANDLING
// TODO: FIX LOGOUT
// TODO: SORT AND SEARCH

const path = URL.getPath();

navigation.setLoggedInChecker();
navigation.setLoggedInNavBarListener();
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
    profile.setFollowUserListener();
    break;
  case "/profile/register/":
    profile.setRegisterFormListener();
    break;
  case "/profile/edit/":
    profile.setEditFormListener();
    break;
  case "/post/":
    display.displayPost();
    break;
  case "/post/new/":
    post.setCreatePostListener();
    break;
  case "/post/edit/":
    post.setUpdatePostListener();
    break;
  case "/posts/":
    display.displayPosts();
    break;
  default:
    break;
}

console.log(storage.getProfile());
