import React from 'react';
import './examples-css.css';

class LoginPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {username: '', password: ''};
  }

  

//This method works fine but Visual studio throwing error
validateCredentials = () => {
  let name = document.getElementById('username').value;
  let secret = document.getElementById('password').value;
  console.log('username' ,name);
  console.log('password' ,secret);
  this.setState({username:name, password:secret}, () => {
     console.log('Compare username', this.state.username !== 'HCL');
  console.log('Compare password', this.state.password !== 'Hcl@1234');
    if(this.state.username !== 'HCL' || this.state.password !== 'Hcl@1234'){
      throw new Error("Username or password is invalid");
    }
  });
 
  
}


  render(){
    console.log('render');
    if(this.state.username === 'HCL' && this.state.password === 'Hcl@1234'){
      return <div><h2>Login Successful</h2></div>
    }
    return( 
      <fragment>
        <h2>Welcome</h2>
        <table>
        <tbody>
          <tr>
            <th>UserName</th>
            <td>
              <input type="text" id="username"/>
            </td>
          </tr>
          <tr>
            <th>Password</th>
            <td>
              <input id="password" type="password"/>
            </td>
          </tr>
          <tr>
            <td></td>
            <td><button type="button" onClick={this.validateCredentials}>Login</button></td>
          </tr>
          </tbody>
        </table>
          
      </fragment>
    )
  }
};

export default LoginPage;
