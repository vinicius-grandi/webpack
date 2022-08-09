import { getMedia, getRamdonNumber } from 'belugs';
import './scss/style.scss';

let students = null;

const createDomIntoList = (luckyStudents) => {
  const str = luckyStudents
    .map((s) => `
              <li class="list-group-item" id="student-${s.i}">${s.nome} <span style="float:right">${s.media} </span></li>
          `)
    .join('');

  document.querySelector('#results ul').innerHTML = str;
};

const createDomIntoTable = (s) => {
  const str = s
    .map((student) => `
          <tr>
              <td>${student.nome}</td>
              ${student.notas.map((nota) => `<td> ${nota} </td>`).join('')}
              <td>${getMedia(...student.notas)} </td>
          </tr>
          `)
    .join('');
  document.querySelector('#content-students').innerHTML = str;
};

const showsTheWinner = (luckyStudent) => {
  document.querySelector(`#student-${luckyStudent.i}`).style.backgroundColor = 'green';
};

const addListenerToButton = () => {
  const $btn = document.querySelector('#btn-init');
  $btn.removeAttribute('disabled');
  $btn.addEventListener('click', () => {
    const studentsArr = Array.from(students);
    const luckyStudents = [];

    while (luckyStudents.length < 5) {
      const nRandon = getRamdonNumber(0, studentsArr.length - 1);

      const student = studentsArr.splice(nRandon, 1);
      luckyStudents.push(student[0]);
    }

    const medias = [];

    luckyStudents.map((ls, i) => {
      const lsReference = ls;
      medias[i] = ls.media;
      lsReference.i = i;
      return ls;
    });

    createDomIntoList(luckyStudents);

    const maxValue = Math.max(...medias);

    const studentsWinner = luckyStudents.filter((student) => student.media === maxValue);

    if (studentsWinner.length === 1) {
      showsTheWinner(studentsWinner[0]);
    } else {
      const nLucky = getRamdonNumber(0, studentsWinner.length - 1);
      showsTheWinner(studentsWinner[nLucky]);
    }
  });
};

const init = (studentsArr) => {
  students = studentsArr;
  createDomIntoTable(studentsArr);
  addListenerToButton();
};

const getStudents = async () => {
  const urlJson = 'https://serfrontend.com/fakeapi/alunos.json';
  const response = await fetch(urlJson);
  const data = await response.json();

  data.forEach((s) => {
    const sRef = s;
    sRef.media = parseFloat(getMedia(...s.notas));
    return s;
  });

  if (response.status !== 200) {
    throw Error(data.detail);
  }
  return data;
};
getStudents()
  .then((s) => init(s))
  .catch((err) => console.error(err));
