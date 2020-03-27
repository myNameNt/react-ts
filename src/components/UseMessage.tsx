import * as React from 'react';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { Form, Input, Icon, Button } from 'antd'
import WarpForm from '../highComponent/WarpForm'

interface Map<T>{
  [key:string]: T
}

let key: Map<number>['xc']
key = 11
interface Props {
  form: WrappedFormUtils
}
type State = { }
function hasErrors(fieldsError: { [x: string]: unknown; }) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
class UseMessage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }
  render() {
    const { getFieldDecorator, isFieldTouched, getFieldError, getFieldsError } = this.props.form
    const usernameError = isFieldTouched('username') && getFieldError('username')
    const passwordError = isFieldTouched('password') && getFieldError('password')
    return (
      <>
        <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            Log in
          </Button>
        </Form.Item>
      </>
    )
  }
}

export default WarpForm(UseMessage)