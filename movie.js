const api = `https://api.themoviedb.org/3/movie/${window.location.search.split('=')[1]}?api_key=5899970b9a2017c3f4efcb2b745daa6a`;

fetch(api)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    
    console.log(myJson);
    const movieDetails = document.querySelector('#movie-container');
    const details = `
    <div id="movie-image">
        <img src="http://image.tmdb.org/t/p/w185/${myJson.poster_path}" alt="${myJson.title}" >
        </div>
    <div id="movie-details">
        <h1>${myJson.title}</h1>
        <h4>Overview</h4>
        <p>${myJson.overview}</p>
        <hr>
        <p>Release Date : ${myJson.release_date} </p>
        <button >Add to fav</button>
    </div>
    `;
       movieDetails.innerHTML = details;
    
  });