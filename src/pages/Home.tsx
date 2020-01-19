import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom'
import DetailPage from './DetailPage'
export default class Home extends Component<any,any> {
  render () {
    const { path } = this.props.match
    return (
      <div>
        <Link to={`${path}detail`} >go to detail list</Link>
        <Route path={`${path}detail`} component={DetailPage} />
      </div>
    )
  }
}