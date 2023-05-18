import * as auth from "../../api/auth/index.mjs";
import * as storage from "../../storage/index.mjs";

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
