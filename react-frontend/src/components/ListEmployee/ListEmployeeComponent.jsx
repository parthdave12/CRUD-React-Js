import React, { Component } from "react";
import EmployeeService from "../../services/EmployeeService";
import classes from "../ListEmployee/ListEmployeeComponent.module.css";
import Loader from "../../reusableComponent/LoaderComponent/Loader";

export default class ListUserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      loading: true,
    };
  }
  deleteEmployee(id) {
    EmployeeService.deleteEmployee(id)
      .then((res) => {
        this.setState({
          employees: this.state.employees.filter(
            (employee) => employee.id !== id
          ),
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
        alert("There is a technical issue. Please try again later.");
      });
  }

  viewEmployee(id) {
    this.props.history.push(`/view-employee/${id}`);
  }

  addEmployee() {
    this.props.history.push(`/add-employee/_add`);
  }

  editEmployee(id) {
    this.props.history.push(`/add-employee/${id}`);
  }

  componentDidMount() {
    EmployeeService.getEmployees()
      .then((res) => {
        this.setState({ employees: res.data, loading: false });
      })
      .catch((err) => {
        console.log(err);
        alert("There is a technical issue. Please try again later.");
      });
  }
  render() {
    return (
      <>
        <h2>Employees List</h2>

        <div className="mrgBottom20 mrgTop20">
          <button onClick={() => this.addEmployee()}>Add Employee</button>
        </div>
        <div className={classes.tableContainer}>
          {this.state.loading ? <Loader /> : null}
          <table className={classes.tablePosition}>
            <thead>
              <tr>
                <th width="15%">First name</th>
                <th width="15%">Last Name</th>
                <th width="20%">Email</th>
                <th width="50%">Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td> {employee.firstName} </td>
                  <td> {employee.lastName}</td>
                  <td> {employee.emailId}</td>
                  <td>
                    <button onClick={() => this.editEmployee(employee.id)}>
                      Update
                    </button>
                    <button
                      className={classes.btnPosition}
                      onClick={() => this.deleteEmployee(employee.id)}
                    >
                      Delete
                    </button>
                    <button
                      className={classes.btnPosition}
                      onClick={() => this.viewEmployee(employee.id)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
