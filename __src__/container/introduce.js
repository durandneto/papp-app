'use strict';

import React, { Component } from 'react';
import { View
  , Text
  , TouchableHighlight
  , StyleSheet
  , AsyncStorage
  , Navigator } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory
  , Router
  , Route
  , IndexRoute } from 'react-router'

import * as Actions from './../actions'
import * as AuthenticattionActions from './../actions/authentication'
import * as GroupActions from './../actions/groups'
import * as LanguagesActions from './../actions/languages'
import * as UserActions from './../actions/user'
import * as TopicsActions from './../actions/topics'

import Login from './login'; 
import Home from '../components/Home'; 
import GroupsPage from '../components/Groups'; 
import GroupDetail from '../components/GroupDetail'; 
import ModalChooseLanguage from '../components/modals/ChooseLanguage'; 
import ModalChooseTopic from '../components/modals/ChooseTopic'; 
import Notifications from '../components/Notifications'; 
import MyGroups from '../components/MyGroups'; 

class Introduce extends Component {

  state = {
    modalVisible: false
  }

  setModalVisible(visible) {
    if( visible == false)
      this.goToTopcis()
    this.setState({modalVisible: visible});
  }

  componentWillMount() {
    this.props.set_initial_screen()
  }

  render() {
    let { App } = this.props
    return (
        <Navigator
          initialRoute={App.get('nav').toJS()}
          renderScene={ this.renderScene.bind(this) } 
          configureScene={this.configureScene}
          navigationBar = {
           <Navigator.NavigationBar
              style = { styles.navigationBar }
              routeMapper = { NavigationBarRouteMapper } />}/>
    )
  }

  configureScene(route, routeStack) {
  /*
    Navigator.SceneConfigs.PushFromRight (default)
    Navigator.SceneConfigs.FloatFromRight
    Navigator.SceneConfigs.FloatFromLeft
    Navigator.SceneConfigs.FloatFromBottom
    Navigator.SceneConfigs.FloatFromBottomAndroid
    Navigator.SceneConfigs.FadeAndroid
    Navigator.SceneConfigs.SwipeFromLeft
    Navigator.SceneConfigs.HorizontalSwipeJump
    Navigator.SceneConfigs.HorizontalSwipeJumpFromRight
    Navigator.SceneConfigs.HorizontalSwipeJumpFromLeft
    Navigator.SceneConfigs.VerticalUpSwipeJump
    Navigator.SceneConfigs.VerticalDownSwipeJump
  */

     switch (route.screen) {
      case "Groups":
        return Navigator.SceneConfigs.FloatFromLeft  
        break 
      case "GroupDetail":
      case "ChooseLanguage":
      case "Notifications":
      case "MyGroups":
      case "ChooseTopic":
      case "Home":
      case "Login":
        return Navigator.SceneConfigs.FloatFromRight
        break 
      default:
        return Navigator.SceneConfigs.FloatFromRight
      }


  }

  renderScene(route,nav) {
    let { header, User, Groups, Languages, Topics, App } = this.props
    switch (route.screen) {
    // switch (App.get('nav').get('screen')) {
      case "Groups":
        return <GroupsPage 
            navigator={nav} 
            Groups={Groups} 
            set_screen={this.props.set_screen} 
            User={User} 
            fetch_groups={this.props.fetch_groups}
            select_group={this.props.select_group}
            select_header_tab={this.props.select_header_tab}
            update_search_term={this.props.update_search_term}
            header={header} /> 
        break 
      case "GroupDetail":
        return <GroupDetail 
            navigator={nav} 
            Groups={Groups} 
            User={User} 
            header={header} />
        break 
      case "ChooseLanguage":
        return <ModalChooseLanguage
            user_select_language={this.props.user_select_language}
            fetch_languages={this.props.fetch_languages}
            Languages={this.props.Languages}
            set_user_language={this.props.index___set_user_language}
            User={this.props.User}
            modalVisible={this.state.modalVisible}
            navigator={nav}
            setModalVisible={this.setModalVisible.bind(this)} />
        break
      case "Notifications":
        return <Notifications 
            navigator={nav} 
            set_screen={this.props.set_screen} 
            user_inative_group={this.props.user_inative_group} 
            User={User} 
            header={header} />
        break 
      case "MyGroups":
        return <MyGroups 
            navigator={nav} 
            User={User} 
            set_screen={this.props.set_screen} 
            header={header} />
        break 
      case "ChooseTopic":
        return <ModalChooseTopic 
            user_select_topic={this.props.user_select_topic}
            fetch_topics={this.props.fetch_topics}
            Topics={Topics}
            User={User}
            modalVisible={this.state.modalVisible}
            navigator={nav}
            set_user_topic={this.props.index___set_user_topic}
            setModalVisible={this.setModalVisible.bind(this)} />
        break 
      case "Home":
        return <Home 
            navigator={nav}
            Languages={Languages} 
            User={User} 
            App={App} 
            logout={this.props.logout}  
            fetch_languages={this.props.fetch_languages}
            user_select_language={this.props.user_select_language}
            authenticate={this.props.authenticate} 
            show_mobile_menu={this.props.show_mobile_menu} 
            header={header}
          />
        break 
      case "Login":
        return <Login />
        break 
      }
  }
}


var NavigationBarRouteMapper = {
   LeftButton(route, navigator, index, navState) {
      if(route.back > 0) {
         return (
            <TouchableHighlight
               onPress = {() => { if (index > 0) { navigator.pop() } }}>
               <Text style={ styles.leftButton }>
                  Back
               </Text>
            </TouchableHighlight>
         )
      }
      
      return null
   },
   RightButton(route, navigator, index, navState) {
      if (route.openMenu) return (
        <TouchableHighlight
              onPress = { () => route.openMenu() }>
            <Text style = { styles.rightButton }  >
               { route.rightText}
            </Text> 
        </TouchableHighlight>
      )
   },
   Title(route, navigator, index, navState) {
    console.log('Title',index) 
      return (
         <Text style = { styles.title }>
            {route.title}
         </Text>
      )
   }
}

const styles = StyleSheet.create({
   navigationBar: {
      backgroundColor: 'blue',
   },
   leftButton: {
      color: '#ffffff',
      margin: 10,
      fontSize: 17,
   },
   title: {
      paddingVertical: 10,
      color: '#ffffff',
      justifyContent: 'center',
      fontSize: 18
   },
   rightButton: {
      color: 'white',
      margin: 10,
      fontSize: 16
   }
})


function mapStateToProps(state) {
  return {
    header: state.header
    , User: state.User
    , Groups: state.Groups
    , Topics: state.Topics
    , App: state.App
    , Languages: state.Languages
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign(Actions
    , AuthenticattionActions
    , LanguagesActions
    , UserActions
    , TopicsActions
    , GroupActions) , dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(Introduce)