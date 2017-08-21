import { CALL_API, CHAIN_API } from './../middleware/api'
import { browserHistory } from 'react-router'

/* User */
export const USER_SELECT_LANGUAGE = Symbol('USER_SELECT_LANGUAGE') 
export const USER_INATIVE_GROUP = Symbol('USER_INATIVE_GROUP') 
export const USER_SELECT_TOPIC = Symbol('USER_SELECT_TOPIC') 

export function user_select_language(language){
 	return (dispatch) =>{
		dispatch({
			type: USER_SELECT_LANGUAGE
			, language
		})   
 	}
}
export function user_select_topic(topic){
 	return (dispatch) =>{
		dispatch({
			type: USER_SELECT_TOPIC
			, topic
		})   
 	}
}
export function user_inative_group(index){
 	return {
		type: USER_INATIVE_GROUP
		, index
 	}
}