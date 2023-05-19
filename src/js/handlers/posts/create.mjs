import * as posts from "../../api/posts/index.mjs";

export function setCreatePostListener() {
  const form = document.querySelector("#createPostForm");

  if (!form) {
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const post = Object.fromEntries(formData.entries());
    // set up tags array
    post.tags = post.tags.split(",").map((tag) => tag.trim());

    // send to API
    const returnedPost = await posts.createPost(post);

    // redirect to post page
    window.location.href = `/post/?id=${returnedPost.id}`;
  });
}
