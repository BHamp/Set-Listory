import React from 'react';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Main from './Main.jsx'
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      register: false,
      login: true,
      main: false,
    }
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.mainApp = this.mainApp.bind(this);
  }

  register() {
    this.setState({
      login:false,
      register: true
    })
  }

  login() {
    this.setState({
      login:true,
      register: false
    })
  }

  mainApp() {
    this.setState({
      login:false,
      main: true
    })
  }

  render(){
    return(
      <div>
        {this.state.login
          && (<Login mainApp={this.mainApp} register={this.register} />)}
        {this.state.register
          && (<Register login={this.login} />)}
        {this.state.main
        && (<Main />)}
      </div>
    )
  }
}

export default App;