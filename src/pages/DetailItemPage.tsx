import React from 'react'
import {RouteComponentProps} from 'react-router-dom'
interface DetailItemPageProps {
  title: string;
}
interface Props extends RouteComponentProps {}
interface DetailItemPageState {
  title: string
}

interface Params {
  id?: number
}

export default class DetailItemPage extends React.PureComponent <Props,DetailItemPageState> {
  constructor(props: Props){
    super(props)
    this.state = {
      title: '默认标题'
    }
  }
  render () {
    const params: Params = this.props.match.params
    const {id = null} = params
    return (
      <div>
       详情id： {id}
      </div>
    )
  }
}