/**
 * Created by huangchengwen on 16/12/29.
 */
import React from 'react';
import {render} from 'react-dom';
import { Button, Toast } from '../../../packages';

export default class DemoToast extends React.Component {
	state = {
		showToast: false,
		toastType: 'success',
		toastTimer: null
	};

	componentWillUnmount() {
		this.state.toastTimer && clearTimeout(this.state.toastTimer)
	};

	componentDidMount () {
		/*render(<Toast show={this.state.showToast} type={this.state.toastType}/>,
				document.getElementById('global-toast-id'))*/
	}

	handler(type) {
		// this.setState({
		// 	showToast: true,
		// 	toastType: type
		// });
		//
		// this.state.toastTimer = setTimeout(()=> {
		// 	this.setState({showToast: false});
		// }, 2000);
		let x = Toast.getInstance();
		console.log(x);
		x.update()
	};

	render() {
		return(
			<div>
				<div className="ml-flexbox">
					<Button size="large" type="white-orange" onClick={this.handler.bind(this, 'normal')}>normal</Button>
				</div>
				<div className="ml-flexbox">
					<Button size="large" type="white-orange" onClick={this.handler.bind(this, 'success')}>toast-success</Button>
				</div>
				<div className="ml-flexbox">
					<Button size="large" type="white-orange" onClick={this.handler.bind(this, 'fail')}>toast-fail</Button>
				</div>
				<div className="ml-flexbox">
					<Button size="large" type="white-orange" onClick={this.handler.bind(this, 'network')}>toast-network</Button>
				</div>
				<div className="ml-flexbox">
					<Button size="large" type="orange-white">toast-loadding</Button>
				</div>


			</div>
		)
	}
}