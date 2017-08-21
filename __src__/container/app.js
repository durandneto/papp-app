'use strict';

import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Navigator } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

import * as Actions from './../actions'
import * as AuthenticattionActions from './../actions/authentication'
import * as GroupActions from './../actions/groups'
import * as LanguagesActions from './../actions/languages'
import * as UserActions from './../actions/user'

import Login from '../components/login'; 
import Home from '../components/Home'; 
import GroupsPage from '../components/Groups'; 
import GroupDetail from '../components/GroupDetail'; 
import Notifications from '../components/Notifications'; 
import MyGroups from '../components/MyGroups'; 


class Application extends Component {

  render() {
    return (
      <Navigator
        initialRoute={{screen: 'Home'}}
        renderScene={(route, nav) => {return this.renderScene(route, nav)}}
        configureScene={(route, routeStack) =>
          Navigator.SceneConfigs.HorizontalSwipeJump}
      />
    )
  }

  renderScene(route,nav) {
    let { header, User, Groups, Languages } = this.props
    switch (route.screen) {
      case "Home":
        return <Home 
            navigator={nav}
            Languages={Languages} 
            User={User} 
            logout={this.props.logout}  
            fetch_languages={this.props.fetch_languages}
            user_select_language={this.props.user_select_language}
            authenticate={this.props.authenticate} 
            show_mobile_menu={this.props.show_mobile_menu} 
            header={header}
          />
        break 
      case "Login":
        return <Login navigator={nav} User={User} 
            logout={this.props.logout}  
            authenticate={this.props.authenticate} 
            show_mobile_menu={this.props.show_mobile_menu} 
            header={header} />
        break 
      case "Groups":
        return <GroupsPage 
            navigator={nav} 
            Groups={Groups} 
            User={User} 
            fetch_groups={this.props.fetch_groups}
            select_group={this.props.select_group}
            select_header_tab={this.props.select_header_tab}
            update_search_term={this.props.update_search_term}
            header={header} />
        break 
      case "MyGroups":
        return <MyGroups 
            navigator={nav} 
            User={User} 
            header={header} />
        break 
      case "Notifications":
        return <Notifications 
            user_inative_group={this.props.user_inative_group} 
            navigator={nav} 
            User={User} 
            header={header} />
        break 
      case "GroupDetail":
        return <GroupDetail 
            navigator={nav} 
            Groups={Groups} 
            User={User} 
            header={header} />
        break 
      }
  }
}


function mapStateToProps(state) {
  return {
    header: state.header
    , User: state.User
    , Groups: state.Groups
    , Languages: state.Languages
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign(Actions
    , AuthenticattionActions
    , LanguagesActions
    , UserActions
    , GroupActions) , dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(Application)