// iмпорт множення
import { funActionOneQuestion } from './multiplication';
import { funActionOneReply } from './multiplication';
import { question } from './multiplication';
import { replyNumber } from './multiplication';
const refs = {
  taskBoxEl: document.querySelector('.task-box'),
};

const yes = [];
const no = [];

function makeTaskFor() {
  funActionOneQuestion();
  funActionOneReply();
  return `<div class="task">
        <p class="task-title">${question}</p>
        <input type="text" class="input-task" placeholder="Напиши тут відповідь">
        <button class="btn">ok</button>
    </div>`;
}

refs.taskBoxEl.insertAdjacentHTML('beforeend', makeTaskFor());

const inputEl = document.querySelector('.input-task');
const btnEl = document.querySelector('.btn');
let inputReply = 0;
inputEl.addEventListener('input', event => {
  inputReply = +event.target.value;
});
btnEl.addEventListener('click', event => {
  inputEl.readOnly = true;
  if (replyNumber === inputReply) {
    console.log('yes');
    yes.push(1);
  } else {
    console.log('no');
    no.push(1);
  }
});
