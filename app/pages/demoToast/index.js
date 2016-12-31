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



	componentDidMount () {

	}

	componentWillUnmount () {
		Toast.destroy();
	}

	handler(type) {
		/*var t = Toast.show({
			show: true,
			type: type,
			autoClose: type != 'loadding',
			message: type,
			onClose: function () {
				console.log('函数回调', type);
			}
		});*/


		var t = Toast[type](type, 2000, () => {console.log('函数回调', type)})


		if(type == 'loading')
			setTimeout(function () {
				t.destroy();
			},3000);

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
					<Button size="large" type="orange-white" onClick={this.handler.bind(this, 'loading')}>toast-loading</Button>
				</div>
			</div>
		)
	}
}