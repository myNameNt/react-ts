import React, { Component } from 'react'
import { Steps, Button } from 'antd'
const { Step } = Steps
import './stepPage.css'
interface Props {

}
interface StepInterface {
  content: string;
  title: string;
  id: number
}
interface State {
  steps: StepInterface[];
  current: number
}


class StepPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      steps: [
        {
          content: 'First',
          title: '填写邮箱',
          id: 1
        },
        {
          content: 'Second',
          title: '用户信息',
          id: 2
        },
        {
          content: 'Third',
          title: '完成',
          id: 3
        }
      ],
      current: 0
    }
  }
  next() {
    this.setState((preState) => {
      return {
        current: preState.current + 1
      }
    })
  }
  prev() {
    this.setState((preState) => {
      return {
        current: preState.current - 1
      }
    })
  }
  onShowButton() {
    const { current, steps } = this.state
    const len = steps.length
    if (current === 0) {
      return (
        <Button type="primary" onClick={() => this.next()}> Next </Button>
      )
    } else if (current > 0 && current < len - 1) {
      return (
        <div>
          <Button type="primary" onClick={() => this.next()}> Next </Button>
          <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}> Previous </Button>
        </div>
      )
    } else if (current === len - 1) {
      return (
        <div>
          <Button disabled={true} type="primary" onClick={() => this.next()}> Next </Button>
          <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}> Previous </Button>
        </div>
      )
    }
  }
  render() {
    const { steps, current } = this.state
    return (
      <div className={'step'}>
        <Steps current={current}>
          {
            steps.map((item) => {
              return (
                <Step key={item.id} title={item.title} />
              )
            })
          }
        </Steps>
        {}
        {this.onShowButton()}
      </div>
    )
  }
}

export default StepPage