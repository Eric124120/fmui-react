/**
 * Created by huangchengwen on 17/1/3.
 */
import React from 'react'
import Button from '../../../packages/button'
import Modal from '../../../packages/modal'



const reactIcon = require('./react.png')

export default class DemoDodal extends React.Component {
	constructor(prop) {
		super(prop);

		this.state = {
			showModal: false
		}
	}

	componentWillUnmount () {
		Modal.destroy();
	}

	alert() {
		const modal = Modal.alert({title: "提示标题", content: "内容提示两行行，内容提示两行行，内容提示两行行", buttons: [
			{
				text: "知道了",
				onClick: function () {
					modal.destroy();
					console.log('知道了');
				}
			}
		]})
	}

	confirm() {
		const modal = Modal.alert({title: "提示标题", content: "内容提示一行，最小高度145", buttons: [
			{
				text: "辅助操作",
				onClick: function () {
					modal.destroy();
					console.log('辅助操作');
				}
			},
			{
				text: "主操作",
				onClick: function () {
					modal.destroy();
					console.log('主操作');
				}
			}
		]})
	}

	iconConfirm() {
		const modal = Modal.alert({icon: reactIcon,title: "提示标题", content: "内容提示一行，最小高度145,内容提示一行，最小高度145", buttons: [
			{
				text: "辅助操作",
				onClick: function () {
					modal.destroy();
					console.log('辅助操作');
				}
			},
			{
				text: "主操作",
				onClick: function () {
					modal.destroy();
					console.log('主操作');
				}
			}
		]})
	}

	render() {
		return(
			<div>
				<div className="ml-flexbox">
					<Button size="large" type="white-orange" onTouchEnd={this.alert}>alert</Button>
				</div>
				<div className="ml-flexbox">
					<Button size="large" type="white-orange" onTouchEnd={this.confirm}>confirm</Button>
				</div>
				<div className="ml-flexbox">
					<Button size="large" type="white-orange" onTouchEnd={this.iconConfirm}>iconConfirm</Button>
				</div>
			</div>
		)
	}

}