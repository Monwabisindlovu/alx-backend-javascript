export default function taskBlock(trueOrFalse) {
  let task = false; // Use let instead of var for block-scoped variable
  let task2 = true; // Use let instead of var for block-scoped variable

  if (trueOrFalse) {
    task = true; // No need to redeclare, just assign the value
    task2 = false; // No need to redeclare, just assign the value
  }

  return [task, task2];
}

