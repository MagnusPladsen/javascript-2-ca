export function getPath() {
  return window.location.pathname;
}

export function getParams(search) {
  const params = new URLSearchParams(window.location.search);
  return params.get(search);
}
