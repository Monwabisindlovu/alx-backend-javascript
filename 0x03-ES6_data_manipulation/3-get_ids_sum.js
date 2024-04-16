export default (students) => {
  return students.reduce((accumulator, currentStudent) => {
    return accumulator + currentStudent.id;
  }, 0);
};
