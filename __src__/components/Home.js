import React, { Component } from 'react';
import {
  Text
  , ListView
  , View
  , TextInput
  , StyleSheet
  , Image
} from 'react-native'

import {ButtomPrimary, ButtonSecond, ButtonInfo} from './button'
import SimpleText, { SecurityText } from './input'
import ModalIntroduce from './modals/Introduce'

export default class PappApp extends Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    if( visible == false)
      this.goToTopcis()
    this.setState({modalVisible: visible});
  }

  goToGroups() {
    this.props.navigator.push({ screen: 'Groups' });
  }
  goToTopcis() {
    this.props.navigator.push({ screen: 'Groups' });
  }
  login() {
    this.props.navigator.push({ screen: 'Login' });
  }
   _logout(){
    this.props.logout(this.state)
  }

render() {
  let { App } = this.props

    return (
       <View style={styles.mainContainer}>
          <View style={styles.toolbar}>
            <Text style={styles.toolbarTitle}>{App.get('screen')}</Text>
            <Text style={styles.toolbarButton}  onPress={this.login.bind(this)}>
              <Image  source={require('./../assets/User.png')}   />
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
              <View style={{width: '100%'}} >
                <ButtomPrimary text='Groups'  onPress={this.goToGroups.bind(this)}  />
                {
                  (!this.props.User.get('isLogged')) ? <ButtonSecond onPress={this.login.bind(this)}  text='Login' /> : <ButtonSecond text='Logout'  onPress={this._logout.bind(this)}  />
                }
                <ButtonInfo text='Open Modal'  onPress={this.setModalVisible.bind(this, true)}  />
              </View>
            </View>
          </View>

          <ModalIntroduce
            user_select_language={this.props.user_select_language}
            fetch_languages={this.props.fetch_languages}
            Languages={this.props.Languages}
            User={this.props.User}
            goToTopcis={this.goToTopcis.bind(this)}
            modalVisible={this.state.modalVisible}
            setModalVisible={this.setModalVisible.bind(this)} />
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


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  // },
// });