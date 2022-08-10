// import initPage from './app';
import './scss/style.scss';

document
  .querySelector('#btn-init')
  .addEventListener('click', async () => {
    (await import('./app')).default();
  });
