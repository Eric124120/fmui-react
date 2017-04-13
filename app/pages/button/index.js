/**
 * Created by huangchengwen on 16/12/27.
 */
import { Component } from 'react'
import Button from '../../../packages/button'
import ButtonGroup from '../../../packages/buttonGroup'
import './button.scss'

export default class ButtonDom extends Component {

	constructor(props) {

		super(props);
		this.state = {
			toastShow: true
		}

		this.showToast = () => {


		}
	}



	render() {
		return (
			<div className="demo-button-container">
				<div className="fm-flexbox">
					<Button size="large" onClick={this.showToast}>default</Button>
				</div>
				<div className="fm-flexbox">
					<Button size="large" type="white-orange">white-orange</Button>
				</div>
				<div className="fm-flexbox">
					<Button size="large" type="orange-white">orange-white</Button>
				</div>
				<div className="fm-flexbox">
					<Button size="large" type="white-blue">white-blue</Button>
				</div>
				<div className="fm-flexbox">
					<Button size="large" type="blue-white">blue-white</Button>
				</div>
				<div className="fm-flexbox">
					<Button size="large" disabled>disabled</Button>
				</div>
				<div className="btn-group">
					<h3>button small</h3>
					<Button size="small">default</Button>
					<Button size="small" type="white-orange">white-orange</Button>
					<Button size="small" type="orange-white">orange-white</Button>
					<Button size="small" type="white-blue">white-blue</Button>
					<Button size="small" type="blue-white">blue-white</Button>
					<Button size="small" disabled>disabled</Button>
				</div>

				<div className="btn-group">
					<h3>button normal</h3>
					<Button>default</Button>
					<Button type="white-orange">white-orange</Button>
					<Button type="orange-white">orange-white</Button>
					<Button type="white-blue">white-blue</Button>
					<Button type="blue-white">blue-white</Button>
					<Button disabled>disabled</Button>
				</div>
				<div className="btn-group">
					<h3>button Group justify</h3>
					<ButtonGroup justify={true}>
						<Button size='large' type='white-orange'>
							按钮一
						</Button>
						<Button size='large' type='white-orange'>
							按钮二
						</Button>
						<Button size='large' type='white-orange'>
							按钮三
						</Button>
					</ButtonGroup>
				</div>
			</div>
		)
	}
}







