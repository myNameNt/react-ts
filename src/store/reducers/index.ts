import {combineReducers} from 'redux'
import {ModifyAction, TestActions} from '../actions/index'
import {INCREMENT,DECREMENT,CHANGE_TEXT} from '../types/const'

interface counterDate {
  count: number
}
const initState: counterDate  = {
  count: 0
}
const testInitState = {
  text: '我是默认值哟~~~'
}
const counter = (state = initState, action: ModifyAction): counterDate  => {
  switch (action.type) {
    case INCREMENT:
      return {count: state.count +1}
    case DECREMENT:
      return {count: state.count - 1}
    default:
      return state
  }
}

const test = (state = testInitState, action: TestActions) =>{
  switch (action.type) {
    case CHANGE_TEXT:
      return {text:  action.text}
    default: 
      return state
  }
}
 
const reducers = combineReducers({
  counter,
  test
})

export default reducers