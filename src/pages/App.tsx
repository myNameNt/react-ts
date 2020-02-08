import React, { ReactHTMLElement } from 'react'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {Switch, Route, Link, Redirect} from 'react-router-dom'
import {increment,decrement,change_text} from '../store/actions'
import {StoreState} from '../store/types/index'

import Home from './Home'
import Detail from './DetailPage'
import UseList from './UseList'
import Hello from '../components/demo/Hello'
import StepPage from './StepPage'
import LayoutCss from '../pages/LayoutCss'
import ShowDialog from './ShowDialog'
import NotDefine from '../pages/404'
import './App.css'

interface AppProps {
  count: number
  text: string
  onIncrement: ()=>void
  onDecrement: ()=>void
  onChangeText: (text: string)=> void
}
interface AppState {

}

class App extends React.PureComponent<AppProps, AppState>{
  constructor (props: AppProps) {
    super(props)
  }
  _onChangeText (event: React.ChangeEvent<HTMLInputElement>) {
    const {value} = event.target
    this.props.onChangeText(value)
  }
  render () {
    return (
      <div className={'App'} style={{border: '1px solid black'}}>
        <input type="input" placeholder="请填写文字" onChange={(event)=> this._onChangeText(event)} value={this.props.text} />
        <p>{this.props.text}</p>
        <div>
          <button onClick={this.props.onIncrement}>-</button>
          <span>{this.props.count}</span>
          <button  onClick={this.props.onDecrement}>+</button>
        </div>
        <Link to="/hello">go to hello</Link>
        <br/>
        <Link to="/useList">go to useList</Link>
        <br/>
        <Link to="/step">go to stepPage</Link>
        <br/>
        <Link to="/layout">go to layoutCss</Link>
        <br />
        <Link to="/showDialog">go to showDialog</Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/useList" component={UseList} />
          <Route path="/detail" component={Detail} />
          <Route path="/hello" component={Hello} />
          <Route path="/step" component={StepPage} />
          <Route path="/layout" component={LayoutCss} />
          <Route path="/showDialog" component={ShowDialog} />
          {/* exact 严格匹配 不是一毛一样就不会展示该组件 */}
          <Route path={'/404'} component={NotDefine} />
          <Redirect to={'/404'} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state: StoreState): {count: number, text: string} => {
  return {
    count: state.counter.count,
    text: state.test.text
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onIncrement: ()=> dispatch(increment()),
    onDecrement: ()=> dispatch(decrement()),
    onChangeText: (text: string)=> dispatch(change_text(text))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App as any)