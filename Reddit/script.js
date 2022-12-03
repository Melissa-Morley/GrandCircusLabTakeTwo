function apiCall() {
  let url = "https://www.reddit.com/r/aww/.json";
  fetch(url)
    .then((response) => response.json())
    .then((redditData) => {
      console.log(redditData);

      for (let i = 0; i < 10; i++) {
        const post = redditData.data.children[i].data;

        const redditPost = document.querySelector(".redditPost");

        // const individualPost = document.createElement("div");
        const postTile = document.createElement("div");
        const title = document.createElement("h1");
        const img = document.createElement("img");
        const url = document.createElement("a");

        title.innerText = post.title;
        img.src = post.thumbnail;
        url.innerText = post.url;
        url.href = post.url;

        redditPost.append(postTile);
        postTile.append(title, img, url);
        postTile.classList.add("postTile");
      }
    });
}

apiCall();
