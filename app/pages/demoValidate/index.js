/**
 * Created by huangchengwen on 17/4/12.
 */
import { Component } from 'react'
import Form from '../../../packages/form'
import Button from '../../../packages/button'
import Toast from '../../../packages/toast'
import {
	AgreeItem,
	CheckboxItem,
	RadioGroup,
	CheckboxGroup
} from '../../../packages/checkbox'

import Cell ,{
	CellBody,
	CellFooter,
	CellHeader,
	CellItem,
	CellItemArrow,
	CellItemCaptcha,
	CellItemClear,
	CellItemContent,
	CellItemControl,
	CellItemExtra,
	CellItemLabel
} from '../../../packages/cell';

import '../../components/validate.rules'
import './index.scss'

export default class DemoValidate extends Component{
	constructor(prop) {
		super(prop);

	}

	onSubmit() {
		var myForm = this.formName;

		if(!myForm.validateForm()) {
			Toast.normal('请完善信息', 2000);
		}

		console.log(myForm.serialize())
	}

	render() {

		let sexData = [
			{label: '男', value: 1},
			{label: '女', value: 2}
		]

		let ballData = [
			{label: '足球', value: "1"},
			{label: '乒乓球', value: "2"},
			{label: '羽毛球', value: "3"},
			{label: '橄榄球', value: "4", disabled: true}
		]

		return (
			<Cell>
				<Form.components.Form ref={name => this.formName = name}>
				<CellBody>
					<CellItem>
						<CellItemLabel>车架号/VIN</CellItemLabel>
						<CellItemControl>
							<Form.components.Input type="text"
							                       name="carVin"
							                       validations={['required']}
							                       placeholder="请输入"/>
						</CellItemControl>
					</CellItem>
					<CellItem>
						<CellItemLabel>品牌车系</CellItemLabel>
						<CellItemControl>
							<Form.components.Input type="text"
							                       name="brandSeries"
							                       validations={['required']}
							                       placeholder="品牌车系"/>
						</CellItemControl>
					</CellItem>
					<CellItem>
						<CellItemLabel>车辆型号</CellItemLabel>
						<CellItemControl>
							<Form.components.Select name="typeId"
							                 validations={['required']}
							                 className="selected">
								<option value="">请选择</option>
								<option value='1'>指南者</option>
								<option value='2'>路虎</option>
								<option value='3'>福特翼虎</option>
							</Form.components.Select>
						</CellItemControl>
						<CellItemArrow direction="down"></CellItemArrow>
					</CellItem>
					<CellItem>
						<CellItemLabel>颜色</CellItemLabel>
						<CellItemControl>
							<Form.components.Select name="carColor"
							                 validations={['required']}
							                 className="selected"
							                 value="10">
								<option value="">请选择</option>
								<option value="10">红色</option>
								<option value="20">绿色</option>
								<option value="30">白色</option>
								<option value="40">黄色</option>
								<option value="50">银色</option>
								<option value="60">灰色</option>
								<option value="70">蓝色</option>
								<option value="80">黑色</option>
							</Form.components.Select>
						</CellItemControl>
						<CellItemArrow direction="down"></CellItemArrow>
					</CellItem>
					<CellItem>
						<CellItemLabel>表显里程</CellItemLabel>
						<CellItemControl>
							<Form.components.Input type="text"
							                name="mileage"
							                validations={['required', 'number']}
							                placeholder="请输入"
							                fmListTip="万公里"/>
						</CellItemControl>
					</CellItem>
					<CellItem>
						<CellItemLabel>初登日期</CellItemLabel>
						<CellItemControl>
							<Form.components.Input type="date" name="firstRegisterTime"
							                validations={['required']}
							                placeholder="初登日期"
							                value={`2017-04-12`}/>
						</CellItemControl>
					</CellItem>
					<CellItem>
						<CellItemLabel>性别</CellItemLabel>
						<Form.components.Radio radioData={sexData}
			                        validations={['required']}
						            name="sex"
						            radioType="rect"
						            className="checkbox-container"
						            radioClass="checkbox-container-item"/>
					</CellItem>
				</CellBody>
				<CellHeader>
					选择你喜欢的球类 rect（多选）
				</CellHeader>
				<CellBody>
					<Form.components.Checkbox checkboxData={ballData}
		                           validations={['required']}
					               className="paddin15"
					               checkboxType='rect'
					               checkedDefault={["1", "4"]}
					               checkboxName="ball1"/>
				</CellBody>
				<CellHeader>
					选择你喜欢的球类 cell（多选）
				</CellHeader>
				<CellBody>
					<Form.components.Checkbox checkboxData={ballData}
		                           validations={['required']}
					               checkboxType='cell'
					               checkedDefault={["1", "4"]}
					               checkboxName="ball2"/>
				</CellBody>
				<CellHeader>
					选择你喜欢的球类 cell（多选）
				</CellHeader>
				<CellBody>
					<Form.components.Checkbox checkboxData={ballData}
		                           validations={['required']}
					               checkboxType='cell'
					               checkboxName="ball3"/>
				</CellBody>
				<CellHeader>
					请输入多行文本 Textarea
				</CellHeader>
				<CellBody>
					<Form.components.Textarea
							containerClassName="text-area-container"
							className="text-area"
							name="textarea"
							validations={['required']}
							value="多行文本框"
							placeholder="请输入多行文本"/>
				</CellBody>
				<CellBody>
					<AgreeItem linkArray={[
						{url: 'http://www.baidu.com', text: '协议一'},
						{url: 'http://www.baidu.com', text: '协议二'}
					]}/>
				</CellBody>
				</Form.components.Form>
				<CellFooter>
					<Button size="large"
					        type="orange-white"
					        onClick={this.onSubmit.bind(this)}
					>提交</Button>
				</CellFooter>
			</Cell>
		)
	}
}