// one function for creating all html for a post

// one function for insterting html to the specific post page

// one function for inserting html to the posts page

export function displayPost(post) {
  //find a way to decide to render one or all posts
  //error handling?
  // comments
  // reactions
  const postTitle = document.querySelector("#postTitle");
  const postContent = document.querySelector("#postContent");
  const postDate = document.querySelector("#postDate");
  const postAuthor = document.querySelector("#postAuthor");
  postTitle.innerHTML = post.title;
  postContent.innerHTML = post.body;
  postDate.innerHTML = `Posted: <span class="font-bold">${post.created.slice(
    0,
    10
  )}</span>`;
  postAuthor.innerHTML = `By: <a href="/profile/${post.author.name}" class="font-bold">${post.author.name}</a>`;
}

export function displayPosts(posts) {
  const path = window.location.pathname;
  const postsContainer = document.querySelector("#postsContainer");
  postsContainer.innerHTML = "";
  posts.map((post) => {
    postsContainer.innerHTML += `
    <a href="/post/?id=${post.id}" class="w-fit">
      <div class="group hover:cursor-pointer hover:border-red-500 hover:shadow-lg hover:scale-105 bg-gray-100 border border-gray-300 rounded shadow px-4 py-2 flex flex-col gap-2 transition-all w-full md:w-[350px] h-[150px] justify-between">
        <p class="underline underline-offset-2 font-bold transition-all group-hover:text-red-500">${
          post.title
        }</p>
        <p>${
          post.body.length > 50 ? post.body.slice(0, 50) + "..." : post.body + "..."
        }</p>
        <div class="flex items-center justify-between w-full gap-5 text-sm">
          <p>Posted:
            <span class="font-bold">${post.created.slice(0, 10)}
            </span>
          </p>
          ${
          path === "/posts/"
          ? `
            <p>By:
              <span class="font-bold">${post.author.name}</span>
            </p>
          `
          : ""}
          ${
          path === "/profile/"
            ? `
          <form action="/post/edit?id=${post.id}"
            ><button type="submit"
            class="px-4 py-2 border hover:bg-secondary bg-white hover:text-white text-secondary border-secondary rounded w-fit mx-auto transition-all hover:scale-110"
            >
              Edit post
            </button>
          </form>`
            : ""}
        </div>
      </div>
    </a>`;
  });
}
