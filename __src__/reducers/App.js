import { SET_SCREEN } from '../actions'
import Immutable from 'immutable'


let defaultState = Immutable.fromJS({ nav : { screen: 'Groups', title: "Groups"} })

function appReducer (state = defaultState, action) {
  switch ( action.type ) { 
  	case SET_SCREEN:   
		return state.merge({ nav: { screen: action.screen, title: action.title } })
		 // eslint-disable-next-line
		break
	default: 
		return state
	}
}

export default appReducer