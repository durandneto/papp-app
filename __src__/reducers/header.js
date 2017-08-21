import { SHOW_MOBILE_MENU, SHOW_MODAL_LOGIN } from '../actions'
import Immutable from 'immutable'

let defaultState = Immutable.fromJS({ 
	showMobileMenu :true
	, title: 'Durand' 
	, showModalLogin: false
	})

function appReducer (state = defaultState, action) {
  switch ( action.type ) { 
  	case SHOW_MOBILE_MENU:   
		return state.merge({showMobileMenu : action.show, title: 'Durand Neto'})
		 // eslint-disable-next-line
		break
  	case SHOW_MODAL_LOGIN:   
		return state.mergeDeep({
			showModalLogin: action.show,
		})
		 // eslint-disable-next-line
		break
	default: 
		return state
	}
}

export default appReducer