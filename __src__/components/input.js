import React, { Component } from 'react'
import {
  TextInput
  , StyleSheet
} from 'react-native'

export default class SimpleText extends Component {

  constructor(props) {
    super(props)
        this.state = { text: props.text }
      }
  render() {
    return (
        <TextInput
          style={styles.default}
          onChangeText={(text) => this.setState({text},()=>{
            this.props._callback(this.state.text)
          })}
          value={this.state.text}
        />
      )
    }
}

class SecurityText extends Component {

   constructor(props) {
    super(props)
        this.state = { text: props.text }
      }

    render() {
      return (
        <TextInput
          style={styles.default}
          onChangeText={(text) => this.setState({text},()=>{
            this.props._callback(this.state.text)
          })}
          secureTextEntry={true}
          value={this.state.text}
        />
      )
    }
}

class SearchInput extends Component {

   constructor(props) {
    super(props)
        this.state = { text: props.text }
      }

  render() {
    return (
      <TextInput
        style={styles.searchInput}
        onChangeText={(text) => this.setState({text},()=>{
          this.props._callback(this.state.text)
        })}
        value={this.state.text}
      />
    )
      }
}

const styles = StyleSheet.create({
  default: {
    height: 34
    , width: 175
    , color: '#D92100'
    , fontFamily: 'Avenir'
    , fontSize: 28
    , fontWeight: "900"
    , lineHeight: 34
    , textAlign: 'center'
  }
  , searchInput: {
    opacity: 0.7
    , color: "#78909C"
    , fontFamily: "Avenir"
    , fontSize: 13
    , fontWeight: "300"
    , lineHeight: 18
  }
})

export { SimpleText }
export { SecurityText }
export { SearchInput }
