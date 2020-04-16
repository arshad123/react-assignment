import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import LoginForm from "./components/LoginForm";
import RegisterForm from './components/RegisterForm';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import "react-toastify/dist/ReactToastify.css";
import Home from './components/Home';


function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/" component={LoginForm} exact />
          <Route path="/register" component={RegisterForm} />
          <Route path="/update" component={RegisterForm} />
          <Route path="/home" component={Home} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
