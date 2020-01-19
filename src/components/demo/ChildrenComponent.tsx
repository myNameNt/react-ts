import React from 'react'

interface ParentProps {
  children: any
  text: string
}

interface ParentState {

}

class Parent extends React.Component<ParentProps, ParentState> {
  constructor(props: ParentProps) {
    super(props)
  }
  render() {
    const { text } = this.props
    return (
      <div>
        <p>下面是children</p>
        {this.props.children(text)}
      </div>
    )
  }
}

export default Parent