import React, { Component } from 'react';

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password:''
    };
  }

    
    render() {
        return (
          <div className="loginContainer">
            <div className="col-md-5">
              <h2>Existing Users</h2>

                <h5>My Email Address</h5>
                <input type="email" 
                    placeholder="Email Address" 
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                    />
                <h5>Password</h5>

                <input type="password" 
                       placeholder="Password" 
                       name="password" 
                       value={this.state.password} 
                       onChange={(e)=> this.setState({password:e.target.value})} />

                <button className="btn btn-default" 
                        value="Submit" 
                        onClick={()=>{ console.log(this.state)}}>Login</button>


             
            </div>
            <div className="col-md-1 ">
              <div className="spacer"></div>
            </div>
            <div className="col-md-5">
              <h2>New User</h2>

            </div>
          </div>
        );
    }
};


export default Login