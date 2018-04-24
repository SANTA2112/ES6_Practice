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

let search = "batman";

getData(`http://img.omdbapi.com/?apikey=985cb719&s=${search}`)
  .then(movies =>
    movies.forEach(movie =>
      addMovieToList(movie)))
  .catch(error => console.log(error));

let go = num => new Promise((resolve, reject) => {
  let delay = Math.ceil(Math.random() * 3000);
  console.log(num, delay);
  setTimeout(() => {
    if(delay > 2000)
      reject(num);
    else
      resolve(num);
    resolve(num);
  }, delay);
});

let p1 = go(1);
let p2 = go(2);
let p3 = go(3);

Promise.race([p2, p1, p3])
  .then(value => console.log(value))
  .catch(error => console.error(error));
