'use strict'

import React, { Component } from 'react'

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native'

import Container, { Fonts, Background, Height, TextStyles} from './../styles/container'

class Slider extends Component {
 render() {
    let _scrollView = ScrollView
    return (
      <View>
        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView }}
          horizontal={true}
          style={[styles.scrollView, styles.horizontalScrollView]}>



            <View style={styles.button}>
              <Image style={styles.img} source={require('./../assets/lua.jpg')} >
                <View style={[Container, Height.fill, Background.purple]}>
                  <View style={Container}>
                  <View style={{ margin:12}} >
                  <Text  style={[TextStyles.title, Fonts.Avenir]} >Lovers in Outer Space Live Longer</Text>
                  </View>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => {}}>
                    <View style={{width: 36, height: 36, borderRadius: 4, backgroundColor: '#fff', alignSelf:'flex-end'}} >
                      <Text style={[TextStyles.red, Fonts.Avenir]}>+</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                </View>
              </Image>
            </View>





            <View style={styles.button}>
              <Image style={styles.img} source={require('./../assets/lua.jpg')} >
                <View style={[Container, Height.fill, Background.green]}>
                  <View style={Container}>
                  <View style={{ margin:12}} >
                  <Text  style={[TextStyles.title, Fonts.Avenir]} >Lovers in Outer Space Live Longer</Text>
                  </View>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => {}}>
                    <View style={{width: 36, height: 36, borderRadius: 4, backgroundColor: '#fff', alignSelf:'flex-end'}} >
                      <Text style={[TextStyles.red, Fonts.Avenir]}>+</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                </View>
              </Image>
            </View>




            <View style={styles.button}>
              <Image style={styles.img} source={require('./../assets/lua.jpg')} >
                <View style={[Container, Height.fill]}>
                  <View style={Container}>
                  <View style={{ margin:12}} >
                  <Text  style={[TextStyles.title, Fonts.Avenir]} >Lovers in Outer Space Live Longer</Text>
                  </View>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => {}}>
                    <View style={{width: 36, height: 36, borderRadius: 4, backgroundColor: '#fff', alignSelf:'flex-end'}} >
                      <Text style={[TextStyles.red, Fonts.Avenir]}>+</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                </View>
              </Image>
            </View>



        </ScrollView>
      </View>
    )
  }
}

class Thumb extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false
  }

  render () {
    console.warn(this.props.uri)
    return (
      <View style={styles.button}>
        <Image style={styles.img} source={{uri:'./../assets/lua.jpg'}} />
      </View>
    )
  }
}

var THUMBS = ['../assets/lua.jpg']
var createThumbRow = (uri, i) => {
  console.log(uri)
 return  <Thumb key={i} uri={uri} />
}

let styles = StyleSheet.create({
  scrollView: {
    height: 300,
  },
  horizontalScrollView: {
    height: 160,
  },  
  button: {
    margin: 7,
    alignItems: 'center',
  }
  , img: {
    borderRadius: 3,
    width: 224,
    height: 148,
  }
})

export default Slider