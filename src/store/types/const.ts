// 定义增加 state 类型常量
export const INCREMENT = "INCREMENT";
export type INCREMENT_TYPE = typeof INCREMENT;

// 定义减少 state 类型常量
export const DECREMENT = "DECREMENT";
export type DECREMENT_TYPE = typeof DECREMENT;

// 定义改变文字的常量
export const CHANGE_TEXT = 'CHANGE_TEXT'
export type CHANGE_TEXT_TYPE = typeof CHANGE_TEXT


// useList actions 
//get useList 
export interface UseItem {
  name: string;
  age: number;
  sex: number // 0 == 男  1 === 女
}
export const GET_USELIST = 'GET_USELIST'
export type GET_USELIST_TYPE = [UseItem]