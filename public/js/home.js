/* eslint-disable no-undef */
const name1 = document.getElementById("searchInput1");
const episodes = document.getElementById("searchInput2");
const type = document.getElementById("searchInput3");
const cover_url = document.getElementById("searchInput4");
const addBtn = document.getElementById("searchBtn");
const logoutBtn = document.getElementById("logout");


addBtn.addEventListener("click", (event) => {
    event.preventDefault();
    fetch("/addtolist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
      body: JSON.stringify({
        name: name1.value,
        episodes: episodes.value,
        type: type.value,
        cover_url: cover_url.value,
      }),
    })
    .then((response) => {
      if (response.redirected) {
        window.location.href = response.url;
      }
      return response;
    });
  });
  

//clear cookies and logout

  logoutBtn.addEventListener('click',(event)=>{
      event.preventDefault();
fetch('/logout').then((response) => {
    if (response.redirected) {
      window.location.href = response.url;
    }
    return response;
  });
  })