
  (()=> {
    const $input = document.querySelector('#searchmovie');
    const $button = document.querySelector('#search');
    $input.addEventListener('keypress', (e) => {
        if(e.charCode === 13){
            getMovieList();
        }
    });
    $button.addEventListener('click', (e) => {
            getMovieList();
    });

    function getMovieList(){

        const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=5899970b9a2017c3f4efcb2b745daa6a&language=en-US&page=1&include_adult=false&query=${document.querySelector('#searchmovie').value}`;
        fetch(apiUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            const movieContainer = document.querySelector('#movie-list');
            document.querySelector('#movie-list').innerHTML = '';
            console.log(myJson.results);
            myJson.results.forEach(function (item) {
                console.log(item); // the item (ex. turkey)
                const markup = `
                <li class="list">
                <a href="movie.html?id=${item.id}">
                    <img src="http://image.tmdb.org/t/p/w185/${item.poster_path}" alt="">
                <h2>${item.original_title}</h2>
                <p>${item.release_date}</p>
                </a>
                </li>
            `;
            movieContainer.innerHTML += markup;
            });
            
        });
    }
  })(window);