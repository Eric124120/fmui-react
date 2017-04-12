/**
 * Created by huangchengwen on 17/1/1.
 */
import { Component } from 'react'
import {AgreeItem, CheckboxItem, RadioGroup, CheckboxGroup} from '../../../packages/checkbox'

import './index.scss'

export default class DemoCheckbox extends Component{
	constructor(prop) {
		super(prop);

		this.state = {

		}
	}

	render() {

		let radioData = [
			{label: '男', value: 1},
			{label: '女', value: 2}
		];

		let checkboxData = [
			{label: '足球', value: "1"},
			{label: '乒乓球', value: "2"},
			{label: '羽毛球', value: "3"},
			{label: '橄榄球', value: "4", disabled: true}
		];

		let checkboxData1 = [
			{label: '足球', value: "1", disabled: true},
			{label: '乒乓球', value: "2", disabled: true},
			{label: '羽毛球', value: "3", disabled: true},
			{label: '橄榄球', value: "4", disabled: true}
		]

		return(
			<div className="fm-list">
				<div className="fm-list-header">
					单选按钮RadioGroup 1 normal
				</div>
				<div className="fm-list-body">
					<div className="fm-list-item">
						<RadioGroup radioData={radioData}
						            radioName="sex1"
						            checkedValue={1}
						            radioClass="margin-letf15"/>
					</div>
				</div>
				<div className="fm-list-header">
					单选按钮RadioGroup 2 rect
				</div>
				<div className="fm-list-body">
					<div className="fm-list-item">
						<RadioGroup radioData={radioData}
						            radioName="sex2"
						            radioType="rect"
						            checkedValue={1}
						            radioClass="margin-letf15"/>
					</div>
				</div>

				<div className="fm-list-header">
					单选按钮RadioGroup 3 cell
				</div>
				<div className="fm-list-body">
					<RadioGroup radioData={radioData}
					            radioName="sex3"
					            radioType="cell"
					            checkedValue={1}/>
				</div>

				<div className="fm-list-header">
					多选按钮CheckboxItem 1 normal
				</div>
				<div className="fm-list-body">
					<div className="fm-list-item">
						<CheckboxGroup checkboxData={checkboxData}
						               checkedDefault={["1","2","4"]}
						               checkboxName="ball1"/>
					</div>
				</div>

				<div className="fm-list-header">
					多选按钮CheckboxItem 2 rect
				</div>
				<div className="fm-list-body">
					<CheckboxGroup checkboxData={checkboxData}
					               className="paddin15"
					               checkboxType='rect'
					               checkedDefault={["1","2","4"]}
					               checkboxName="ball2"/>
				</div>

				<div className="fm-list-header">
					多选按钮CheckboxItem 3 react（不可编辑状态）
				</div>
				<div className="fm-list-body">
					<CheckboxGroup checkboxData={checkboxData1}
					               className="paddin15"
					               checkboxType='rect'
					               checkedDefault={["1","2","4"]}
					               checkboxName="ball3"/>
				</div>

				<div className="fm-list-header">
					多选按钮CheckboxItem 4 cell
				</div>
				<div className="fm-list-body">
					<CheckboxGroup checkboxData={checkboxData}
					               checkboxType='cell'
					               checkedDefault={["1","2","4"]}
					               checkboxName="ball4"/>
				</div>

				<div className="fm-list-header">
					协议勾选 checkbox
				</div>
				<div className="fm-list-body">
					<AgreeItem linkArray={[
						{url: 'http://www.baidu.com', text: '协议一'},
						{url: 'http://www.baidu.com', text: '协议二'}
					]}/>
				</div>

				<div className="fm-list-header">
					协议勾选 radio
				</div>
				<div className="fm-list-body">
					<AgreeItem type="radio" linkArray={[
						{url: 'http://www.baidu.com', text: '协议一'},
						{url: 'http://www.baidu.com', text: '协议二'}
					]}/>
				</div>
			</div>
		)
	}
}