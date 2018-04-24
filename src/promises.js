let movieList = document.getElementById("movies");

let addMovieToList = movie => {
  let img = document.createElement("img");
  img.src = movie.Poster;
  movieList.appendChild(img);
};

let getData = (url) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        let json = JSON.parse(xhr.response);
        resolve(json.Search);
      } else {
        reject(xhr.statusText);
      }
    };

    xhr.onerror = error => reject(error);

    xhr.send();
  });
};

let batman = getData("http://img.omdbapi.com/?apikey=985cb719&s=batman");
let superman = getData("http://img.omdbapi.com/?apikey=985cb719&s=superman");

/*batman
  .then(movies =>
    movies.forEach(movie =>
      addMovieToList(movie)))
  .catch(error => console.log(error));


superman
  .then(movies =>
    movies.forEach(movie =>
      addMovieToList(movie)))
  .catch(error => console.log(error));*/

Promise.race([batman. superman])
      .then(movies =>
        movies.forEach(movie =>
          addMovieToList(movie)))
      .catch(error => console.error(error));
