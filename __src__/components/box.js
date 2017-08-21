import React, { Component } from 'react';
import {
  View
  , StyleSheet
} from 'react-native';

export default class box extends Component {

  render() {
    return (
      <View style={styles.BoxDefault}>
        {this.props.children}
      </View>
    );
  }
} 
class SearchBox extends Component {
  render() {
    return (
      <View style={styles.BoxSearch}>
        {this.props.children}
      </View>
    );
  }
} 
export { SearchBox }
export { box }

const styles = StyleSheet.create({
  BoxDefault: {
    width: '100%',
    flexDirection: 'row'
  }
});