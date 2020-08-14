import React, {Component} from 'react';
import './Form.css'

class App extends Component{
  constructor(props){
    super(props);
    this.state = { name: "Bhavesh",
                   number: "2343423423",
                   message: "this is my text",
                   password: "123" 
                }

  }

  // handelname = (event) => {
  //   this.setState({ name: event.target.value });
  // }

  // handelnumber = (event) => {
  //   this.setState({ number: event.target.value });
  // }

  // handelmessage = (event) => {
  //   this.setState({ message: event.target.value });
  // }

  // handelpassword = (event) => {
  //   this.setState({ password: event.target.value });
  // }  

   handlesubmit = (event) => {
     alert(JSON.stringify(this.state));
     event.preventDefault();
   }

  handelchangeall = (event) => {
    this.setState({[event.target.name] : event.target.value })
  }

  render(){
    return (
    <div className="bgimage">
      <div class="container">
        <div class="d-flex justify-content-center h-100">
          <div class="card">
            <div class="card-header">
              <h3>Sign UP</h3>
              <div class="d-flex justify-content-end social_icon">
                <span><i class="fab fa-facebook-square"></i></span>
                <span><i class="fab fa-google-plus-square"></i></span>
                <span><i class="fab fa-twitter-square"></i></span>
              </div>
            </div>
            <div class="card-body">
              <form onSubmit={ this.handlesubmit } >
                <div class="input-group form-group">
                   <label className="label"> Name </label>
                  <input 
                    type="text"
                    class="form-control" 
                    name="name"
                    placeholder="username" 
                    value={this.state.name}
                    onChange={this.handelchangeall}
                  />  
                </div>

                <div class="input-group form-group">
                   <label className="label"> Mobile number </label>
                  <input 
                    type="number" 
                    class="form-control"
                    name="number" 
                    placeholder="Enter mobile number" 
                    value={this.state.number}
                    onChange={this.handelchangeall}
                  />
                </div>

                <div class="input-group form-group">
                   <label className="label"> Message </label>
                  <input 
                    type="textarea" 
                    class="form-control"
                    name="message" 
                    placeholder="Enter text" 
                    value={this.state.message}
                    onChange={this.handelchangeall}
                  />
                </div>

                <div class="input-group form-group">
                  <label className="label"> Password </label>
                  <input 
                    type="password" 
                    class="form-control"
                    name="password" 
                    placeholder="password" 
                    value={this.state.password}
                    onChange={this.handelchangeall}
                  />
                </div>
                
                <div class="row align-items-center remember">
                  <input type="checkbox" />Remember Me
                </div>
                <div class="form-group">
                  <input type="submit" value="Login" class="btn float-right login_btn" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }
 
}

export default App;
