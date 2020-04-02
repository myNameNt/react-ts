import React from 'react'
import TableHead from '../components/TableHead'
import ChildrenComponent from '../components/demo/ChildrenComponent'
import { Link, RouteComponentProps, Route } from 'react-router-dom'

import Xi from '../components/demo/Xi'
interface HelloProps {
  name: string
}
interface Props extends RouteComponentProps<HelloProps> {}

interface HelloState {
  listArray: Array<any>;
  text: string
}
interface itemProps {
  text: string
}
const Item = (props: itemProps) => {
  return (
    <li>
      <p>{props.text}</p>
    </li>
  )
}
class Hello extends React.Component<Props, HelloState> {
  timer: NodeJS.Timer | null = null // 这是一个坑啊！！！
  myRef: React.RefObject<HTMLUListElement> = React.createRef()
  constructor(props: Props) {
    super(props)
    this.state = {
      listArray: [],
      text: ''
    }
  }
  componentDidMount() {
    const getList = new Promise((resolve, _reject) => {
      this.timer = setTimeout(() => {
        let list: object[] = [{ text: '哈哈', }, { text: '呵呵', }, { text: '嘿嘿', }, { text: '呵呵', }, { text: '嘿嘿', }, { text: '呵呵', }, { text: '嘿嘿', }, { text: '呵呵', }, { text: '嘿嘿', }]
        resolve(list)
      }, 2000)
    })
    getList.then((res: any) => {
      this.setState((preState) => {
        const list = [...preState.listArray, ...res]
        return {
          listArray: list
        }
      })
      this.onMarkItem()
    })
  }
  componentWillUnmount() {
    window.clearInterval(Number(this.timer))
  }
  getSnapshotBeforeUpdate() {
    return this.myRef.current?.scrollHeight
  }
  componentDidUpdate(_preProps: Props, _preState: HelloState, preScrollHeight: number) {
    const scrollTop: number = this.myRef.current?.scrollTop || 0
    const scrollHeight: number = this.myRef.current?.scrollHeight || 0
    if (scrollTop < 5) return
    if (this.myRef.current instanceof Object) {
      this.myRef.current.scrollTop = scrollTop + (scrollHeight - preScrollHeight)
    }
  }
  onMarkItem() {
    this.timer = setInterval(() => {
      const nowTime = new Date().getTime()
      const item = { text: nowTime }
      this.setState((preState: HelloState) => {
        let { listArray } = preState
        listArray.unshift(item)
        return {
          listArray: listArray
        }
      })
    }, 1000)
  }
  onList() {
    const { listArray } = this.state
    return listArray.map((item, index) => {
      return <Item key={index} text={item.text} />
    })
  }
  onChangeChildrenText(event: React.ChangeEvent<HTMLInputElement>) {
    const { value = '' } = event.target || ''
    this.setState({
      text: value
    })
  }
  render() {
    const { listArray } = this.state
    console.log(this.props)
    const {path} = this.props.match
    const goPath = `${path}/xi`
    return (
      <div>
        <Link to={goPath} >go to xi</Link>
        <Route path="/hello/xi" component={Xi} />
        <input type="input" onChange={(event) => this.onChangeChildrenText(event)} />
        <ChildrenComponent text={this.state.text}>
          {(text: string) => {
            return <h1>{text}</h1>
          }}
        </ChildrenComponent>
        <TableHead />
        <ul ref={this.myRef} style={{ height: '200px', width: '100px', overflow: 'auto', border: '1px solid aqua' }}>
          {
            listArray.length > 0 ? this.onList() : '暂无数据'
          }
        </ul>
      </div>
    )
  }
}
// const Hello = (props: Greeting) => {
//   let [count, setCount] = useState(0)
//   let [listArray, setList] = useState([])
//   return (
//     <div>
//       <h1 onClick={()=>{ setCount(count + 1)}}>Hello {props.name}, {count}</h1>
//       <ul>
//       </ul>
//     </div>
//   )
// }

export default Hello