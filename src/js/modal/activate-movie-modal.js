import { addToQueueOnClick } from '../library/queue-add';
import { addToWatchedOnClick } from '../library/watched-add';
import { deleteFromQueue, deleteFromWatched } from './delete-from-queue';

export function activateModalBtns(clickedCard) {
  const refs = {
    backdrop: document.querySelector('.backdrop__movie-info'),
    modalCloseBtn: document.querySelector('.modal-close-btn'),
    addToQueueBtn: document.querySelector('.modal__btn--queue'),
    addToWatchedBtn: document.querySelector('.modal__btn--watched'),
    removeBtn: document.querySelector('.modal__btn--queue-remove'),
  };

  document.addEventListener('keydown', onCloseModalEsc);
  // закрывает модальное окно по клику вне модального окна
  refs.backdrop.addEventListener('click', onCloseModalBack);
  refs.modalCloseBtn.addEventListener('click', closeModal);

  // для страницы "просмотренные"
  if (
    !clickedCard.classList.contains('library__trends-item') &&
    document.querySelector('#watched-btn.active')
  ) {
    refs.addToWatchedBtn.style.display = 'none';
    refs.removeBtn.innerHTML = 'Remove from watched';
    refs.removeBtn.removeEventListener('click', addToWatchedOnClick);
    refs.removeBtn.addEventListener('click', deleteFromWatched);
    refs.removeBtn.addEventListener('click', closeModal);

    refs.addToQueueBtn.style.display = 'none';
  }
  // для страницы очереди
  else if (
    !clickedCard.classList.contains('library__trends-item') &&
    document.querySelector('#queue-btn.active')
  ) {
    refs.addToQueueBtn.style.display = 'none';

    refs.removeBtn.innerHTML = 'Remove from Queue';
    refs.removeBtn.addEventListener('click', deleteFromQueue);
    refs.removeBtn.addEventListener('click', closeModal);
    refs.addToWatchedBtn.removeEventListener('click', deleteFromWatched);
    refs.addToWatchedBtn.addEventListener('click', addToWatchedOnClick);
    refs.addToWatchedBtn.addEventListener('click', closeModal);
  }
  // для домашней страницы
  else {
    refs.removeBtn.style.display = 'none';

    refs.addToQueueBtn.addEventListener('click', addToQueueOnClick);
    refs.addToWatchedBtn.addEventListener('click', addToWatchedOnClick);
  }

  function closeModal() {
    refs.addToQueueBtn = document.querySelector('.modal__btn--queue');
    refs.addToQueueBtn.removeEventListener('click', addToQueueOnClick);
    refs.addToWatchedBtn = document.querySelector('.modal__btn--watched');
    refs.addToWatchedBtn.removeEventListener('click', addToWatchedOnClick);

    refs.backdrop.classList.add('is-hidden');
    document.querySelector('body').classList.remove('modal-open');
    document.removeEventListener('keydown', onCloseModalEsc);
  }

  function onCloseModalEsc(evt) {
    if (evt.code === 'Escape') {
      closeModal();
    }
  }

  function onCloseModalBack(evt) {
    if (evt.target === evt.currentTarget) {
      closeModal();
    }
  }
}
