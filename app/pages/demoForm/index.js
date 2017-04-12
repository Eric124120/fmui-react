import { Component } from 'react'
import CheckBox from '../../../packages/checkbox'
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

export default class DemoForm extends Component {
	constructor(prop) {
		super(prop)
	}

	render() {
		return(
			<Cell>
				<CellHeader>表单信息</CellHeader>
				<CellBody>
					<CellItem>
						<CellItemLabel>栏目标题</CellItemLabel>
						<CellItemControl>
							<input type="tel" name="phone" id="phone" placeholder="输入框提示内容"/>
						</CellItemControl>
						<CellItemClear></CellItemClear>
					</CellItem>
					<CellItem>
						<CellItemLabel>短信验证码</CellItemLabel>
						<CellItemControl>
							<input type="text" name="username" placeholder="输入短信校验码"/>
						</CellItemControl>
						<CellItemClear></CellItemClear>
						<CellItemCaptcha>
							<button type="button" className="captcha-sms">发送校验码</button>
						</CellItemCaptcha>
					</CellItem>
					<CellItem>
						<CellItemLabel>短信验证码</CellItemLabel>
						<CellItemControl>
							<input type="text" name="username" placeholder="输入短信校验码"/>
						</CellItemControl>
						<CellItemClear></CellItemClear>
						<CellItemCaptcha>
							<button type="button" className="captcha-sms" disabled="disabled">重新获取(60)</button>
						</CellItemCaptcha>
					</CellItem>
					<CellItem>
						<CellItemLabel>选中项目</CellItemLabel>
						<CellItemControl>
							<select name="children" className="selected" required>
								<option value="">请选择</option>
								<option value="1">1个</option>
								<option value="2">2个</option>
								<option value="3">3个</option>
								<option value="4">4个</option>
								<option value="5">5个</option>
							</select>
						</CellItemControl>
						<CellItemArrow direction="down"></CellItemArrow>
					</CellItem>
					<CellItem>
						<CellItemLabel>性别</CellItemLabel>
						<CellItemControl>
							<CheckBox type="radio" name="sex" value="0" stylesheet="rect" label="男"/>
							<CheckBox type="radio" name="sex" value="1" stylesheet="rect" label="女"
							style={{'margin-left': '10px'}}/>
						</CellItemControl>
					</CellItem>
				</CellBody>
				<CellHeader>list信息</CellHeader>
				<CellBody>
					<CellItem Component="a" href="#">
						<CellItemContent>栏目信息1</CellItemContent>
						<CellItemArrow direction="right"></CellItemArrow>
					</CellItem>
					<CellItem Component="a" href="#">
						<CellItemContent>栏目信息2</CellItemContent>
						<CellItemExtra>内容内容2</CellItemExtra>
						<CellItemArrow direction="right"></CellItemArrow>
					</CellItem>
					<CellItem Component="a" href="#">
						<CellItemContent>栏目信息2</CellItemContent>
						<CellItemExtra>内容内容2</CellItemExtra>
					</CellItem>
				</CellBody>
			</Cell>
		)
	}
}