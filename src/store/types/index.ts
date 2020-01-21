import {UseItem} from '../types/const'
// 定义 State 结构类型
export interface StoreState {
  counter: {count: number}
  test: {text: string}
  useList: {
    list: [UseItem]
  }
}