import * as storage from "../storage/storage.mjs";

export function headers() {
  const token = storage.getToken();
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function authFetch(url, options) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}
