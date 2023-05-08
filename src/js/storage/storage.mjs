export function saveProfileToLocalStorage(profile) {
  localStorage.setItem("profile", JSON.stringify(profile));
}

export function getProfileFromLocalStorage() {
  const profile = localStorage.getItem("profile");
  return JSON.parse(profile);
}

export function saveTokenToLocalStorage(token) {
  localStorage.setItem("token", JSON.stringify(token));
}

export function getTokenFromLocalStorage() {
  const token = localStorage.getItem("token");
  return JSON.parse(token);
}

export function checkIfLoggedIn() {
  const token = getTokenFromLocalStorage();
  return token ? true : false;
}
