import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Row, Col, Card} from 'react-materialize'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import {Login} from './login';
export class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      user_name:'',
      license:'',
      first_name:'',
      last_name:'',
      email:'',
      password:''
    }
  }


  render() {
    return (
      <div>
      <Row className="text-center">
        <Col m={3} l={4} />
        <Col s={12} m={6} l={4}>
        <p></p>
        <Card className='white darken-1 opacity'>
        <div className="card-conten align-center opacity">
        <MuiThemeProvider>
          <div>
           <TextField
             hintText="Wprowadź imię:"
             floatingLabelText="Imię"
             onChange = {(event,newValue) => this.setState({first_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Wprowadź nazwisko:"
             floatingLabelText="Nazwisko"
             onChange = {(event,newValue) => this.setState({last_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Wprowadź numer licencji:"
             floatingLabelText="L-000000"
             onChange = {(event,newValue) => this.setState({license:newValue})}
             />
           <br/>
           <TextField
             hintText="Nazwa użytkownika:"
             floatingLabelText="Nazwa"
             onChange = {(event,newValue) => this.setState({user_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Podaj adres email:"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Wprowadź hasło:"
             floatingLabelText="Hasło"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Prześlij" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
         </div>
         </Card>
         </Col>
         </Row>
      </div>
    );
  }
  handleClick(event){
      var apiBaseUrl = "http://127.0.0.1:8000/api";
      console.log("values",this.state.first_name,this.state.last_name,this.state.email,this.state.password);
      //To be done:check for empty values before hitting submit
      var self = this;
      var payload={
      "username": this.state.user_name,
      "password":this.state.password,
      "email":this.state.email,
      "competitor": {
        "license":this.state.license,
        "name": this.state.first_name,
        "surname":this.state.last_name
        }
      }

      axios.post(apiBaseUrl+'/competitors/users/users/', payload)
     .then(function (response) {
       console.log(response);
       if(response.data.code == 200){
        //  console.log("registration successfull");
         var loginscreen=[];
         loginscreen.push(<Login parentContext={this}/>);
         var loginmessage = "Not Registered yet.Go to registration";
         self.props.parentContext.setState({loginscreen:loginscreen,
         loginmessage:loginmessage,
         buttonLabel:"Register",
         isLogin:true
          });
       }
     })
     .catch(function (error) {
       console.log(error);
     });
    }
  }

const style = {
  margin: 15,
};
