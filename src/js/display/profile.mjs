import * as storage from "../storage/storage.mjs";
import { getProfile } from "../api/profile/get.mjs";
import { displayPosts } from "./post.mjs";

const browserTitle = document.querySelector("title");
const profileTitle = document.querySelector("#profileTitle");
const profilePicture = document.querySelector("#profilePicture");
const profileFollowers = document.querySelector("#profileFollowers");
const profileFollowing = document.querySelector("#profileFollowing");
const profilePosts = document.querySelector("#profilePosts");
const profileBanner = document.querySelector("#profileBanner");

export async function displayProfile(name) {
  const profile = await getProfile(name);
  browserTitle.textContent = "NorOn - " + profile.name;
  profileTitle.textContent = profile.name;
  profileFollowers.textContent = profile._count.followers;
  profileFollowing.textContent = profile._count.following;
  profilePosts.textContent = profile._count.posts;
  if (profile.picture) {
    profilePicture.src = profile.avatar;
  }
  if (profile.banner) {
    profileBanner.src = profile.banner;
  }
  if (profile.posts) {
    displayPosts(profile.posts);
  }
}
