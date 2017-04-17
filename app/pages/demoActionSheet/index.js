/**
 * Created by huangchengwen on 17/1/5.
 */
import { Component } from 'react'
import Button from '../../../packages/button'
import { Flex } from '../../../packages/flex'
import ActionSheet from '../../../packages/actionsheet'

export default class DemoActionSheet extends Component {
	constructor(prop) {
		super(prop);

		this.state = {
			show: false
		}
	}

	handle() {
		this.setState({
			show: true
		})
	}

	cancelFun(e, actionSheet) {
		console.log(e);
		console.log(actionSheet);

		this.setState({
			show: false
		})
	}


	render() {

		const actionMenus = [
			{
				text: '选项一',
				current: true,
				onClick:  (e, actionSheet) => {
					console.log('选项一');

					this.cancelFun(e, actionSheet)
				}
			},
			{
				text: '选项二',
				onClick:  (e, actionSheet) => {
					console.log('选项二');

					this.cancelFun(e, actionSheet)
				}
			}
		]


		return(
			<div>
				<Flex>
					<Button size="large" type="white-orange" onClick={this.handle.bind(this)}>actionsheet</Button>
				</Flex>
				<ActionSheet show={this.state.show}
				             actionMenus={actionMenus}
				             cancelText="取消选项"
							 cancelFun={this.cancelFun.bind(this)}/>
			</div>

		)
	}
}