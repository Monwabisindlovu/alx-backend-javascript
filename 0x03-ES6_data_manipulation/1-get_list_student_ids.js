// 1-get_list_student_ids.js

function getListStudentIds(array) {
    // Check if the argument is an array
    if (!Array.isArray(array)) {
        return [];
    }

    // Use the map function to extract ids from the array of objects
    return array.map(student => student.id);
}

export default getListStudentIds;
