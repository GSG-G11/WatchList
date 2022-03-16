const name = document.getElementById("searchInput1");
const episodes = document.getElementById("searchInput2");
const type = document.getElementById("searchInput3");
const cover_url = document.getElementById("searchInput4");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("submit", (event) => {
    event.preventDefault();
    fetch("/addmovie", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
      body: JSON.stringify({
        name: name.value,
        episodes: episodes.value,
        type: type.value,
        cover_url: cover_url.value,
      }),
    }).then((response) => {
      if (response.redirected) {
        window.location.href = response.url;
      }
      return response;
    });
  });
  