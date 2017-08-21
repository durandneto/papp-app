import { CALL_API, CHAIN_API } from './../middleware/api'
import { browserHistory } from 'react-router'

export const SELECT_GROUP = Symbol('SELECT_GROUP')
export const SEARCHED = Symbol('SEARCHED')
export const SEARCHED_COUNT = Symbol('SEARCHED_COUNT')
export const SEARCHED_MEMBERS = Symbol('SEARCHED_MEMBERS')
export const SEARCHED_MEMBERS_COUNT = Symbol('SEARCHED_MEMBERS_COUNT')
export const SET_PAGE = Symbol('SET_PAGE')
export const SET_MEMBER_PAGE_TYPE = Symbol('SET_MEMBER_PAGE_TYPE')
export const CREATTING_NEW = Symbol('CREATTING_NEW')
export const NEW = Symbol('NEW')
export const CREATED_NEW = Symbol('CREATED_NEW')
export const CREATED_NEW_ERROR = Symbol('CREATED_NEW_ERROR')
export const CREATED_NEW_MEMBER = Symbol('CREATED_NEW_MEMBER')
export const CREATED_NEW_MEMBER_ERROR = Symbol('CREATED_NEW_MEMBER_ERROR')
export const UPDATED_ERROR = Symbol('UPDATED_ERROR')
export const SET_PAGE_TYPE = Symbol('SET_PAGE_TYPE')
export const UPDATED = Symbol('UPDATED')
export const DELETED = Symbol('DELETED')
export const UPDATE_SEARCH_TERM = Symbol('UPDATE_SEARCH_TERM')
export const DELETED_ERROR = Symbol('DELETED_ERROR')
export const NEW_MEMBER = Symbol('NEW_MEMBER')
export const UPDATE_MEMBER_SEARCH_TERM = Symbol('UPDATE_MEMBER_SEARCH_TERM')
export const SELECT_HEADER_TAB = Symbol('SELECT_HEADER_TAB')
export const SEARCHED_SELECTED_GROUP_MEMBERS_COUNT = Symbol('SEARCHED_SELECTED_GROUP_MEMBERS_COUNT')
export const SEARCHED_SELECTED_GROUP_STATE = Symbol('SEARCHED_SELECTED_GROUP_STATE')



export function joinGroup() {
  return (dispatch, getState) => {
    let selectedRow = getState().ListUserGroups.get('selectedRow')
    let path = getState().ListUserGroups.get('path')
    browserHistory.push(path+'/'+selectedRow.get('id')+'/join')
  }
}
export function set_page(page, allowNavigation){
  return (dispatch) => {
      dispatch({
      type:SET_PAGE
      , page
      , allowNavigation
    })
  }
}
export function select_header_tab(tab){
  return (dispatch) => {
      dispatch({
      type: SELECT_HEADER_TAB
      , tab
    })
  }
}
export function fetch_groups_members_count() {
  
  return (dispatch, getState) => {

  let Group = getState().Groups.get('selectedRow')
  let User = getState().User
 
    dispatch(
      {
        [CHAIN_API]: [
          ()=> {
            return {
              [CALL_API]: {
                method: 'get',
                type : 'external',
                path: '/user/group/'+Group.get('id')+'/members/count',
                header: { 'api-key-papp': Group.get('id') },
                successType: SEARCHED_SELECTED_GROUP_MEMBERS_COUNT
              }
            }
          },
            (response) => {
              console.log('response coint member', response)
            }
        ]
      }
    )
  }
}
export function fetch_groups_state() {
  
  return (dispatch, getState) => {

  let Group = getState().Groups.get('selectedRow')
  let User = getState().User

    if (User.get('isLogged')) {
      dispatch(
        {
          [CHAIN_API]: [
            ()=> {
              return {
                [CALL_API]: {
                  method: 'get',
                  type : 'external',
                  path: '/user/group/'+Group.get('id')+'/state',
                  header: { 'api-key-papp': User.get('id') },
                  successType: SEARCHED_SELECTED_GROUP_STATE
                }
              }
            },
              (response) => {
                console.log('response coint member', response)
              }
          ]
        }
      )
    } else {
      return {}
    }
  }
}
export function fetch_groups_members(action) {
  
  return (dispatch, getState) => {

  let userJoinedGroup = getState().ListUserJoinedGroups
  let group = getState().ListUserGroups.get('selectedRow')

  let limit = userJoinedGroup.get('paginator').get('limitPerPage')
  let total = userJoinedGroup.get('paginator').get('totalPage')
  let page = userJoinedGroup.get('paginator').get('currentPage')
  let term = userJoinedGroup.get('searchTerm')
  let search = true
  let allowNavigation = {
      next : true
      , prev : false
    }

  switch(true){
    case action === 'next':
      allowNavigation.prev = (page < total)
      page ++
      allowNavigation.next = (page < total)
      search = (page <= total)
      break
    case action === 'prev':
      page --
      allowNavigation.next = ( page <= total )
      allowNavigation.prev = ( page > 1 )
      search = (page >= 1)
      break
      // eslint-disable-next-line
      search = (page !== total)
    case action === 'first':

      page = 1
      search = (page !== total)
      if ( search ) {
        allowNavigation.prev = false
        allowNavigation.next = true
      } else{
        allowNavigation.prev = false
        allowNavigation.next = false
      }

      break
    case action === 'last':
      search = (page !== total)
      if ( search ) {
        page = total
        allowNavigation.prev = true
        allowNavigation.next = false
      } else{
        allowNavigation.prev = false
        allowNavigation.next = false
      }

      break
    case action === 'search':
      page = 1
      break
    default:
  }

    if(search){
      dispatch(
        {
          [CHAIN_API]: [
            ()=> {
              return {
                [CALL_API]: {
                  method: 'get',
                  type : 'external',
                  path: '/user/group/'+group.get('id')+'/members?limit=' + limit
                  + '&page='+ page
                  + '&name='+ term,
                  successType: SEARCHED_MEMBERS
                }
              }
            },
              (response) => {

                return {
                  [CALL_API]: {
                    method: 'get',
                    type : 'external', 
                    path: '/user/group/'+group.get('id')+'/members/count?name='+term,
                    successType: SEARCHED_MEMBERS_COUNT,
                    
                  }
                }
              }
          ]
        }
      )
      dispatch(set_page(page, allowNavigation))
    } else{
      dispatch(set_page(1, allowNavigation))
    }
  }
}
export function fetch_groups(action) {
console.log('---------------  fetch_groups')
  return (dispatch, getState) => {

  let Groups = getState().Groups
  let User = getState().User

  let limit = Groups.get('paginator').get('limitPerPage')
  let total = Groups.get('paginator').get('totalPage')
  let page = Groups.get('paginator').get('currentPage')
  let term = Groups.get('searchTerm')
  let search = true

  let allowNavigation = {
      next : true
      , prev : false
    }

  switch(true){
    case action === 'next':
      allowNavigation.prev = (page < total)
      page ++
      allowNavigation.next = (page < total)
      search = (page <= total)
      break
    case action === 'prev':
      page --
      allowNavigation.next = ( page <= total )
      allowNavigation.prev = ( page > 1 )
      search = (page >= 1)
      break
      // eslint-disable-next-line
      search = (page !== total)
    case action === 'first':

      page = 1
      search = (page !== total)
      if ( search ) {
        allowNavigation.prev = false
        allowNavigation.next = true
      } else{
        allowNavigation.prev = false
        allowNavigation.next = false
      }

      break
    case action === 'last':
      search = (page !== total)
      if ( search ) {
        page = total
        allowNavigation.prev = true
        allowNavigation.next = false
      } else{
        allowNavigation.prev = false
        allowNavigation.next = false
      }

      break
    case action === 'search':
      page = 1
      break
    default:
  }


    if(search){
      dispatch(
        {
          [CHAIN_API]: [
            ()=> {
              return {
                [CALL_API]: {
                  method: 'get',
                  type : 'external',
                  path: '/user/group/search?limit=' + limit
                  + '&page='+ page
                  + '&name='+ term,
                   header: { 'api-key-papp': User.get('id') }
                  , successType: SEARCHED
                }
              }
            },
              (response) => {

                return {
                  [CALL_API]: {
                    method: 'get',
                    type : 'external', 
                    path: '/user/group/count?name='+term,
                    successType: SEARCHED_COUNT,
                    
                  }
                }
              }
          ]
        }
      )
      dispatch(set_page(page, allowNavigation))
    } else{
      dispatch(set_page(1, allowNavigation))
    }
  }
}
export function is_saving(isSaving){
   return  {
      type: CREATTING_NEW
      , isSaving
    }
}
export function select_group(selectedRow){
  return (dispatch) =>{
    dispatch({
      type: SELECT_GROUP
      , selectedRow
    })   
    dispatch(fetch_groups_members_count())   
    dispatch(fetch_groups_state())   
  }
}
export function update_member_search_term(term){
   return  {
      type: UPDATE_MEMBER_SEARCH_TERM
      , term
    }
}
export function update_search_term(term){
   return  {
      type: UPDATE_SEARCH_TERM
      , term
    }
}
export function new_member_row(newRow){
  console.log(newRow)
   return  {
      type: NEW_MEMBER
      , newRow
    }
}
export function new_row(newRow){
  console.log(newRow)
   return  {
      type: NEW
      , newRow
    }
}
export function set_member_page_type(param){
   return  {
      type: SET_MEMBER_PAGE_TYPE
      , param
    }
}
export function set_page_type(param){
   return  {
      type: SET_PAGE_TYPE
      , param
    }
}
export function join_new_member(userGroup) {
  return (dispatch, getState) => {
    let group = getState().ListUserGroups.get('selectedRow')
    let newRow = getState().ListUserJoinedGroups.get('newRow')
    dispatch(is_saving(true))
    dispatch({
      [CHAIN_API]: [
          ()=> {
            return {
              [CALL_API]: {
                method: 'post',
                type : 'external',
                body: newRow.toObject(),
                path: '/user/group/' + group.get('id') + '/join',
                successType: CREATED_NEW_MEMBER,
                errorType: CREATED_NEW_MEMBER_ERROR
              }
            }
          }, (response) => {
            console.log(response)
          }
        ]
    })
  }
}
export function create_new(userGroup) {
  return (dispatch, getState) => {
    console.log(getState())
    let newRow = getState().ListUserGroups.get('newRow')
    dispatch(is_saving(true))
    dispatch({
      [CHAIN_API]: [
          ()=> {
            return {
              [CALL_API]: {
                method: 'post',
                type : 'external',
                body: newRow.toObject(),
                path: '/user/group/save',
                successType: CREATED_NEW,
                errorType: CREATED_NEW_ERROR
              }
            }
          }, (response) => {
            console.log(response)
          }
        ]
    })
  }
}
export function remove_member(userGroup) {
  return (dispatch, getState) => {
    let selectedRow = getState().ListUserGroups.get('selectedRow')
    /*
dispatch(is_saving(true))
    dispatch({
      [CHAIN_API]: [
          ()=> {
            return {
              [CALL_API]: {
                method: 'delete',
                type : 'external',
                path: '/user/group/remove/'+selectedRow.get('id'),
                header: { 'api-key-papp': selectedRow.get('id')},
                successType: DELETED,
                errorType: DELETED_ERROR
              }
            }
          }, (response) => {
            window.location.href = '/groups'
          }
        ]
    })

    */
  }
}
export function remove(userGroup) {
  return (dispatch, getState) => {
    let selectedRow = getState().ListUserGroups.get('selectedRow')
    dispatch(is_saving(true))
    dispatch({
      [CHAIN_API]: [
          ()=> {
            return {
              [CALL_API]: {
                method: 'delete',
                type : 'external',
                path: '/user/group/remove/'+selectedRow.get('id'),
                header: { 'api-key-papp': selectedRow.get('id')},
                successType: DELETED,
                errorType: DELETED_ERROR
              }
            }
          }, (response) => {
            window.location.href = '/groups'
          }
        ]
    })
  }
}
export function update(userGroup) {
  return (dispatch, getState) => {
    let selectedRow = getState().ListUserGroups.get('selectedRow')
    dispatch(is_saving(true))
    dispatch({
      [CHAIN_API]: [
          ()=> {
            return {
              [CALL_API]: {
                method: 'put',
                type : 'external',
                body: {
                  id: selectedRow.get('id')
                  , name: selectedRow.get('name')
                  , user: selectedRow.get('user').get('id')
                  , platform: selectedRow.get('platform').get('id')
                  , language: selectedRow.get('language').get('id')
                },
                path: '/user/group/update',
                header: { 'api-key-papp': selectedRow.get('id')},
                successType: UPDATED,
                errorType: UPDATED_ERROR
              }
            }
          }, (response) => {
            console.log(response)
          }
        ]
    })
  }
}