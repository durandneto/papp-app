'use strict';

const React = require('react');
const ReactNative = require('react-native');
const {
  ScrollView,
  StyleSheet,
  Modal,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
  Image
} = ReactNative;

import Container, { ContainerFlexSpace, Fonts, Background, Height, TextStyles} from './../styles/container'
import {ButtomPrimary, ButtonSecond, ButtonInfo} from './button'
import TabNavigation from './tabsNavigation' 

class Row extends React.Component {
  _onClick = () => {
    this.props.inativeGroup(this.props.data);
  };

  render() {
    let bg = (this.props.data.get('isActive')) ? this.props.data.get('color'): 'light'
    let color = (this.props.data.get('isActive')) ? TextStyles.notificationTitle: TextStyles.notificationTitleInative
    return (
     <TouchableOpacity onPress={this.props.user_inative_group.bind(this,this.props.index)} >
        <View style={{flex: 1, flexDirection: 'row', borderColor: '#CFD8DC', borderBottomWidth:0.5}}>
         <View style={{width: '20%'}} >
          <View style={[{width: 48, height:48, borderRadius: 5, marginTop:20, 
            marginLeft: 30}, Background[bg]]} />
         </View>
          <View style={{padding:18, width: '60%'}} >
            <View style={ContainerFlexSpace}>
              <Text style={[color, Fonts.Avenir]}>{this.props.data.get('title')}</Text>
            </View>
            <View style={ContainerFlexSpace}>
              <Text style={[TextStyles.notificationDescription, Fonts.Avenir]}>{this.props.data.get('description')}</Text>
            </View>
          </View>
            <View style={[{width: '20%', height: 40},styles.languageSelected]} > 
              <Text style={[TextStyles.notificationDate, Fonts.Avenir]}>{this.props.data.get('date')}</Text>
            </View>
        </View>
      </TouchableOpacity>
    );
  }
}

class NotificationsEmpty extends React.Component {

  render () {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <View style={styles.toolbarHeader}>
          <Text style={styles.toolbarTitle}> NOTIFICATIONS</Text>
          <Text style={styles.toolbarButton} >
            <Image  source={require('./../assets/User.png')}   />
          </Text>
        </View>
        <View>
          <Image style={{alignSelf: 'center'}} source={require('./../assets/notifications-empty-state.png')}   />
        </View>
        <View>
        <TabNavigation active='GROUPS' set_screen={this.props.set_screen}  navigator={this.props.navigator} />
        </View>
      </View>
    )
  }
}
class Notifications extends React.Component {
 


  render() {
    if (this.props.User.get('notifications').size ) {

      const rows = this.props.User.get('notifications').map((row, ii) => {
        return <Row user_inative_group={this.props.user_inative_group} User={this.props.User} key={ii}  index={ii} data={row} />;
      });
      return (
          <View style={styles.mainContainer}>
            <View style={styles.toolbarHeader}>
              <Text style={styles.toolbarTitle}> {this.props.User.get('notifications').size} NEW NOTIFICATIONS</Text>
              <Text style={styles.toolbarButton} >
                <Image  source={require('./../assets/User.png')}   />
              </Text>
            </View>
            <ScrollView
              style={styles.scrollview}
              >
              {rows}
            </ScrollView>
            <TabNavigation active='GROUPS' set_screen={this.props.set_screen}  navigator={this.props.navigator} />
          </View>
      );
    } else {
      return <NotificationsEmpty  navigator={this.props.navigator}  />
    }
  }
}


  
var styles = StyleSheet.create({
    toolbarHeader:{
        paddingTop:30,
        paddingBottom:10,
        flexDirection:'row'   
    }
    , toolbar:{
        paddingTop:15,
        paddingBottom:18,
        alignItems: 'center'
    }
    , languageSelected:{
        marginTop: 10
    }
    , languageUnSelected:{
        marginTop: 10
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
    mainContainer: {
      flex:1                 
    },
    content:{
      flex:1               
    }
    , searchInput: {
      height: 40
      , borderRadius: 20
      , width:'90%'
      , backgroundColor: "#FFFFFF"
      , alignSelf: 'center'
      , shadowOffset: {
        width: 1,
        height: 1
      }
      , shadowRadius: 3
      , shadowOpacity: 0.2
      , textAlign: 'center'
      , paddingLeft: '5%'
      , paddingRight: '5%'
        , opacity: 0.7
        , color: '#78909C'
        ,  fontSize: 13
        ,  fontWeight: '300'
        , lineHeight: 18
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
    , img: {
      borderRadius: 3
    }
    ,row: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 20,
    backgroundColor: '#3a5795',
    margin: 5,
  },
  scrollview: {
    flex: 1,
  }
});




module.exports = Notifications;