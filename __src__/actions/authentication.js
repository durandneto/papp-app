import { CALL_API, CHAIN_API } from './../middleware/api'
import { browserHistory } from 'react-router'
import { AsyncStorage } from 'react-native';

/* User */
export const AUTHENTICATED = Symbol('AUTHENTICATED') 
export const SET_USER_ADMIN = Symbol('SET_USER_ADMIN') 
export const USER_AUTHENTICATED_ERROR = Symbol('USER_AUTHENTICATED_ERROR') 
export const LOGOUT = Symbol('LOGOUT') 

export function set_user_admin(user){
 return  {
    type: SET_USER_ADMIN
    , user
  }
}
export function logout(user){
return (dispatch, getState) => {
    let userSession = {}
    AsyncStorage.getItem('USER_SESSION', (err, result) => {
      if (result === null) {
        userSession.data = null
      } else {
        userSession = JSON.parse(result)
        userSession.data = null
      }
      AsyncStorage.setItem('USER_SESSION', JSON.stringify(userSession),  () => {
        dispatch({
          type: LOGOUT
        })
      })
    })
  }                

}
export function authenticate(user){
  return (dispatch, getState) => {

    dispatch({
      [CHAIN_API]: [
          ()=> {
            return {
              [CALL_API]: {
                method: 'post',
                type: 'external',
                body: user,
                path: '/user/authenticate',
                successType: AUTHENTICATED,
                errorType: USER_AUTHENTICATED_ERROR
              }
            }
          }, (response) => {
            let userSession = {}
            AsyncStorage.getItem('USER_SESSION', (err, result) => {
              if (result === null) {
                userSession.data = response
              } else {
                userSession = JSON.parse(result)
                userSession.data = response
              }
              AsyncStorage.setItem('USER_SESSION', JSON.stringify(userSession))
            })
          }
        ]
    })
  }
}