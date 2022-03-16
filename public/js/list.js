fetch("/list").then(response => response.json())
.then((data) =>{
    const btnlk = document.querySelector('.btnlk');

    const usernameWelc = document.createElement('p');
    usernameWelc.className = 'username';
    usernameWelc.textContent = "Welcome ";

    const username = document.createElement('span');
    username.textContent = data[0].username;
   

    btnlk.appendChild(usernameWelc)
    usernameWelc.appendChild(username)

    const movieTable = document.querySelector('#movie-table');
    data.forEach(e=>{
        const movie = document.createElement('tr');
        movie.id = e.id;

        const name = document.createElement('td');
        name.textContent = e.name;

        const type = document.createElement('td');
        type.textContent = e.type;

        const cover = document.createElement('img');
        cover.src = e.cover_url;

        const episodes = document.createElement('td');
        episodes.textContent = e.episodes;

        const btn = document.createElement('button');
        btn.className='Delete';
        btn.textContent='Delete';

        movie.appendChild(name)
        movie.appendChild(type)
        movie.appendChild(cover)
        movie.appendChild(episodes)
        movie.appendChild(btn)

        movieTable.appendChild(movie)

})
})