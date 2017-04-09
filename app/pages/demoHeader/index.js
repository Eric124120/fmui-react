/**
 * Created by huangchengwen on 17/2/27.
 */
import { Component } from 'react'
import HeaderNavBar from '../../../packages/headerNavBar'
import ActionSheet from '../../../packages/actionsheet'

export default class DemoSearch extends Component {
	constructor(prop) {
		super(prop);

		this.rightClick.bind(this);
	}

	componentDidMount() {
		/*初始化actionsheet*/
		const actionMenus = [
			{
				text: '选项一',
				current: true,
				onClick: function () {
					console.log('选项一');
				}
			},
			{
				text: '选项二',
				onClick: function () {
					console.log('选项二');
				}
			}
		]

		this.actionSheeet = ActionSheet.init('ActionSheet', actionMenus, function () {
			console.log('cancel')
		})
	}

	componentWillUnmount() {
		/*销毁actionsheeet*/
		this.actionSheeet.destroy();
	}

	rightClick(e) {
		e.preventDefault();
		this.actionSheeet.show()
	}

	render() {
		const headrNavBar = {
			title: '库融贷',
			rightClick: this.rightClick.bind(this),
			left: 'back',
			right: 'more'
		};

		return(
			<div>
				<HeaderNavBar {...headrNavBar}/>
			</div>
		)
	}
}