import React, { Component } from 'react';
import { AppRegistry, View, Text, TouchableOpacity, Image} from 'react-native';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from './../actions'

import{ Fonts, TextStyles, Toolbar } from './../styles/container'
import ModalLogin from './modals/Login'

class TabeHeader extends Component {

  render() {
    let { title, Header, index__show_modal_login} = this.props
    return (
      <View style={Toolbar.header}>
        <Text style={[Toolbar.title, Fonts.ContrailOne]}>EXPLORE</Text>
        <Text style={Toolbar.button}  onPress={index__show_modal_login}>
          <Image  source={require('./../assets/User.png')}   />
        </Text>
         <ModalLogin
            visible={Header.get('showModalLogin')}/>
      </View>
    );
  }
} 

function mapStateToProps(state) {
  return {
    App: state.App
    , User: state.User
    , Header: state.Header
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign(Actions) , dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(TabeHeader)

