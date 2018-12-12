import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Row, Col, Card} from 'react-materialize'
import { Redirect } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import axios from 'axios';
import {UploadScreen} from './UploadScreen';
export class Login extends Component {

constructor(props){
  super(props);
  this.state={

  username:'',
  password:''
  }
 }

 handleClick(event){
 var apiBaseUrl = "http://127.0.0.1:8000/";
 var self = this;
 var payload={
 "username":this.state.username,
 "password":this.state.password
 }
 axios.post(apiBaseUrl+'api-token-auth/', payload)
 .then(function (response) {
 console.log(response);
 if(response.status == 200){
 console.log("Login successfull");
 sessionStorage.setItem('jwtToken', response.data.token);
 var uploadScreen=[];
 this.setState({loginPage:[],uploadScreen:uploadScreen})
 uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
 self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
 }
 else if(response.status == 204){
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
render() {
    return (
      <div>
      <Row className="text-center">
        <Col m={3} l={4} />
        <Col s={12} m={6} l={4}>
        <p></p>
        <Card className='white darken-1 opacity'>
        <div className="card-conten align-center">
        <MuiThemeProvider>

           <TextField
             hintText="Wprowadź nazwę użytkownika:"
             floatingLabelText="Nazwa użytkownika"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField className="center-align"
               type="password"
               hintText="Wprowadź hasło"
               floatingLabelText="Hasło"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Zaloguj" color="green" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </MuiThemeProvider>
         </div>
         </Card>
         </Col>
         </Row>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
