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

/* posts.createPost({
  title: "New post",
  content: "New content",
}); */

/* posts.updatePost({
  id: 5681,
  title: "Updated title",
  content: "Updated content",
}); */

/* posts.removePost(
  5681
); */

/* posts.getPost(5680).then((post) => {
  console.log(post);
});
posts.getPosts().then((posts) => {
  console.log(posts);
}); */
