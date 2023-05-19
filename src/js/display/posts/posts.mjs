import * as posts from "../../api/posts/index.mjs";

export async function displayPosts() {
  const postsContainer = document.querySelector("#postsContainer");

  const postsList = await posts.getPosts();

  if (!postsList || !postsContainer) {
    return;
  }

  postsContainer.innerHTML = "";
  postsList.map((post) => {
    postsContainer.innerHTML += `
    <a href="/post/?id=${post.id}" class="w-full md:w-fit">
        <div class="group hover:cursor-pointer hover:border-red-500 hover:shadow-lg hover:scale-105 bg-gray-100 border border-gray-300 rounded shadow p-4 flex flex-col gap-4 transition-all w-full md:max-w-[400px] justify-between">
          <p class="text-lg font-bold transition-all group-hover:text-red-500">${
            post.title
          }</p>
          <p class="text-left pb-4">${post.body}</p>
          <div class="flex items-center justify-between w-full gap-5 text-xs font-bold text-gray-400">
            <p class="">${post.created.slice(0, 10)}
            </p>
              <p>By:
                <span class="font-bold group-hover:text-black">${
                  post.author.name
                }</span>
              </p>
          </div>
        </div>
        </a>`;
  });
}
