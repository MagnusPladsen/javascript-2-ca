export function saveProfile(profile) {
  localStorage.setItem("profile", JSON.stringify(profile));
}

export function getProfile() {
  const profile = localStorage.getItem("profile");
  return JSON.parse(profile);
}

export function saveToken(token) {
  localStorage.setItem("token", JSON.stringify(token));
}

export function getToken() {
  const token = localStorage.getItem("token");
  return JSON.parse(token);
}

export function checkIfLoggedIn() {
  const token = getToken();
  return token ? true : false;
}

export function logOut() {
  localStorage.removeItem("token");
  localStorage.removeItem("profile");
}

