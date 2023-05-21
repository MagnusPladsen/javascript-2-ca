import * as auth from "../../api/auth/index.mjs";
import * as storage from "../../storage/index.mjs";

/**
 * @module handlers/profile/edit
 * @description This module contains all the functions related to editing a profile. Uses the data from local storage to prefill the form. Then sends the updated form data to the API. Then retrieves the updated profile from the API and saves it to local storage.
 * @see module:api/auth/
 * @see module:storage/
 */

export function setEditFormListener() {
  const form = document.querySelector("#editProfileForm");
  const storedProfile = storage.getProfile();

  if (!form & !storedProfile) {
    return;
  }

  // prefill form
  if (storedProfile.banner) {
    form.banner.value = storedProfile.banner;
  }

  if (storedProfile.avatar) {
    form.avatar.value = storedProfile.avatar;
  }

  // enable button
  form.saveProfileButton.disabled = false;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());
    console.log(profile);
    // send to API
    const updatedProfile = await auth.edit(profile, storedProfile.name);

    // save updated profile to storage
    storage.saveProfile(updatedProfile);
    window.location.href = "/profile/";
  });
}
