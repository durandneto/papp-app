'use strict';

import React, { Component } from 'react'
import  Modal from "./ModalDetault"
import  { View, Text, TouchableOpacity } from "react-native"

import Login from '../../container/login'

class ModalLogin extends Component {

  render() { 

  	let { set_visibility, visible } = this.props

    return (
      <Modal visible={visible} >
      	<Login />
      </Modal>
    );
  }
}

export default ModalLogin