import React from 'react';
import { useHistory, withRouter } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return(
      <div>
        <div className='login'>
          <div className='userBox'>
              <img src='./assets/user.png' className='user'></img>
          </div>
          <h1>Login</h1>
          <form>
              <input type='text' placeholder='username'></input>
              <input type='password' placeholder='password'></input>
            <input type='submit' value='Login' onClick={() => {this.props.mainApp()}} ></input>
          </form>
          <a href='#' onClick={() => {this.props.register()}} >Don't have an account?</a>
        </div>
      </div>
    )
  }
}

export default Login;