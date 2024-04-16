// 1-get_list_student_ids.js

const getListStudentIds = array => Array.isArray(array) ? array.map(student => student.id) : [];

export default getListStudentIds;
