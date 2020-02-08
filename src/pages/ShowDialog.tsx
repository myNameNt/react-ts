import React from 'react'

import {Button} from 'antd'
import Dialog from '../components/Dialog'
import './ShowDialogCss.css'
interface ShowDialogProps {}
interface ShowDialogState {
    ifVisibleDialog: boolean
}

function FreeChild () {
    return (
        <div>
            <p>自定义dialog内容</p>
        </div>
    )
}

class ShowDialog extends React.PureComponent<ShowDialogProps,ShowDialogState> {
 constructor (props: ShowDialogProps) {
     super(props)
     this.state = {
         ifVisibleDialog: true
     }
     this.onCloseDialog = this.onCloseDialog.bind(this)
 }
 showDialogFn () {
     this.setState((preState)=>{
         const { ifVisibleDialog } = preState
         return {
             ifVisibleDialog: !ifVisibleDialog
         }
     })
 }
 onCloseDialog(){
     this.setState({
         ifVisibleDialog: true
     })
 }
 render () {
     const { ifVisibleDialog } = this.state
     return (
         <div className={'show_dialog'}>
             <h3 className={'show_dialog_title'}>这里展示的是dialog组件</h3>
             <Button type={'primary'} onClick={() => this.showDialogFn()} >点击显示dialog</Button>
             <br/>
             <Dialog visible={ifVisibleDialog} onClose={this.onCloseDialog} >
                 <FreeChild/>
             </Dialog>
         </div>
     )
 }
}

export default ShowDialog