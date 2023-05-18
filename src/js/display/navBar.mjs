export function displayLoggedInNavBar(navList, profile, path) {
  navList.innerHTML = `
  <li
  class="hover:cursor-pointer transition-all ${
    path === "/posts/"
      ? "opacity-100 underline underline-offset-4"
      : "opacity-70 hover:opacity-100 hover:underline"
  } "
>
  <a href="/posts/"> Home </a>
</li>
<li class="hover:cursor-pointer transition-all ${
    path === "/post/new/"
      ? "opacity-100 underline underline-offset-4"
      : "opacity-70 hover:opacity-100 hover:underline"
  } ">
  <a href="/post/new"> New post </a>
</li>
<li
  class="hover:cursor-pointer  hover:underline-offset-4 transition-all flex gap-2 items-center ${
    path === "/profile/"
      ? "opacity-100 underline underline-offset-4"
      : "opacity-70 hover:opacity-100 hover:underline"
  } "
>

  <a href="/profile/"> ${profile.name} </a>
  <img
id="profilePicture"
src="${profile.avatar ? profile.avatar : "/src/images/whiteProfilePlaceHolder.svg"}"
alt="Profile picture"
height="15"
width="25"
class="rounded-full transition-all"
/>
</li>
`;
}
