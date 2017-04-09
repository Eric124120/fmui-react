/**
 * Created by huangchengwen on 16/12/29.
 */
const Button = require('../../../packages/button').default
const Toast = require('../../../packages/toast').default

export default class DemoToast extends React.Component {
	state = {
		showToast: false,
		toastType: 'success',
		toastTimer: null
	};

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

		const toastMap = {
			"normal": "这是一个通用的提示",
			"success": "操作成功",
			"fail": "操作失败",
			"network": "网络异常",
			"loading": "加载中...",
		}


		var t = Toast[type](toastMap[type], 2000, () => {console.log('函数回调', type)})


		if(type == 'loading')
			setTimeout(function () {
				t.destroy();
			},3000);

	};

	render() {
		return(
			<div>
				<div className="fm-flexbox">
					<Button size="large" type="white-orange" onTouchEnd={this.handler.bind(this, 'normal')}>normal</Button>
				</div>
				<div className="fm-flexbox">
					<Button size="large" type="white-orange" onTouchEnd={this.handler.bind(this, 'success')}>toast-success</Button>
				</div>
				<div className="fm-flexbox">
					<Button size="large" type="white-orange" onTouchEnd={this.handler.bind(this, 'fail')}>toast-fail</Button>
				</div>
				<div className="fm-flexbox">
					<Button size="large" type="white-orange" onTouchEnd={this.handler.bind(this, 'network')}>toast-network</Button>
				</div>
				<div className="fm-flexbox">
					<Button size="large" type="orange-white" onTouchEnd={this.handler.bind(this, 'loading')}>toast-loading</Button>
				</div>
			</div>
		)
	}
}