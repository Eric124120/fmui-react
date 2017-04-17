/**
 * Created by huangchengwen on 17/2/27.
 */
import { Component } from 'react'
import HeaderNavBar from '../../../packages/headerNavBar'
import ActionSheet from '../../../packages/actionsheet'

export default class DemoSearch extends Component {
	constructor(prop) {
		super(prop);

		this.state = {
			show: false
		}

		this.rightClick.bind(this);
	}

	rightClick(e) {
		e.preventDefault();
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
		const headrNavBar = {
			title: '库融贷',
			rightClick: this.rightClick.bind(this),
			left: 'back',
			right: 'more'
		};

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
				<HeaderNavBar {...headrNavBar}/>
				<ActionSheet show={this.state.show}
				             actionMenus={actionMenus}
				             cancelText="取消选项"
				             cancelFun={this.cancelFun.bind(this)}/>
			</div>
		)
	}
}

