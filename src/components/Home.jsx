import React, { Component } from "react";
import { toast } from "react-toastify";
import { getUser } from "./service/dataServices";

class Home extends Component {
  state = {
    data: {
      name: "",
      mobile: "",
      email: "",
      password: "",
      username: "",
    },
  };

  componentDidMount = () => {
    const userData = getUser();
    if (!userData.isLogedIn) {
      toast.error("Please LogIn");
      this.props.history.push("/");
    } else {
      this.setState({ data: userData });
    }
  };

  updateHandler = () => {
    this.props.history.push("/update");
  };

  render() {
    const { data } = this.state;
    return (
      <div className="row">
        <div className="col-md-6">
          <div className="table-responsive-sm">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>{data.name}</td>
                </tr>
                <tr>
                  <td>Mobile</td>
                  <td>{data.mobile}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{data.email}</td>
                </tr>
                <tr>
                  <td>Password</td>
                  <td>{data.password}</td>
                </tr>
                <tr>
                  <td>Username</td>
                  <td>{data.username}</td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <button
                      onClick={this.updateHandler}
                      className="btn btn-primary btn-sm"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
