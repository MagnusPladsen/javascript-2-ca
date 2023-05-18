import * as profile from "../api/profile/index.mjs";
import * as display from "../display/index.mjs";

const browserTitle = document.querySelector("title");
const profileTitle = document.querySelector("#profileTitle");
const profilePicture = document.querySelector("#profilePicture");
const profileFollowers = document.querySelector("#profileFollowers");
const profileFollowing = document.querySelector("#profileFollowing");
const profilePosts = document.querySelector("#profilePosts");
const profileBanner = document.querySelector("#profileBanner");

export async function displayProfile(name) {
  const user = await profile.getProfile(name);
  browserTitle.textContent = "NorOn - " + user.name;
  profileTitle.textContent = user.name;
  profileFollowers.textContent = user._count.followers;
  profileFollowing.textContent = user._count.following;
  profilePosts.textContent = user._count.posts;
  if (user.avatar) {
    profilePicture.src = user.avatar;
  }
  if (user.banner) {
    profileBanner.src = user.banner;
  }
  if (user.posts) {
    display.displayPosts(user.posts.reverse());
  }
}
