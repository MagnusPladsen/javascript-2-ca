import * as posts from "../api/posts/index.mjs";
import * as URL from "../url/index.mjs";

export async function displayPost() {
  
  const postUrlParams = new URLSearchParams(window.location.search);
  const postId = postUrlParams.get("id");
  const post = await posts.getPost(postId);
  
  // comments
  // reactions
  if (!post) {
    return;
  }

  const postTitle = document.querySelector("#postTitle");
  const postContent = document.querySelector("#postContent");
  const postDate = document.querySelector("#postDate");
  const postAuthor = document.querySelector("#postAuthor");
  const postMedia = document.querySelector("#postMedia");
  const postTags = document.querySelector("#postTags");
  postTitle.innerHTML = post.title;
  postContent.innerHTML = post.body;
  postDate.innerHTML = `Posted: <span class="font-bold">${post.created.slice(
    0,
    10
  )}</span>`;
  postAuthor.innerHTML = `By: <a href="/profile/user/?name=${post.author.name}" class="font-bold hover:text-red-500 hover:underline underline-offset-2">${post.author.name}</a>`;
  if (post.media) {
    postMedia.innerHTML = `
    <img
    src="${post.media}"
    alt="Post media"
    class="w-full object-cover h-auto" /> `;
  }
  if (post.tags) {
    postTags.innerHTML = `
      Tags: ${post.tags.map(
        (tag) => `<span class="ml-1 font-bold text-black">${tag}</span>`
      )}
    `;
  }
}

export async function displayPosts(postList) {
  const path = URL.getPath();
  const postsContainer = document.querySelector("#postsContainer");
  let postsList = postList;
  
  if (!postsList) {
    postsList = await posts.getPosts();
  }

  postsContainer.innerHTML = "";
  postsList.map((post) => {
    postsContainer.innerHTML += `
    <a href="/post/?id=${post.id}" class="w-fit">
      <div class="group hover:cursor-pointer hover:border-red-500 hover:shadow-lg hover:scale-105 bg-gray-100 border border-gray-300 rounded shadow p-4 flex flex-col gap-4 transition-all w-full md:w-[350px] justify-between">
        <p class="text-lg font-bold transition-all group-hover:text-red-500">${
          post.title
        }</p>
        <p class="text-left pb-4">${post.body}</p>
        <div class="flex items-center justify-between w-full gap-5 text-xs font-bold text-gray-400">
          <p class="">${post.created.slice(0, 10)}
          </p>
          ${
            path === "/posts/"
              ? `
            <p>By:
              <span class="font-bold group-hover:text-black">${post.author.name}</span>
            </p>
          `
              : ""
          }
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
              : ""
          }
        </div>
      </div>
    </a>`;
  });
}
