import React, { Component } from "react";
import Loader from "../../reusableComponent/LoaderComponent/Loader";
import EmployeeService from "../../services/EmployeeService";

export default class ViewEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      employee: {},
      loading: true,
    };
  }
  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id)
      .then((res) => {
        this.setState({ employee: res.data, loading: false });
      })
      .catch((err) => {
        console.log(err);
        alert("There is a technical issue. Please try again later.");
      });
  }
  listingHandler() {
    this.props.history.push("/employees");
  }
  render() {
    return (
      <div>
        <h3 className="txtAlign_Center"> View Employee Details</h3>
        <div>
          {this.state.loading ? <Loader /> : null}
          <div>
            <label> First Name : </label>
            <span>{this.state.employee.firstName}</span>
          </div>
          <div>
            <label> Last Name : </label>
            <span>{this.state.employee.lastName}</span>
          </div>
          <div>
            <label> Email ID : </label>
            <span>{this.state.employee.emailId}</span>
          </div>
          <div className="mrgTop20">
            <button onClick={() => this.listingHandler()}>
              Back to Employees List
            </button>
          </div>
        </div>
      </div>
    );
  }
}
