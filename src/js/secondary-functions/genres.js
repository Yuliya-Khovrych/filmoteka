import { getMovies } from '../fetch-functions/get-movies';

export async function makeGenres(selector, page) {
  const genreFields = document.querySelectorAll(selector);
  
  
  const genres = JSON.parse(localStorage.getItem('genres'));

  genreFields.forEach((item, idx) => {
    item.textContent = item.textContent.replace(/\n\s+/g, '');

    if (item.textContent && !page) {

      item.textContent = getGenreFromId(item.textContent, genres);
    }
    // обрабатывает только новые карточки
    else if (item.textContent && idx >= (page - 1) * 20) {
      item.textContent = getGenreFromId(item.textContent, genres);
    }
    // пропускает старые карточки
    else if ((item.textContent && idx < (page - 1) * 20)) {
      return;
    }
    // если приходит пустой массив жанров
    else {
      item.textContent = 'No genre';
    }
  });
}

function getGenreFromId(id, genres) {
  const arrOfIds = id.split(',');
  const arrOfGenres = [];

  if (arrOfIds.length > 3) {
    arrOfIds.length = 3;
    arrOfIds[2] = 'Other';
  }

  arrOfIds.forEach(i => {
    if (i === 'Other') {
      arrOfGenres.push(i);
    } else {
      i && arrOfGenres.push(genres.find(genre => genre.id === +i).name);
    }
  });
  return arrOfGenres.join(', ');
}
