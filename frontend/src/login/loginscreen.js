import React, { Component } from 'react';
import BackgroundImage from 'react-background-image-loader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Row, Col, Card} from 'react-materialize'
import './login.css';
import {Login} from './login';
import {Register} from './register';

export class Loginscreen extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      loginscreen:[],
      loginmessage:'',
      buttonLabel:'Zarejestruj',
      isLogin:true,
      background:'./images/loginbg.jpg'
    }
  }
  componentWillMount(){
    var loginscreen=[];
    loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext}/>);
    var loginmessage = "Nie posiadasz konta?";
    this.setState({
                  loginscreen:loginscreen,
                  loginmessage:loginmessage
                    })
  }
  handleClick(event){
      // console.log("event",event);
      var loginmessage;
      if(this.state.isLogin){
        var loginscreen=[];
        loginscreen.push(<Register parentContext={this}/>);
        loginmessage = "Posiadasz konto?";
        this.setState({
                       loginscreen:loginscreen,
                       loginmessage:loginmessage,
                       buttonLabel:"Zaloguj",
                       isLogin:false
                     })
      }
      else{
        var loginscreen=[];
        loginscreen.push(<Login parentContext={this}/>);
        loginmessage = "Nie posiadasz konta?";
        this.setState({
                       loginscreen:loginscreen,
                       loginmessage:loginmessage,
                       buttonLabel:"Zarejestruj",
                       isLogin:true
                     })
      }
    }

  render() {
    return (
      <div className="loginscreen" style={{  backgroundImage: "url(" + this.state.background + ")"}}>
        {this.state.loginscreen}
        <div>
          <Row className="text-center">
            <Col m={3} l={4} />
            <Col s={12} m={6} l={4}>
            <Card className='opacity' title={this.state.loginmessage}>

          <MuiThemeProvider>
            <div>
               <RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
           </div>
          </MuiThemeProvider>
          </Card>
          </Col>
          </Row>
        </div>
      </div>

    );
  }
}
const style = {
  margin: 15,
};
