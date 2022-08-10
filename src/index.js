// import initPage from './app';
import './scss/style.scss';

document
  .querySelector('#btn-init')
  .addEventListener('click', async () => {
    // initPage();
    (await import('./app')).default();
  });

class TestClass {
  log() {
    console.log(this.n);
  }

  n = 1;
}

const instance = new TestClass();
instance.log();
console.log(instance.n);
