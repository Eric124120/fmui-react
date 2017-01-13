/**
 * Created by huangchengwen on 17/1/1.
 */
import React from 'react';
import {render} from 'react-dom';
import Switch from '../../../packages/switch';

export default class DemoSwitch extends React.Component {

	change1(e) {
		console.log(e.target.checked)
	}

	render() {
		return(
			<div className="ml-list">
				<div className="ml-list-header">switch 滑动开关</div>
				<div className="ml-list-body">
					<div className="ml-list-item">
						<div className="ml-list-content">选中状态</div>
						<Switch name="switch1" checked={true} onChange={this.change1.bind(this)}/>
					</div>
					<div className="ml-list-item">
						<div className="ml-list-content">未选中状态</div>
						<Switch name="switch2"/>
					</div>

					<div className="ml-list-item">
						<div className="ml-list-content">禁用状态</div>
						<Switch name="switch3" disabled={true}/>
					</div>
				</div>
			</div>
		);
	}
}