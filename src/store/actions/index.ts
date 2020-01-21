import {INCREMENT, INCREMENT_TYPE,DECREMENT,DECREMENT_TYPE} from '../types/const'
import {CHANGE_TEXT,CHANGE_TEXT_TYPE} from '../types/const'

export interface IINCREMENTAction {
  type: INCREMENT_TYPE
}
export interface IDECREMENTAction {
  type: DECREMENT_TYPE
}

export type ModifyAction = IINCREMENTAction | IDECREMENTAction

export const increment = (): IINCREMENTAction => ({
  type: INCREMENT
})

export const decrement = (): IDECREMENTAction => ({
  type: DECREMENT
})

export interface ICHANGE_TEXTAction {
  type: CHANGE_TEXT_TYPE
  text: string
}
export type TestActions = ICHANGE_TEXTAction
export const change_text = (text: string): ICHANGE_TEXTAction => ({
  type: CHANGE_TEXT,
  text
})