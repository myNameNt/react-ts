import React, { Component } from 'react';
import { RouteComponentProps, Link, Route } from 'react-router-dom'
import DetailItemPage from './DetailItemPage'

export default class DetailPages extends Component<RouteComponentProps> {
  render() {
    const { path } = this.props.match
    return (
      <div>
        <div>
          <Link to={`${path}/888`} >888</Link>
        </div>
        <div>
          <Link to={`${path}/999`} >999</Link>
        </div>
        <div>
          <Link to={`${path}/666`} >666</Link>
        </div>
        <div>
          <Link to={`${path}/222`} >222</Link>
        </div>
        <Route path={`${path}/:id`} component={DetailItemPage} />
      </div>
    )
  }
}