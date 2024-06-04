const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');
    
    // Split the data into lines and filter out empty lines
    const lines = data.trim().split('\n').filter(line => line.length > 0);
    
    if (lines.length < 2) {
      throw new Error('Cannot load the database');
    }

    // Extract the header and rows
    const header = lines[0].split(',');
    const rows = lines.slice(1);

    // Initialize containers for counting students
    const fieldCounts = {};
    const fieldStudents = {};

    // Process each row
    rows.forEach((row) => {
      const studentData = row.split(',');
      if (studentData.length === header.length) {
        const field = studentData[3];
        const firstName = studentData[0];

        if (!fieldCounts[field]) {
          fieldCounts[field] = 0;
          fieldStudents[field] = [];
        }

        fieldCounts[field] += 1;
        fieldStudents[field].push(firstName);
      }
    });

    // Count the total number of students
    const totalStudents = Object.values(fieldCounts).reduce((a, b) => a + b, 0);
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students in each field
    for (const field in fieldCounts) {
      const count = fieldCounts[field];
      const studentsList = fieldStudents[field].join(', ');
      console.log(`Number of students in ${field}: ${count}. List: ${studentsList}`);
    }
  } catch (error) {
    // Handle error if the file cannot be read
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;

