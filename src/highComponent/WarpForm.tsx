import React, { Component } from 'react'
import {WrappedFormUtils} from 'antd/lib/form/Form';
import { Form, Icon, Input, Button } from 'antd';
interface Props {
  form: WrappedFormUtils
}
interface State { }

export default function WarpFormFn<T extends Props>(FormComponent: React.ComponentType<T>, componentName: string = 'default_name') {
  class WarpForm extends Component<Props, State> {
    constructor(props: Props) {
      super(props)
    }
    handleSubmit=(e: { preventDefault: () => void })=>{
      e.preventDefault()
      this.props.form.validateFields((err: any, values: any) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    }
    render () {
      return (
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <FormComponent {...this.props as T}/>
        </Form>
      )
    }
  }
  return Form.create({ name: componentName })(WarpForm);
}