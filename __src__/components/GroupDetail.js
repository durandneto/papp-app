import React, { Component } from 'react';
import {
  Text
  , ListView
  , View
  , TextInput
  , StyleSheet
  , Image
  , TouchableOpacity
} from 'react-native'

import {ButtomPrimary, ButtonSecond, ButtonInfo} from './button'
import SimpleText, { SecurityText } from './input'
import TabNavigation from './tabsNavigation'

import Container, { ContainerFlexSpaceAround, Fonts, Background, Height, TextStyles} from './../styles/container'

export default class PappApp extends Component {

  go(screnn) {
    this.props.navigator.push({ screen: screnn });
  }

  componentWillMount(){
    console.warn('componentWillMount',this.props.User.get('id'),this.props.Groups.get('selectedRow').get('state'))
  }

render() {
    return ( 
         
         <View style={{
        flex: 1,
        flexDirection: 'column', 
      }}>
         <Image style={[styles.img]} source={require('./../assets/lua.jpg')} >
            <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between'}}>
              <View style={{marginLeft: 15}}>
                <TouchableOpacity onPress={this.go.bind(this,'Groups')}>
                  <Image  source={require('./../assets/BackArrow.png')}   />
                </TouchableOpacity>
              </View>
              <View style={{height: 50}}> 
                <Text style={[styles.members, Fonts.Avenir]}  >{this.props.Groups.get('selectedRow').get('members').get('count')} Members</Text>
                <Text style={[styles.group, Fonts.Avenir]}  >{this.props.Groups.get('selectedRow').get('platform').get('name').toString().toUpperCase()} GROUP</Text>
              </View>
            </View>
          </Image>
        <View style={{width: '100%', height: 50, flexGrow:1, padding:15}}>
         <View style={ContainerFlexSpaceAround}>
            <View style={{ height: '20%'}} >
            <Text style={[styles.title, Fonts.Avenir]}>{this.props.Groups.get('selectedRow').get('name')}</Text>
            </View>
            <View style={{ height: '20%'}} >
              <Text  style={[styles.description, Fonts.Avenir]} >{this.props.Groups.get('selectedRow').get('description')}</Text>
            </View>
            <View style={{ height: '40%'}}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 32}} >
                  <Image  source={require('./../assets/Location-Icon.png')}   />
                </View>
                <View >
                <Text  style={[styles.descriptionLine]} >{this.props.Groups.get('selectedRow').get('location')}</Text>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 32}} >
                  <Image  source={require('./../assets/Topics-Icon.png')}   />
                </View>
                <View >
                <Text  style={[styles.descriptionLine]} >{this.props.Groups.get('selectedRow').get('topics')}</Text>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 32}} >
                  <Image  source={require('./../assets/Language-Icon.png')}   />
                </View>
                <View >
                  <Text  style={[styles.descriptionLine]} >{this.props.Groups.get('selectedRow').get('userLanguage').get('name')}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {
          (!this.props.Groups.get('selectedRow').get('state').get('owner')) ?
             <TouchableOpacity
              style={styles.rectangle}
              onPress={() => {}}>
                  <Text style={[styles.join, Fonts.Avenir]}>Join Public Group</Text>
              </TouchableOpacity>: null
        }
        <TabNavigation /> 
      </View> 
    )
  }
}


let styles = StyleSheet.create({
  container: {
  }
  , img: {
    borderRadius: 3
    , paddingTop: 30
    , width: '100%'
    , height: 235
  }
  , members: {
    color: "#FFFFFF"
    , fontSize: 20
    , fontWeight: "900"
    , lineHeight: 27
  }
  , title: {
    color: "#37474F"
    , fontSize: 30
    , fontWeight: "900"
    , lineHeight: 34
    , letterSpacing: -1

  }
  , description: {
    color: "#607D8B"
    , fontSize: 20
    , fontWeight: "300"
    , lineHeight: 30
  }
  , descriptionLine: {
    color: "#90A4AE"
    , fontSize: 13
    , fontWeight: "600"
    , lineHeight: 17
    , paddingTop: '1%'
  }
  , group: {
    color: "#FFFFFF"
    , fontSize: 12
    , fontWeight: "900"
    , lineHeight: 16
  }
  , join: {
      color: '#fff'
    , fontSize: 18
    , alignSelf: 'center'
    , lineHeight: 25
    , fontWeight: "900"
    , paddingTop: 20
  }
  , rectangle: {
    height: 62
    , width: '90%'
    , borderRadius: 100
    , backgroundColor: '#FC3F1D'
    , marginLeft: '5%'
    , marginBottom: '2%'
}
})