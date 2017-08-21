import React, { Component } from 'react';
import {
  Text
  , ListView
  , View
  , TextInput
  , StyleSheet
  , Image
} from 'react-native'



import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from './../actions'
import * as AuthenticattionActions from './../actions/authentication'
import * as GroupActions from './../actions/groups'
import * as LanguagesActions from './../actions/languages'
import * as UserActions from './../actions/user'
import * as TopicsActions from './../actions/topics'



import {ButtomPrimary, ButtonSecond, ButtonInfo} from './../components/button'
import SimpleText, { SecurityText } from './../components/input'

class UserProfile extends Component {
 
render() {
  let { App, index__show_modal_login } = this.props

    return (
       <View style={styles.mainContainer}>
          <View style={styles.toolbar}>
            <Text style={styles.toolbarTitle}>Profile</Text>
            <Text style={styles.toolbarButton}  onPress={this.props.logout}>
              Logout
            </Text>
            <Text style={styles.toolbarButton}  onPress={this.props.index__show_modal_login}>
              Close
            </Text>
          </View>
          <View style={styles.content}>       
            <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <View style={{width: 50, height: 50}} />
              <View style={{width: '100%', alignItems: 'center'}}>
                {
                  (this.props.User.get('isLogged'))  ? 
                  <View style={styles.container}>
                    <Text style={styles.instructions}>
                     Hellow !!!
                    </Text>
                    <Text style={styles.instructions}>
                     {this.props.User.get('name')}
                    </Text>
                    <Text style={styles.instructions}>
                     {this.props.User.get('email')}
                    </Text>
                  </View> : null
                }
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
        color: "#FC3F1D",
        textAlign:'center'
    },
    toolbarTitle:{
      textAlign:'center'
      , flex:1
      , color: "#FC3F1D"
      , fontSize: 30
      , letterSpacing: -1
      , lineHeight: 34
    },
    mainContainer:{
      flex:1                 
    },
    content:{
      backgroundColor:'#ebeef0',
      flex:1               
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
   ,  instructions: {
    textAlign: 'center',
    color: '#333333',
  }
    , rowDescription:  {
      color: "#B0BEC5"
      , fontSize: 13
      , fontWeight: "900"
      , lineHeight: 18
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)