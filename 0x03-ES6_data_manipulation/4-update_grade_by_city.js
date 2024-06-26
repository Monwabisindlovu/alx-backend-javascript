export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = newGrades.find((item) => item.studentId === student.id);
      return { ...student, grade: grade ? grade.grade : -1 };
    });
}
