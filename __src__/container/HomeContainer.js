import React, { Component } from 'react'
import {
   View
} from 'react-native'
import HomeButton from './HomeButton'

export default class HomeContainer extends Component {
   constructor() {
      super()
   }
   render() {
      return (
         <View>
            <HomeButton goToAbout = {this.goToAbout}/>
         </View>
      )
   }
   openMenu = () =>{
      alert("Menu button pressed!")
   }
   goToAbout = () => {
      this.props.navigator.push({
         name: 'About',
         title: 'About',
         openMenu: this.openMenu
      });
   }
}