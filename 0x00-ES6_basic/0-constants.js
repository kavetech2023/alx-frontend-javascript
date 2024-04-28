export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}
/* eslint export function  getLast*/
export function getLast() {
  return ' is okay';
}
/* eslint export function taskNext */
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
