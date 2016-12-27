/**
 * Created by huangchengwen on 16/12/27.
 */
import React from 'react'
import {Button} from '../../../packages'
import './button.scss'

export default class ButtonDom extends React.Component {

	render() {
		return (
			<div>
				<div className="ml-flexbox">
					<Button size="large">default</Button>
				</div>
				<div className="ml-flexbox">
					<Button size="large" type="white-orange">white-orange</Button>
				</div>
				<div className="ml-flexbox">
					<Button size="large" type="orange-white">orange-white</Button>
				</div>
				<div className="ml-flexbox">
					<Button size="large" type="white-blue">white-blue</Button>
				</div>
				<div className="ml-flexbox">
					<Button size="large" type="blue-white">blue-white</Button>
				</div>
				<div className="ml-flexbox">
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
			</div>
		)
	}
}







