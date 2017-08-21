import { HIDE_MESSAGE } from '../actions'

import { 
	AUTHENTICATED
	, SET_USER_ADMIN
	, USER_AUTHENTICATED_ERROR
  , LOGOUT
 } from '../actions/authentication'

import { 
  USER_SELECT_LANGUAGE
  , USER_SELECT_TOPIC
  , USER_INATIVE_GROUP
 } from '../actions/user'

import { 
  INDEX__RESTORE_USER
 } from '../actions'

import Immutable from 'immutable'
let user = {
	name: undefined
	, email: ''
	, id: undefined
	, authenticationToken: undefined
	, isLogged: false
	, title: {
		error: { title: 'Authentiation failed'}
		, view: { title: 'User Logged' }
		, new: { title: 'Login User' }
	}
	, visualizationType: 'new'
	, status: {
		type: undefined
		, message: undefined
	}
	, languages: []
  , topics: []
  , groups: []
	, notifications: [{
    title:'New groups added to Tech'
    , description:'Check them out'
    , date:'4h ago'
    , isActive: true
    , color: 'primary'
  },{
    title:'You added a public group'
    , description:'The Music Room'
    , date:'Yesterday'
    , isActive: true
    , color: 'second'
  },{
    title:'Check some of the most popular Comedy groups'
    , description:'Check them out'
    , date:'Sep 29th'
    , isActive: true
    , color: 'info'
  },{
    title:'You added a public group'
    , description:'The Music Room'
    , date:'Yesterday'
    , isActive: false
    , color: 'primary'
  }]
}

let defaultState = Immutable.fromJS(user)

function appReducer (state = defaultState, action) {
  switch ( action.type ) { 

    case INDEX__RESTORE_USER: 

    let data = {}

      if ( action.user.topics ){
        data.topics =  action.user.topics
      }
      if ( action.user.languages ){
        data.anguages =  action.user.languages
      }
      if ( action.user.data ){
        
          data.isLogged = true
          data.authenticationToken  = action.user.data.authenticationToken
          data.email = action.user.data.user.email
          data.name = action.user.data.user.name
          data.id = action.user.data.user.id
          data.visualizationType = 'view'
          data.status = {
          type: null
          , message: null
        }
         
      }
      return state.mergeDeep(data)
      break
  	case AUTHENTICATED: 
  		return state.mergeDeep({
  			isLogged: true
  			, authenticationToken : action.response.authenticationToken
  			, email: action.response.user.email
  			, name: action.response.user.name
  			, id: action.response.user.id
  			, visualizationType: 'view'
  			, status: {
				type: null
				, message: null
			} 
  		})
  		break
    case USER_INATIVE_GROUP: 
      let not = state.get('notifications').toJS()
      not[action.index].isActive = false
      return state.mergeDeep({
        notifications: not
      })
      break
  	case SET_USER_ADMIN: 
  		return state.mergeDeep({
  			email: action.user.email
  			, password: action.user.password
  		})
  		break
  	case LOGOUT: 
  		return state.merge(user)
  		break
  	case USER_SELECT_LANGUAGE: 
  		let languages = state.get('languages').toJS()
  		languages.push(action.language.toJS())
  		return state.mergeDeep({
  			languages
  		})
  		break
  	case USER_SELECT_TOPIC: 
  		let topics = state.get('topics').toJS()
  		topics.push(action.topic.toJS())
  		return state.mergeDeep({
  			topics
  		})
  		break
  	case USER_AUTHENTICATED_ERROR: 
  		return state.mergeDeep({
  			visualizationType: 'error'
  			, status: {
				type: action.status
				, message: action.message
			} 
  		})
  		break
	default: 
		return state
	}
}

export default appReducer