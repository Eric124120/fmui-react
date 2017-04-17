/**
 * Created by huangchengwen on 17/4/17.
 */
import { Component, PropTypes } from 'react';
import {TabsNavBar, TabsNavItem} from '../../../packages/tabsNavBar'

export default class DemoTabsNavBar extends Component {
	constructor(prop) {
		super(prop);

		this.state = {
			currentIndex: 0
		}

	}

	selectAction(selectIndex) {
		this.setState({
			currentIndex: selectIndex
		});
	}


	render() {

		return (
			<div>
				<TabsNavBar currentIndex={ this.state.currentIndex }
				            onSelect={(selectIndex) => this.selectAction(selectIndex)}>
					<TabsNavItem>选项一</TabsNavItem>
					<TabsNavItem>选项二</TabsNavItem>
					<TabsNavItem>选项三</TabsNavItem>
				</TabsNavBar>
				<div>
					{`选项${this.state.currentIndex}的内容`}
				</div>
			</div>
		);
	}
}
