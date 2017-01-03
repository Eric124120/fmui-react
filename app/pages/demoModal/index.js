/**
 * Created by huangchengwen on 17/1/3.
 */
import React from 'react'
import { Button, Modal } from '../../../packages'

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

	handle() {
		const modal = Modal.alert({title: "提示", content: "信息提示，内容哈哈哈", buttons: [
			{
				text: "取消",
				onClick: function () {
					modal.destroy();
					console.log('取消');
				}
			},
			{
				text: "确定",
				onClick: function () {
					modal.destroy();
					console.log('确定');
				}
			}
		]})
	}

	render() {
		return(
			<div>
				<div className="ml-flexbox">
					<Button size="large" type="white-orange" onClick={this.handle}>showModal</Button>
				</div>
			</div>
		)
	}

}