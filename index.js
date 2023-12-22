var inputElement = document.getElementById("movie-name");
var movieWrapperElement = document.getElementById("row-movie-card")
var movieStatusElement = document.getElementById("movie-status")
var movieContainer = document.getElementById("c-wrap")


function search(){
    movieWrapperElement.innerHTML = ""
    movieStatusElement.innerText = ""
    movieStatusElement.innerText = "~~~Loading~~~"



    fetch(`https://www.omdbapi.com/?apikey=45f0782a&s=${ inputElement.value}`)
    .then( (res) => {
        return res.json()
    }) .then( (res2) => {
        if( res2.Response == "True"){
            movieStatusElement.innerText = ""


            var movieDetails = res2.Search
            movieDetails.map( (movie,i) => {
               
                var movieCardElement = document.createElement("div")
                movieCardElement.className = "col mt-3"
                var movieImageElement = document.createElement("img")
                movieImageElement.className = "movie-poster"
                movieImageElement.src = movie.Poster
                var movieTitleElement = document.createElement("p")
                movieTitleElement.className = "text-center"
                movieTitleElement.innerHTML = `<b>${movie.Title}</b>`
                var movieReleaseYearElement = document.createElement("p")
                movieReleaseYearElement.className = "text-center"
                movieReleaseYearElement.innerHTML = `<b>${movie.Year}</b>`


                movieCardElement.append(movieImageElement,movieTitleElement,movieReleaseYearElement);
                movieWrapperElement.append(movieCardElement);
            
               
            })
         }else{
            movieStatusElement.innerText = " ----Movies Not Found----"
         }
        })
    }                                                      
