import * as posts from "../../api/posts/index.mjs";
import * as URL from "../../url/index.mjs";

export async function displayPost() {
  const postId = URL.getParams("id");
  
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