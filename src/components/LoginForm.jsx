import React from "react";
import { toast } from "react-toastify";
import { loginCheck, getUser, setUser } from "./service/dataServices";
import { Link } from "react-router-dom";
import Form from "./common/form";
import Joi from "joi-browser";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().min(5).required().label("Username"),
    password: Joi.string().min(8).required().label("Password"),
  };

  componentDidMount = () => {
    const userData = getUser();
    if (userData.isLogedIn) {
      toast.success("Already LoggedIn");
      this.props.history.push("/home");
    }
  };

  doSubmit = () => {
    const isLogedin = loginCheck(this.state.data);
    if (isLogedin) {
      const userData = getUser();
      userData.isLogedIn = true;
      setUser(userData);
      toast.success("Successfully LogedIn");
      window.location.href = "/home";
    } else {
      toast.error("Authentication Failed: Try again");
    }
    //api call
    console.log("submited");
  };

  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
          <p className="text-center">
            <Link to="/register">Dont have account? Register Here</Link>
          </p>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
