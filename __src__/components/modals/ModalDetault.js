'use strict';

import React, { Component } from 'react'
import  {Modal } from  "react-native"

class ModalDetault extends Component {

  render() { 

    let { visible, transparent } = this.props

    return (
      <Modal
        animationType={"slide"}
        transparent={transparent}
        visible={visible}
        onRequestClose={() => {alert("Modal has been closed.")}}
        >
        {this.props.children}
      </Modal>
    );
  }
}

export default ModalDetault