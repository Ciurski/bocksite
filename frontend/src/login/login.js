import React, { Component } from 'react';
import {Col} from 'react-materialize'
import axios from 'axios';

export class Login extends Component {
  handleClick(event){
   var apiBaseUrl = "http://localhost:4000/api/";
   var self = this;
   var payload={
   "email":this.state.username,
   "password":this.state.password
   }
   axios.post(apiBaseUrl+'login', payload)
   .then(function (response) {
   console.log(response);
   if(response.data.code == 200){
   console.log("Login successfull");
   var uploadScreen=[];
   uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
   self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
   }
   else if(response.data.code == 204){
   console.log("Username password do not match");
   alert("username password do not match")
   }
   else{
   console.log("Username does not exists");
   alert("Username does not exist");
   }
   })
   .catch(function (error) {
   console.log(error);
   });
   }


  constructor(props) {
    super(props);
      this.state = {
        remeber:true,
        password:'',
        login:''
      };

      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }
  render() {
    return (
      <div className="row">
        <Col s={6} className="14 offset-14">
          <div className="card">
            <div className="card-action">
              <h3>Logowanie</h3>
            </div>
            <div className="card-content">
              <div className="form-field">
                <label for="username">Username</label>
                <input type="text" id="username"></input>
              </div>
              <div className="form-field">
                <label for="password">Password</label>
                <input type="password" name="password" id="password"></input>
              </div>
              <div className="form-field">

                <input
                className="form-checkbox"
                name="remember"
                id="remember"
                type="checkbox"

                onChange={(e) => this.toggleCheckboxChange(e)}
                >
                </input>
                <label>
                Pamietaj
                </label>

                <br />
              </div>
              <div className="form-field">
              <button className="btn-large" onClick={(event) => this.handleClick(event)}>Login</button>
              </div>
            </div>
          </div>
        </Col>

      </div>
        )}
}
