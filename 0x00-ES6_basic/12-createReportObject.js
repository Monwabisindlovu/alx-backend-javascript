export default function createReportObject(departmentName, employees) {
    return {
      [departmentName]: employees,
      getNumberOfDepartments: function(employeesList) {
        return Object.keys(employeesList).length;
      }
    };
  }
  