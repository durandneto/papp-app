import React, { Component } from 'react';
import {
  Text
  , StyleSheet
  , Image
} from 'react-native';

export default class Button extends Component {

  render() {
    return (
      <Text onPress={this.props.onPress} style={styles.ButtomPrimary}>
        {this.props.text}
        </Text>
    );
  }
}
class ButtomPrimary extends Button {
  render() {
    return (
      <Text onPress={this.props.onPress} style={styles.ButtomPrimary}>
         {this.props.text}
        </Text>
    );
  }
}

class ButtonSecond extends Button {
  render() {
    return (
      <Text onPress={this.props.onPress} style={styles.ButtomSecond}>
        {this.props.text}
        </Text>
    );
  }
}
class ButtonInfo extends Button {
  render() {
    return (
      <Text onPress={this.props.onPress} style={styles.ButtonInfo}>
         {this.props.text}
        </Text>
    );
  }
}
class ButtonIcon extends Button {
  render() {
    return (
      <Text onPress={this.props.onPress} >
         <Image source={this.props.source} />
        </Text>
    );
  }
}

export { ButtomPrimary }
export { ButtonSecond }
export { ButtonInfo }
export { ButtonIcon }

const styles = StyleSheet.create({
  ButtomPrimary: {
    textAlign: 'center',
    color: 'white',
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%',
    height: 62,
    backgroundColor: "#FB7800" 
  }
  , ButtomSecond: {
    textAlign: 'center',
    backgroundColor: '#FCA001',
    color: 'white',
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%',
    height: 62,
    backgroundColor: "#FFA100" 
  }
  , ButtonInfo: {
    textAlign: 'center',
    backgroundColor: '#FDCB00',
    color: 'white',
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%',
    height: 62,
    backgroundColor: "#FDCB00"
  }
});