const deleteFunction = (id)=> fetch(`/delete/${id}`,{
    method:'DELETE',
    headers:{ 'Content-Type': 'application/json'},
    redirect: 'follow',
})

fetch("/list").then(response => response.json())
.then(([user,list ])=>{ 
    const btnlk = document.querySelector('.username');
    const username = document.createElement('span');
    username.textContent = user[0].username;
    btnlk.appendChild(username)

    const movieTable = document.querySelector('#movie-table');
    list.forEach(e=>{
        const movie = document.createElement('tr');
        movie.id = e.id;

        const name = document.createElement('td');
        name.textContent = e.name;

        const type = document.createElement('td');
        type.textContent = e.type;

        const cover = document.createElement('img');
        cover.className='img';

        cover.src = e.cover_url;

        const episodes = document.createElement('td');
        episodes.textContent = e.episodes;

        const btn = document.createElement('button');
        btn.className='Delete';
        btn.textContent='Delete';
        btn.onclick=()=>{
        deleteFunction(e.id)
        window.location.assign('/home')
        }

        movie.appendChild(name)
        movie.appendChild(type)
        movie.appendChild(cover)
        movie.appendChild(episodes)
        movie.appendChild(btn)

        movieTable.appendChild(movie)

})
})