/**
 * Created by huangchengwen on 17/1/1.
 */
import Checkbox from '../../../packages/checkbox'
const AgreeItem = Checkbox.AgreeItem;
const CheckboxItem = Checkbox.CheckboxItem;

export default class DemoCheckbox extends React.Component{
	constructor(prop) {
		super(prop);

		this.state = {

		}
	}

	render() {

		return(
			<div className="ml-list">
				<div className="ml-list-header">
					单选按钮Checkbox
				</div>
				<div className="ml-list-body">
					<div className="ml-list-item">
						<Checkbox type="radio" name="sex" checkboxVal="1" label="男"></Checkbox>
						<Checkbox type="radio" style={{marginLeft: "15px"}} name="sex" checkboxVal="2" label="女"></Checkbox>
						<Checkbox style={{marginLeft: "15px"}} name="sex" checkboxVal="3" disabled={true} checked={true} label="不可选"></Checkbox>
					</div>
				</div>
				<div className="ml-list-header">
					单选按钮CheckboxItem（年龄）
				</div>
				<div className="ml-list-body">
					<CheckboxItem name="age" type="radio" checkboxVal="23" content="23" ></CheckboxItem>
					<CheckboxItem name="age" type="radio" checkboxVal="24" content="24" ></CheckboxItem>
				</div>
				<div className="ml-list-header">
					多选按钮CheckboxItem（喜欢的球类）
				</div>
				<div className="ml-list-body">
					<CheckboxItem name="ball" type="checkbox" checkboxVal="1" content="足球" ></CheckboxItem>
					<CheckboxItem name="ball" type="checkbox" checkboxVal="2" content="篮球" ></CheckboxItem>
					<CheckboxItem name="ball" type="checkbox" checkboxVal="3" content="乒乓球" ></CheckboxItem>
					<CheckboxItem name="ball" type="checkbox" checkboxVal="4" content="橄榄球(默认选中)" disabled={true} checked={true}></CheckboxItem>
				</div>
				<div className="ml-list-header">
					协议勾选
				</div>
				<div className="ml-list-body">
					<AgreeItem linkArray={[
						{url: 'http://www.baidu.com', text: '协议一'},
						{url: 'http://www.baidu.com', text: '协议二'}
					]}/>
				</div>
			</div>
		)
	}
}