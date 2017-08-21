import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {ButtomPrimary, ButtonSecond, ButtonInfo} from './../components/button'
import SimpleText, { SecurityText } from './../components/input'

import UserProfile from './UserProfile'

import * as Actions from './../actions'
import * as AuthenticattionActions from './../actions/authentication'
import * as GroupActions from './../actions/groups'
import * as LanguagesActions from './../actions/languages'
import * as UserActions from './../actions/user'
import * as TopicsActions from './../actions/topics'

class Login extends Component {

  go(screen) {
    this.props.navigator.push({ screen: screen });
  }

  constructor(props) {
    super(props);
    this.state = {email:'', password:''};
  }

  _login(){
    this.props.authenticate(this.state)
  }

  setEmail(email){
    this.setState({email:email.toLowerCase()})
  }
  setPassword(password){
    this.setState({password:password})
  }

render(){
if ( this.props.User.get('isLogged') ) {
   return <UserProfile />
}


  return (
    <View style={styles.mainContainer}>
      <View style={styles.toolbar}>
        <Text style={styles.toolbarTitle}>Login</Text>
      </View>
      <Text style={styles.toolbarButton} onPress={this.props.index__show_modal_login}>
          Later
        </Text>
      <View style={styles.content}>       
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <View style={{width: 50, height: 50}} />
          <View style={{width: '100%', alignItems: 'center'}}>
            <Text style={styles.instructions}>
               <SimpleText text='your email'  _callback={this.setEmail.bind(this)}  />
            </Text>
            <Text style={styles.instructions}>
              <SecurityText text='your password' _callback={this.setPassword.bind(this)}  />
            </Text>
          </View>
          <View style={{width: '100%'}} >
            <ButtomPrimary onPress={this._login.bind(this)}  text='Login' />
            <ButtonSecond text='Create Account'/>
            <ButtonInfo onPress={this.go.bind(this,'Home')} text='Back'  />
          </View>
        </View>
      </View>
    </View>
      )
}
 
}

  
var styles = StyleSheet.create({
    toolbar:{
        paddingTop:30,
        paddingBottom:10,
        flexDirection:'row'   
    },
    toolbarButton:{
        width: 50,           
        color: "#FFF",
        textAlign:'center'
    },
    toolbarTitle:{
      textAlign:'center'
      , flex:1
      , color: "#FFF"
      , fontSize: 30
      , letterSpacing: -1
      , lineHeight: 34
    },
    mainContainer:{
      flex:1     
      , backgroundColor: 'rgba(252,63,29,1)'
    },
    content:{
      flex:1               
      , backgroundColor: 'rgba(252,63,29,1)'
    }
    , buttonContainer: {
    backgroundColor: '#fff',
    borderRadius: 3,
    padding: 10,
    shadowColor: '#CFD8DC',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 50,
    shadowOpacity: 1.0,
    width: '70%'
    , opacity: 0.7
    , color: "#78909C"
    // , fontFamily: Avenir
    , fontSize: 13
    , fontWeight: "300"
    , lineHeight: 18
  }
  , photoBox: {
    height: 122
    , width: 122
    , borderRadius: 4
  // background-color: rgba(251,120,0,0.6);
}
  , rowTitle: {
      color: "#37474F"
      , fontSize: 20
      , fontWeight: "900"
      , lineHeight: 27
    }
    , rowPlatform:  {
      color: "#90A4AE"
      , fontSize: 14
      , fontWeight: "900"
      , lineHeight: 19
    }
    , rowDescription:  {
      color: "#B0BEC5"
      , fontSize: 13
      , fontWeight: "900"
      , lineHeight: 18
    }
});
const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
  },
});



function mapStateToProps(state) {
  return {
    header: state.header
    , User: state.User
    , Groups: state.Groups
    , Topics: state.Topics
    , App: state.App
    , Languages: state.Languages
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign(Actions
    , AuthenticattionActions
    , LanguagesActions
    , UserActions
    , TopicsActions
    , GroupActions) , dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)