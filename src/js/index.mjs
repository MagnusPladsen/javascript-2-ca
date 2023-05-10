import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import { setNavDropDownListener } from "./handlers/navDropDown.mjs";
import * as storage from "./storage/storage.mjs";
import * as posts from "./api/posts/index.mjs";
import { displayPost, displayPosts } from "./display/post.mjs";
import { setLogOutListener } from "./handlers/logout.mjs";
import { displayProfile } from "./display/profile.mjs";

setNavDropDownListener();

const path = window.location.pathname;
console.log("path: " + path);

switch (path) {
  case "/profile/register/":
    setRegisterFormListener();
    break;
  case "/":
    if (storage.checkIfLoggedIn()) {
      window.location.href = "/posts/";
    }
    setLoginFormListener();
    break;
  case "/index.html":
    if (storage.checkIfLoggedIn()) {
      window.location.href = "/posts/";
    }
    setLoginFormListener();
    break;
  case "/profile/":
    // redirect to login if not logged in
    if (!storage.checkIfLoggedIn()) {
      window.location.href = "/";
    }
    const loggedInProfile = storage.getProfile();
    setLogOutListener();
    displayProfile(loggedInProfile.name);
    break;
  case "/profile/user/":
    // redirect to login if not logged in
    if (!storage.checkIfLoggedIn()) {
      window.location.href = "/";
    }
    const userUrlParams = new URLSearchParams(window.location.search);
    const profileName = userUrlParams.get("name");
    displayProfile(profileName);
    break;
  case "/post/":
    // redirect to login if not logged in
    if (!storage.checkIfLoggedIn()) {
      window.location.href = "/";
    }
    // get id from url
    const postUrlParams = new URLSearchParams(window.location.search);
    const postId = postUrlParams.get("id");
    const post = await posts.getPost(postId);
    displayPost(post);

    break;
  case "/posts/":
    // redirect to login if not logged in
    if (!storage.checkIfLoggedIn()) {
      window.location.href = "/";
    }
    displayPosts(await posts.getPosts());
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
