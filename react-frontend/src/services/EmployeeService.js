import axios from "axios";
const EMPLOYEE_API_BASE_URL = "http://localhost:3000/employees";
class EmployeeService {
  /*Get all employees list*/
  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }
  /*Add an employee record*/
  createEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  }
  /*View an employee detail*/
  getEmployeeById(employeeId) {
    return axios.get(EMPLOYEE_API_BASE_URL + "/" + employeeId);
  }
  /*Add an employee detail*/
  updateEmployee(employee, employeeId) {
    return axios.put(EMPLOYEE_API_BASE_URL + "/" + employeeId, employee);
  }
  /*Delete an employee detail*/
  deleteEmployee(employeeId) {
    return axios.delete(EMPLOYEE_API_BASE_URL + "/" + employeeId);
  }
}
export default new EmployeeService();
