export function setNavDropDownListener() {
  const hamburger = document.querySelector("#hamburger");
  const navDropDownContent = document.querySelector("#navList");
  hamburger.addEventListener("click", (e) => {
    if (navDropDownContent.classList.contains("hidden")) {
      navDropDownContent.classList.remove("hidden");
      navDropDownContent.classList.add("flex");
    } else {
      navDropDownContent.classList.add("hidden");
    }
  });
}
