import React, { Component } from "react";
import firebase from "firebase";
import { Button } from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: "",
    };
  }

  login(e) {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u.user.uid);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  signup(e) {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="col-md-4" style={{marginTop: "100px"}}>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1" style={{color: "#fff", fontSize: "25px"}}>Email address:</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text" style={{color: "#ddd"}}>
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1" style={{color: "#fff", fontSize: "25px"}}>Password:</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div style={{display: "flex", justifyContent: "space-between"}}>
          <Button type="submit" onClick={this.login} variant="contained" color="primary"> 
            Login
          </Button>
          <Button
            onClick={this.signup}
            style={{ marginLeft: "25px" }}
            variant="contained"
            color="secondary"
          >
            SignUp
          </Button>
          </div>
        
        </form>
      </div>
    );
  }
}

export default Login;
