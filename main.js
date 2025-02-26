const movieForm = document.querySelector("#search");
const movieInput = document.querySelector("#input");
const movieSelect = document.querySelector("#sort");
const movieota = document.querySelector(".hero_list");

function render(movies) {
    movieota.innerHTML = "";
    movieota.innerHTML = movies.map(obyektlar => 
        `
        <li class="hero__item">
            <div class="box">
                <img src="${obyektlar.rasmi}" alt="${obyektlar.Title}">
                <h3${obyektlar.Title}</h3>
                <p>${obyektlar.language}</p>
                <p>${obyektlar.imdb_rating}</p>
            </div>
        </li>
        `
    ).join(""); 
}
render(movies)
movieForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const movieName = movieInput.value;
    const sortBy = movieSelect.value;
    let result = movies;

    if (movieName != null) {
        result = movies.filter((movie) => {
            return movie.Title.toString().includes(movieName);
        });
    }
    
    result.sort((a, b) => {
        if (sortBy == 'az') {
            return a.Title.toString().localeCompare(b.Title);
        }

        if (sortBy == 'za') {
            return b.Title.toString().localeCompare(a.Title);
        }

        return 0;
    });

    render(result);
});