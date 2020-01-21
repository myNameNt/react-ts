import {GET_USELIST,GET_USELIST_TYPE, UseItem} from '../types/const'

export interface GET_USE_LIST_ACTION {
  type: string;
  useList: [UseItem] | []
}
export const getUseList = async () => {
  let actionDate: GET_USE_LIST_ACTION = {
    type: GET_USELIST,
    useList: []
  }
  const myPromise = new Promise<[UseItem]>((resolve, reject): any => {
    setTimeout(() => {
      let useList: [UseItem] | [] = [{name: '默认',age: 0,sex: 0}]
      for (let i = 0; i< 20; i++) {
        const item: UseItem = {
          name: `大魔王呀！${i}`,
          age: 500,
          sex: 0
        }
        useList.push(item)
      }
      resolve(useList)
    },2000)
  })
  const useList = await myPromise.then((useList: [UseItem]) => {
    return useList
  })
  actionDate.useList = useList
  return actionDate
}