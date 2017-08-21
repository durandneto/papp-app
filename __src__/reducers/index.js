import { combineReducers } from 'redux'
import Header from './header'
import User from './User'
import Groups from './Groups'
import Languages from './Languages'
import Topics from './Topics'
import App from './App'

const reducer = combineReducers({
  Header
  , Topics
  , Languages
  , Groups
  , User
  , App
})

export default reducer 