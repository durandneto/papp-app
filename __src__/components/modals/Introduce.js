'use strict';

const React = require('react');
const ReactNative = require('react-native');
const {
  ScrollView,
  StyleSheet,
  Modal,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} = ReactNative;

import Container, { ContainerFlexSpace, Fonts, Background, Height, TextStyles} from './../../styles/container'
import {ButtomPrimary, ButtonSecond, ButtonInfo} from './../button'
 
import Introduce from '../../container/index-introduce'
class Row extends React.Component {
  _onClick = () => {
    this.props.onClick(this.props.data);
  };

  _verfyActiveLang( lang ) {
      let flag = false
    this.props.User.get('languages').map( ( language) => {
      if (language.get('id')==lang.get('id')){
        flag = true
      }
    })
    return flag
  }

  render() {
    return (
     <TouchableOpacity onPress={this._onClick} >
        <View style={{flex: 1, flexDirection: 'row', borderColor: '#CFD8DC', borderBottomWidth:0.5}}>
          <View style={{padding:18, width: '80%'}} >
            <View style={ContainerFlexSpace}>
              <Text style={[TextStyles.LanguageTitle, Fonts.Avenir]}>{this.props.data.get('name')}}</Text>
            </View>
          </View>
          {
            (this._verfyActiveLang(this.props.data)
              ? <View style={[{width: '20%', height: 40},styles.languageSelected]} /> 
              : <View style={[{width: '20%', height: 40},styles.languageUnSelected]} />
             )
          }
        </View>
      </TouchableOpacity>
    );
  }
}

class ModalApp extends React.Component {
  componentWillMount() {
    if ( !this.props.Languages.get('isLoadded') )
      this.props.fetch_languages()
  }


  render() {
    const rows = this.props.Languages.get('data').get('rows').map((row, ii) => {
      return <Row User={this.props.User} key={ii} data={row} onClick={this.props.user_select_language.bind(this,row)}/>;
    });
    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.props.modalVisible}
        onRequestClose={() => {alert("Modal has been closed.")}}
        >
        <Introduce />
      </Modal>
    );
  }
}


  
var styles = StyleSheet.create({
    toolbarHeader:{
        paddingTop:30,
        paddingBottom:10,
        flexDirection:'row'   
    }
    , toolbar:{
        paddingTop:15,
        paddingBottom:18,
        alignItems: 'center'
    }
    , languageSelected:{
        alignItems: 'center'
        , backgroundColor: 'red'
    }
    , languageUnSelected:{
        alignItems: 'center'
        , backgroundColor: 'silver'
    },
    toolbarButton:{
        width: 50,           
        color: "#FC3F1D",
        textAlign:'center'
    },
    toolbarTitle:{
      textAlign:'center'
      , flex:1
      , color: "#FC3F1D"
      , fontSize: 30
      , letterSpacing: -1
      , lineHeight: 34
    },
    mainContainer: {
      flex:1                 
    },
    content:{
      flex:1               
    }
    , searchInput: {
      height: 40
      , borderRadius: 20
      , width:'90%'
      , backgroundColor: "#FFFFFF"
      , alignSelf: 'center'
      , shadowOffset: {
        width: 1,
        height: 1
      }
      , shadowRadius: 3
      , shadowOpacity: 0.2
      , textAlign: 'center'
      , paddingLeft: '5%'
      , paddingRight: '5%'
        , opacity: 0.7
        , color: '#78909C'
        ,  fontSize: 13
        ,  fontWeight: '300'
        , lineHeight: 18
    }
    , buttonContainer: {
      backgroundColor: '#fff',
      borderRadius: 3,
      padding: 10,
      shadowColor: '#CFD8DC',
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowRadius: 50,
      shadowOpacity: 1.0,
      width: '70%'
      , opacity: 0.7
      , color: "#78909C"
      // , fontFamily: Avenir
      , fontSize: 13
      , fontWeight: "300"
      , lineHeight: 18
    }
    , photoBox: {
      height: 122
      , width: 122
      , borderRadius: 4
    // background-color: rgba(251,120,0,0.6);
    }
    , rowTitle: {
      color: "#37474F"
      , fontSize: 20
      , fontWeight: "900"
      , lineHeight: 27
    }
    , rowPlatform:  {
      color: "#90A4AE"
      , fontSize: 14
      , fontWeight: "900"
      , lineHeight: 19
    }
    , rowDescription:  {
      color: "#B0BEC5"
      , fontSize: 13
      , fontWeight: "900"
      , lineHeight: 18
    } 
    , img: {
      borderRadius: 3
    }
    ,row: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 20,
    backgroundColor: '#3a5795',
    margin: 5,
  },
  scrollview: {
    flex: 1,
  }
});




module.exports = ModalApp;