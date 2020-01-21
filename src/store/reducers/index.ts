import {combineReducers} from 'redux'
import {ModifyAction, TestActions} from '../actions/index'
import {INCREMENT,DECREMENT,CHANGE_TEXT, UseItem, GET_USELIST} from '../types/const'
import {GET_USE_LIST_ACTION} from '../actions/useListActions'

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

// test reducer
const test = (state = testInitState, action: TestActions) =>{
  switch (action.type) {
    case CHANGE_TEXT:
      return {text:  action.text}
    default: 
      return state
  }
}
interface UseListInterface {
  list: [UseItem] | []
}
const initUseList: UseListInterface = {
  list: []
}
// useList reducer
const useList = (state = initUseList, action: GET_USE_LIST_ACTION) => {
  switch (action.type) {
    case GET_USELIST:
      return { list: [...state.list, ...action.useList]}
    default:
      return {list: [...state.list]}
  }
}

const reducers = combineReducers({
  counter,
  test,
  useList
})

export default reducers