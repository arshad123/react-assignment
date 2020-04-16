import React from "react";
import { Link } from "react-router-dom";
import Form from "./common/form";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { getUser, setUser } from "./service/dataServices";

class RegisterForm extends Form {
  state = {
    data: { name: "", mobile: "", email: "", password: "", username: "" },
    header: "Register",
    errors: {},
  };

  componentDidMount = () => {
    const userData = getUser();
    if (userData.isLogedIn) {
      delete userData.isLogedIn;
      this.setState({ header: "Update Profile", data: userData });
    }
  };

  schema = {
    name: Joi.string().required().min(2).label("Name"),
    username: Joi.string().min(5).required().label("Username"),
    email: Joi.string().email().required().label("Email"),
    mobile: Joi.number()
      .min(1000000000)
      .max(9999999999)
      .required()
      .error(() => {
        return {
          message: "Require 10 digit valid mobile number",
        };
      }),
    password: Joi.string().required().min(8).label("Password"),
  };

  doSubmit = () => {
    const { data } = this.state;
    if (this.state.header === "Update Profile") {
      data.isLogedIn = true;
    }
    setUser(data);
    if (this.state.header === "Update Profile") {
      toast.success("Successfully Updated");
      this.props.history.push("/home");
    } else {
      toast.success("Successfully Registred");
      this.props.history.push("/");
    }
  };
  render() {
    return (
      <React.Fragment>
        <h1>{this.state.header}</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("username", "Username")}
          {this.renderInput("email", "Email")}
          {this.renderInput("mobile", "Mobile")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton(this.state.header)}
        </form>
        {this.state.header !== "Update Profile" && (
          <p className="text-center">
            <Link to="/">Already have account? Login</Link>
          </p>
        )}
      </React.Fragment>
    );
  }
}

export default RegisterForm;
