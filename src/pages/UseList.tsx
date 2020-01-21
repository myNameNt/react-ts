import React, { Component } from 'react';
import { List, Icon, Avatar } from 'antd'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {getUseList} from '../store/actions/useListActions'
import {StoreState} from '../store/types/index'
import { UseItem } from '../store/types/const';
interface Props {
  list: [UseItem];
  onGetUseList: ()=> any
}
interface State { }

class UseList extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }
  componentDidMount() {
    this.props.onGetUseList()
  }
  render() {
    const {list} = this.props
    return (
      <div>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 5,
          }}
          dataSource={list}
          footer={
            <div>
              <b>ant design</b> footer part
            </div>
          }
          renderItem={(item,index) => (
            <List.Item
              key={index}
            >
              {item.name}---{index}
            </List.Item>
          )}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: StoreState): {list: [UseItem]} => {
  return {
    list: state.useList.list
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onGetUseList: async ()=> dispatch(await getUseList())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(UseList)