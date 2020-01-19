import React from 'react'
import WidthTimer from '../highComponent/WidthTimer'
interface TableHeadProps{
  time: any;
}
export interface State {
  
}
class TableHead extends React.Component<TableHeadProps, State> {
  constructor(props: TableHeadProps){
    super(props)
  }
  render () {
    return (
      <div>
        <h2>我是标题  <span>{this.props.time.toString()}</span></h2>
      </div>
    )
  }
}

export default WidthTimer(TableHead)