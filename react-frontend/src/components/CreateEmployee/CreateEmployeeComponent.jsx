import React, { Component } from "react";
import EmployeeService from "../../services/EmployeeService";
import Loader from "../../reusableComponent/LoaderComponent/Loader";
export default class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      emailId: "",
    };
  }

  componentDidMount() {
    console.log(this.state.id);
    if (this.state.id === "_add") {
      return;
    } else {
      EmployeeService.getEmployeeById(this.state.id)
        .then((res) => {
          let employee = res.data;
          this.setState({
            firstName: employee.firstName,
            lastName: employee.lastName,
            emailId: employee.emailId,
          });
        })
        .catch((err) => {
          console.log(err);
          alert("There is a technical issue. Please try again later.");
        });
    }
  }
  saveOrUpdateEmployee(event) {
    event.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
    };
    console.log("employee => " + JSON.stringify(employee));
    if (
      this.state.firstName === "" ||
      this.state.lastName === "" ||
      this.state.emailId === "" ||
      this.state.emailId.match(
        /(^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$)/g
      ) === null
    ) {
      alert("Please fill-up valid values.");
      return;
    } else {
      if (this.state.id === "_add") {
        EmployeeService.createEmployee(employee)
          .then((res) => {
            this.props.history.push("/employees");
          })
          .catch((err) => {
            console.log(err);
            alert("There is a technical issue. Please try again later.");
          });
      } else {
        EmployeeService.updateEmployee(employee, this.state.id)
          .then((res) => {
            this.props.history.push("/employees");
          })
          .catch((err) => {
            console.log(err);
            alert("There is a technical issue. Please try again later.");
          });
      }
    }
  }
  changeFirstNameHandler(event) {
    this.setState({
      firstName: event.target.value,
    });
  }
  changeLastNameHandler(event) {
    this.setState({
      lastName: event.target.value,
    });
  }
  changeEmailHandler = (event) => {
    this.setState({
      emailId: event.target.value,
    });
  };
  cancel() {
    this.props.history.push("/employees");
  }
  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="txtAlign_Center">Add Employee</h3>;
    } else {
      return <h3 className="txtAlign_Center">Update Employee</h3>;
    }
  }
  render() {
    return (
      <>
        <div>
          {this.getTitle()}
          <div>
            <form>
              <div>
                <label>First Name:-&nbsp;</label>
                <input
                  placeholder="First Name"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={(e) => this.changeFirstNameHandler(e)}
                />
              </div>
              <div>
                <label>Last Name:-&nbsp;</label>
                <input
                  placeholder="Last Name"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={(e) => this.changeLastNameHandler(e)}
                />
              </div>
              <div>
                <label>Email Addr:-&nbsp;</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  name="emailId"
                  value={this.state.emailId}
                  onChange={(e) => this.changeEmailHandler(e)}
                />
              </div>
              <div className="mrgTop20">
                <button onClick={(e) => this.saveOrUpdateEmployee(e)}>
                  Save
                </button>
                <button className="mrgLeft10" onClick={() => this.cancel()}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
