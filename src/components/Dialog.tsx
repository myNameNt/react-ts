import React from 'react'
import ReactDOM from 'react-dom'
import {Button} from 'antd'
import './DialogCss.css'
interface DialogProps {
    visible?: boolean;
    onClose: Function
}
interface DialogState {
    visible: boolean
}

class Dialog extends React.PureComponent<DialogProps,DialogState> {
    constructor(props: DialogProps){
        super(props)
        this.state = {
            visible: false
        }
    }
    componentDidMount () {
        const {visible} = this.props
        if (typeof visible === 'boolean') {
            this.setState({
                visible
            })
        } else {
            this.setState({
                visible: true
            })
        }
    }
    componentWillReceiveProps(nextProps: DialogProps) {
        const { visible = null } = nextProps
        if (typeof visible === 'boolean') {
            const { visible: oldVisible } = this.props
            if (visible === oldVisible) {
                return
            } else {
            this.setState({
                visible
            })
            }
        }
    }
    onCloseDialog () {
        this.props.onClose()
    }
    renderDialog () {
        return (
            <div className={'free_style_dialog'}>
                <div className={'free_style_dialog_content'}>
                    <p>我是一个对话框~</p>
                    {this.props.children}
                    <br />
                    <Button type="primary" onClick={() => this.onCloseDialog()} >点击关闭对话框</Button>
                </div>
            </div>
        )
    }
    render () {
        const { visible } = this.state
        if (visible) return null
        return ReactDOM.createPortal(
            this.renderDialog(),
            document.querySelector('#dialog-container') as HTMLElement
        )
    }
}

export default Dialog