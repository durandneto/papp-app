import React, { Component } from 'react';
import { AppRegistry, View, Text, TouchableOpacity, Image } from 'react-native';
import{ ContainerRow, ContainerTab, TextStyles} from './../styles/container'

class TabNavigation extends Component {
  goGroups() {
    this.props.navigator.push({ screen: 'Groups' , title: 'Groups' });
  }
  goNotifications() {
    this.props.navigator.push({ screen: 'Notifications' , title: 'Notifications', openMenu: this.openMenu, rightText: 'Open' });
  }
  goMygroups() {
    this.props.navigator.push({ screen: 'MyGroups', title: 'MyGroups', back: true });
  }

  openMenu = () =>{
      alert("Menu button pressed!")
   }

  render() {
    return (
       <View style={{width: '100%', height: 50, backgroundColor: 'rgba(255,255,255, 0.5)', borderColor: '#CFD8DC', borderTopWidth:0.5}} >
            <View style={{flex: 1, flexDirection: 'row'}}>
              <TouchableOpacity  onPress={this.goGroups.bind(this)} style={{width: '33%', height: 50}}>
                  <Image  style={{ marginTop:5,alignSelf: 'center'}} source={require('./../assets/explore-on.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.goMygroups.bind(this)} style={{width: '33%', height: 50}} >
                <Image  style={{ marginTop:5,alignSelf: 'center'}}  source={require('./../assets/groups-off.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.goNotifications.bind(this)} style={{width: '33%', height: 50}} >
                <Image  style={{ marginTop:5,alignSelf: 'center'}}  source={require('./../assets/notifications-off.png')} />
              </TouchableOpacity>
            </View>
          </View>
    );
  }
}


export default TabNavigation
