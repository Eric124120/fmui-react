/**
 * Created by huangchengwen on 17/1/3.
 */
import { Component } from 'react'
import Button from '../../../packages/button'
import Modal from '../../../packages/modal'



const reactIcon = require('./react.png')

export default class DemoDodal extends Component {
	constructor(prop) {
		super(prop);

		this.state = {
			alertShow: false,
			confirmShow: false,
			iconConfirmShow: false
		}
	}

	hidden() {
		this.setState({
			alertShow: false,
			confirmShow: false,
			iconConfirmShow: false
		});
	}

	iconConfirm() {
		this.setState({
			show: true,
			icon: reactIcon,
			title: "提示标题",
			content: "内容提示一行，最小高度145,内容提示一行，最小高度145",
			buttons: [{
				text: "辅助操作",
				onClick: function () {
					this.destroy();
					console.log('辅助操作');
				}
			}, {
				text: "主操作",
				onClick: function () {
					this.destroy();
					console.log('主操作');
				}
			}]
		})
	}

	render() {
		const { alertShow, confirmShow, iconConfirmShow } = this.state;

		return(
			<div>
				<div className="fm-flexbox">
					<Button size="large" type="white-orange" onTouchEnd={e => this.setState({alertShow:true})}>alert</Button>
				</div>
				<div className="fm-flexbox">
					<Button size="large" type="white-orange" onTouchEnd={e => this.setState({confirmShow:true})}>confirm</Button>
				</div>
				<div className="fm-flexbox">
					<Button size="large" type="white-orange" onTouchEnd={e => this.setState({iconConfirmShow:true})}>iconConfirm</Button>
				</div>
				<Modal show={alertShow}
				       title='提示标题'
				       content='内容提示两行行，内容提示两行行，内容提示两行行'
				       buttons={[{
					       text: "知道了",
					       onClick:  e => {
						       this.hidden();
						       console.log('知道了');
					       }
				       }]}/>

				<Modal show={confirmShow}
				       title='提示标题'
				       content='内容提示一行，最小高度145'
				       buttons={[{
					       text: "辅助操作",
					       onClick:  e => {
						       this.hidden();
						       console.log('辅助操作');
					       }
				       }, {
					       text: "主操作",
					       onClick: e => {
						       this.hidden();
						       console.log('主操作');
					       }
				       }]}/>

				<Modal show={iconConfirmShow}
				       icon={reactIcon}
				       title='提示标题'
				       content='内容提示一行，最小高度145,内容提示一行，最小高度145'
				       buttons={[{
					       text: "辅助操作",
					       onClick: e => {
						       this.hidden();
						       console.log('辅助操作');
					       }
				       }, {
					       text: "主操作",
					       onClick: e => {
						       this.hidden();
						       console.log('主操作');
					       }
				       }]}/>
			</div>
		)
	}

}