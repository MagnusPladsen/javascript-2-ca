import * as profile from "../../api/profile/index.mjs";
import * as URL from "../../url/index.mjs";
import * as storage from "../../storage/index.mjs";

export function setFollowUserListener() {
  const followButton = document.querySelector("#followButton");
  const unFollowButton = document.querySelector("#unFollowButton");
  const name = URL.getParams("name");

  const loggedInUser = storage.getProfile();
  const followingList = loggedInUser.following;
  const isFollowing = followingList.map((user) => user.name).includes(name);

  if (!isFollowing) {
    unFollowButton.style.display = "none";
    followButton.style.display = "block";
  } else if (isFollowing) {
    followButton.style.display = "none";
    unFollowButton.style.display = "block";
  }

  if (followButton && unFollowButton) {
    followButton.addEventListener("click", async () => {
      await profile.followUser(name, "follow");
      // update local storage profile to include new following
      storage.saveProfile(await profile.getProfile(loggedInUser.name));
      window.location.reload();
    });
    unFollowButton.addEventListener("click", async () => {
      await profile.followUser(name, "unfollow");
      // update local storage profile to remove following
      storage.saveProfile(await profile.getProfile(loggedInUser.name));
      window.location.reload();
    });
  }
}
