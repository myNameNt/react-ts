import React from 'react'
interface HighComponentState {
  time: Date;
}
interface Props {
  time: Date;
}
export default function WithTimer<T extends Props>(WrappedComponent: React.ComponentType<T>) {
  return class extends React.Component<any, HighComponentState> {
    state = {
      time: new Date()
    }
    timerID: NodeJS.Timer | null = null // 这是一个坑啊！！！
    componentDidMount() {
      this.tick()
    }
    componentWillUnmount() {
      clearInterval(Number(this.timerID))
    }
    tick() {
      setInterval(() => {
        this.setState({
          time: new Date()
        })
      }, 1000)
    }
    render() {
      return (
        <div>
          <p>我是高阶组件带的内容呦~~</p>
          <WrappedComponent time={this.state.time} {...this.props as T} />
        </div>

      )
    }
  }
}