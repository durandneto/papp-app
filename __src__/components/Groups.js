import React, { Component } from 'react'
import {
  Text
  , ListView
  , View
  , TextInput
  , StyleSheet
  , Image
  , Keyboard
  , TouchableOpacity
  , ScrollView
} from 'react-native'
import Box from './box'
import SearchInput from './input'
import {ButtonIcon, ButtonSecond, ButtonInfo} from './button'
import HighlithGroups from './highlightGroup'
import TabHeader from './tabsHeader'
import NearBy from './nearBy'
import PopularGroups from './popularGroups'
import TabNavigation from './tabsNavigation'
import Header from './Header'

import Container, { ContainerFlexSpace, Fonts, Background, Height, TextStyles,Toolbar} from './../styles/container'

export default class MyComponent extends Component {
  componentWillMount() {
    // if ( !this.props.Groups.get('isLoadded') )
      this.props.fetch_groups()

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.Groups.get('data').get('rows').toArray()),
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.props.Groups.get('data').get('rows').toArray())
    });
  }

  go(screen) {
    this.props.navigator.push({ screen: screen });
  }
  _select(group) {
    this.props.select_group(group)
    this.go('GroupDetail')
  }

_searcTerm(){
    this.props.fetch_groups()
  }

_setSearchTerm(search){
    this.setState({search:search.toLowerCase()}, () => {
      this.props.update_search_term(search.toLowerCase())
    })
  }

  render() {
    return (
       <View style={styles.mainContainer}>
          <Header title='explore' />
          <View style={styles.content}>       
            <View style={styles.toolbar}>
               <TextInput
                  style={styles.searchInput}
                  placeholder="search for groups"
                  onChangeText={this._setSearchTerm.bind(this)}
                  onSubmitEditing={this._searcTerm.bind(this)}
                  value={this.state.search}
                />
            </View>   
            <ScrollView styles={{flex:1}} >
              <HighlithGroups  />
              <TabHeader 
              tabs={this.props.Groups.get('tabs')} 
              select_header_tab={this.props.select_header_tab} />
              <View style={styles.content}>    
              {
                (this.props.Groups.get("tabs").get('selected') === 'TRENDING') ?
                  <ListView
                    dataSource={this.state.dataSource}
                    enableEmptySections={true}
                    renderRow={this._renderRow.bind(this)}
                  />
                : null
              }

              {
                (this.props.Groups.get("tabs").get('selected') === 'POPULAR') ?
                 <PopularGroups />
                : null
              }

              {
                (this.props.Groups.get("tabs").get('selected') === 'NEARBY') ?
                  <NearBy />
                : null
              }
              </View>    
            </ScrollView>
          </View>
         <TabNavigation active='GROUPS' set_screen={this.props.set_screen}  navigator={this.props.navigator} />
        </View> 
    )
  }

  _renderRow( row ) {
    return (
      <View style={{flex: 1, flexDirection: 'row', margin:10, borderColor: '#CFD8DC', borderBottomWidth:0.5}}>
        <View style={{width: '35%', height: 140}} >
          <Image style={styles.img}  source={require('./../assets/familia.jpg')}   />
        </View>
        <View style={{width: '62%', height: 140, marginLeft:14}} >
          <View style={ContainerFlexSpace}>
            <View>
              <Text style={[TextStyles.groupTitle, Fonts.Avenir]}>{row.get('name')}</Text>
            </View>
            <View style={{flexGrow:1}}>
              <Text style={[TextStyles.groupDescription, Fonts.Avenir]} >POP CULTURE</Text>
            </View>
            <View style={{width: '100%', height: 50}} >
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end'}}>
                <View style={{width: '70%', height: '100%'}} >
                  <Text style={[TextStyles.groupPlatform, Fonts.Avenir]}>
                    {row.get('platform').get('name').toString().toUpperCase()}
                  </Text>
                </View>
                <View style={{width: '30%', height: '100%'}} >
                   <TouchableOpacity
                    style={styles.button}
                    onPress={this._select.bind(this,row)}>
                    <View style={{width: 36, height: 36, borderRadius: 4, backgroundColor: '#FC3F1D', alignSelf:'flex-end'}} >
                      <Text style={[TextStyles.white, Fonts.Avenir]}>+</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>            
            </View>
          </View>
        </View>
      </View>
    )
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
});
