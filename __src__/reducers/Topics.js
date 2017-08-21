import { HIDE_MESSAGE } from '../actions'

import { 
	SEARCHED
	, SET_PAGE
	, CREATTING_NEW
	, NEW
	, CREATED_NEW
	, UPDATED
	, SELECT
	, CREATED_NEW_ERROR
	, SET_PAGE_TYPE
	, UPDATE_SEARCH_TERM
	, SEARCHED_COUNT } from '../actions/topics'

import Immutable from 'immutable'

let defaultState = Immutable.fromJS({
	path: '/topics'
	, data: {
		rows: []
		, columns: []
	}
	, searchTerm : ''
	, isLoadded: false
	, visualizationType: 'view'
	, isSaving: false
	, title: {
		edit: { title: 'Edit Topic' }
		, remove: { title: 'Remove Topic?' }
		, view: { title: 'Topic Detail' }
		, new: { title: 'New Topic' }
	}
	, paginator: {
		count: 0
		, totalPage: 0
		, currentPage: 1
		, limitPerPage: 10
		, allowNavigation: {
			next : true
			, prev : true
		}
	}
	, newRow: {
		name: null
		, color: null
		, user: {
			id: null
		}
	}
	, lastRow: {
		name: null
		, id: -1
		, color: null
		, user: {
			id: null
		}
	}
	, selectedRow: {
		name: null
		, id: -1
		, color: null
		, user: {
			id: null
		}
	}
	, status: {
		type: null
		, message: null
	}
})

function appReducer (state = defaultState, action) {
  switch ( action.type ) { 
  	case SET_PAGE:
		return state.mergeDeep({
			paginator: {
					currentPage: action.page
					, allowNavigation: action.allowNavigation
				}
			})
		 // eslint-disable-next-line
		break
	case CREATTING_NEW:
		return state.mergeDeep({isSaving: true})
		// eslint-disable-next-line
		break
	case SET_PAGE_TYPE:
		return state.merge({visualizationType: action.param})
		// eslint-disable-next-line
		break
	case UPDATED:
		return state.merge({visualizationType: 'view'})
		// eslint-disable-next-line
		break
	case NEW:
		console.log(action.newRow)
		return state.merge({newRow: action.newRow})
		// eslint-disable-next-line
		break
	case SELECT:
		return state.merge({selectedRow: action.selectedRow})
		// eslint-disable-next-line
		break
	case UPDATE_SEARCH_TERM:
		return state.merge({searchTerm: action.term})
		// eslint-disable-next-line
		break
	case CREATED_NEW:

		let keys = Object.keys(state.get('newRow').toObject())
		let resetRow = {}

		keys.map((key)=>{
			resetRow[key] = null
		})
		resetRow.user = {id:null}

		return state.merge({
			isSaving: false
			, status: { type: action.status, message: null }
			, newRow: resetRow
			, lastRow: action.response.row
		})
		// eslint-disable-next-line
		break
	case CREATED_NEW_ERROR:
		return state.merge({
			isSaving: false,
			status: {
				type: action.status
				, message: action.message
			} 
		})
		//eslint-disable-next-line
		break
	case HIDE_MESSAGE:
		return state.merge({
			status: {
				type: null
				, message: null
			} 
		})
		//eslint-disable-next-line
		break
  	case SEARCHED:
  		let columns = null
  		let rows = null
  		if ( action.response.rows.length > 0 ){
  			columns = Object.keys(action.response.rows[0])
  			rows = action.response.rows
  		}
		return state.merge({
			data: {
				columns: columns
				, rows: rows 
				}
				, isLoadded : true
			})
		 // eslint-disable-next-line
		break
  	case SEARCHED_COUNT:
		return state.mergeDeep({
			paginator:{
				count: action.response.count
				, totalPage: Math.ceil(action.response.count/state.get('paginator').get('limitPerPage'))
			}
		})
		 // eslint-disable-next-line
		break
	default: 
		return state
	}
}

export default appReducer