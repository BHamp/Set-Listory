import React from 'react';
import { useHistory, withRouter } from "react-router-dom";


class Register extends React.Component {
  constructor(props) {
    super(props);
    state: {};
  }

  render(){
    return(
      <div>
        <div className='register'>
          <div className='userBox'>
              <img src='./assets/user.png' className='user'></img>
          </div>
          <h1>Register for an Account</h1>
          <form>
            <label>
              <p>Enter Username: <br/></p>
              <input type='text' placeholder='username'></input>
            </label><label>
              <p>Enter Email: <br/></p>
              <input type='email' placeholder='email'></input>
            </label>
            <label>
              <p>Enter Password: <br/></p>
              <input type='password' placeholder='password'></input>
            </label>
            <label>
              <p>Confirm Password: <br/></p>
              <input type='password' placeholder='password'></input>
            </label>
            <input type='submit' value='Create Account' onClick={() => {this.props.login()}}></input>
          </form>
        </div>
      </div>
    )
  }
}

export default Register;