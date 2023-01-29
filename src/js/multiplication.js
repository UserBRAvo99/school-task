export let question = '';
export let replyNumber = 0;

// змінні для дії множення
let firstNumber = 0;
let secondNumber = 0;
//множеняя

export function funActionOneQuestion() {
  question = `Помнож ${(firstNumber = Math.round(
    Math.random() * (9 - 1) + 1
  ))} * ${(secondNumber = Math.round(
    Math.random() * (9 - 1) + 1
  ))}, та запиши відповідь.`;
}
export function funActionOneReply() {
  replyNumber = firstNumber * secondNumber;
}
