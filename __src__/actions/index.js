import { CALL_API, CHAIN_API } from './../middleware/api'
import { browserHistory } from 'react-router'
import { AsyncStorage } from 'react-native';

export const SHOW_MOBILE_MENU = Symbol('SHOW_MOBILE_MENU')
export const HIDE_MESSAGE = Symbol('HIDE_MESSAGE') 
export const SET_SCREEN = Symbol('SET_SCREEN') 
export const SHOW_MODAL_LOGIN = Symbol('SHOW_MODAL_LOGIN') 
export const INDEX__RESTORE_USER = Symbol('INDEX__RESTORE_USER') 

export function show_mobile_menu(){

  return (dispatch, getState) => {
    let show = !getState().header.get('showMobileMenu')
    dispatch({
      type: SHOW_MOBILE_MENU
      , show
    })
  }
}
export function index__show_modal_login(){
  return (dispatch, getState) => {
    let show = !getState().Header.get('showModalLogin')
    dispatch({
      type: SHOW_MODAL_LOGIN
      , show
    })
  }
}

export function hide_message(){
  return {
    type: HIDE_MESSAGE
  }
}

export function set_initial_screen(){
  return (dispatch, getState) => {
    let screen = getState().App.get('nav').get('screen')
    let title = getState().App.get('nav').get('title')
    AsyncStorage.getItem('USER_SESSION', (err, user) => {
      if (user === null) {
        screen = 'ChooseLanguage'
         // AsyncStorage.setItem('USER','Durand')
      } else if (JSON.parse(user).languages === undefined) {
          screen = 'ChooseLanguage'
      } else if (JSON.parse(user).topics === undefined) {
          screen = 'ChooseTopic'
      }
      // AsyncStorage.removeItem('USER_SESSION')
      user = JSON.parse(user)

      dispatch({
        type: INDEX__RESTORE_USER
        , user
      })

      dispatch({
        type: SET_SCREEN
        , screen
        , title
      })
    })
  }
}
export function set_screen( screen, title ){
  return {
    type: SET_SCREEN
    , screen
    , title
  }
}


export function index___set_user_language() {
  return (dispatch, getState) => {
    let screen = getState().App.get('nav').get('screen')
    let title = "Set Your Language"
    let User = getState().User
    let userSession = {}
    AsyncStorage.getItem('USER_SESSION', (err, result) => {
      if (result === null) {
        userSession.languages = User.get('languages')
      } else {
        userSession = JSON.parse(result)
        userSession.languages = User.get('languages')
      }
      screen = 'ChooseTopic'
      AsyncStorage.setItem('USER_SESSION', JSON.stringify(userSession),  () => {
        dispatch({
          type: SET_SCREEN
          , screen
          , title
        })
      })
    })
  }
}


export function index___set_user_topic() {
  return (dispatch, getState) => {
    let screen = getState().App.get('nav').get('screen')
    let title = "Set Your Topics"
    let User = getState().User
    let userSession = {}
    AsyncStorage.getItem('USER_SESSION', (err, result) => {
      if (result === null) {
        userSession.topics = User.get('topics')
      } else {
        userSession = JSON.parse(result)
        userSession.topics = User.get('topics')
      }
      screen = 'Groups'
      AsyncStorage.setItem('USER_SESSION', JSON.stringify(userSession),  () => {
        dispatch({
          type: SET_SCREEN
          , screen
          , title
        })
      })
    })
  }
}

