import React from 'react'
import './LayoutCss.css'

interface LayoutCssProps {}
interface LayoutCssState {}
export default class LayoutCss extends React.Component<LayoutCssProps,LayoutCssState> {
  constructor(props:LayoutCssProps){
    super(props)
    this.state = {}
  }
  render(){

    return (
      <div className={'layout'}>
         <div className="item">1</div>
         <div className="item">2</div>
         <div className="item">3</div>
         <div className="item">4</div>
         <div className="item">5</div>
      </div>
    )
  }
}