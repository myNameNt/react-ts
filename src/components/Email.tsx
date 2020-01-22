import * as React from 'react';
import {WrappedFormUtils} from 'antd/lib/form/Form';
import {Form,Input,Icon} from 'antd'
import WarpForm from '../highComponent/WarpForm'

interface Props {
  form: WrappedFormUtils
}
interface State {}
class Email extends React.Component<Props,State> {
  constructor (props: Props) {
    super(props)
  }
  render() {
    const { getFieldDecorator,isFieldTouched,getFieldError } = this.props.form
    const usernameError = isFieldTouched('username') && getFieldError('username')
    const passwordError = isFieldTouched('password') && getFieldError('password')
    return (
      <>
        <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
      </>
    )
  }
}

export default WarpForm(Email)