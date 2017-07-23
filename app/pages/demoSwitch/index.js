/**
 * Created by huangchengwen on 17/1/1.
 */
import { Component } from 'react'
import Switch from '../../../packages/switch';

export default class DemoSwitch extends Component {

	change1(e) {
		console.log(e.target.checked)
	}

	render() {
		return(
			<div className="fm-list">
				<div className="fm-list-header">switch 滑动开关</div>
				<div className="fm-list-body">
					<div className="fm-list-item">
						<div className="fm-list-content">选中状态</div>
						<Switch name="switch1" defaultChecked={true} onChange={this.change1.bind(this)}/>
					</div>
					<div className="fm-list-item">
						<div className="fm-list-content">未选中状态</div>
						<Switch name="switch2"/>
					</div>

					<div className="fm-list-item">
						<div className="fm-list-content">禁用状态</div>
						<Switch name="switch3" disabled={true}/>
					</div>
				</div>
			</div>
		);
	}
}