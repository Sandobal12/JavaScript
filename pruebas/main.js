const index = document.getElementById('body');

// enlace con el buscador

const inputSearch = document.getElementById('search');

let search = document.getElementsByClassName('search-input');




inputSearch.addEventListener('click', () => {
    inputSearch.classList.toggle('search-input')
})