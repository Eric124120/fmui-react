/**
 * Created by huangchengwen on 16/12/28.
 */
import classNames from 'classnames';
import Mask from '../../mask';
import './toast.scss'


let singleton = null;

export default class Toast extends React.Component {

	componentDidUpdate() {
		this.state.autoClose && setTimeout(() => {
			this.destroy();
		}, this.state.duration);
	}

	show(settings) {
		this.setState(settings);

		return this;
	}

	destroy() {
		if(singleton) {
			var toastDOM = document.body.querySelector('#global-toast-id');
			toastDOM && document.body.removeChild(toastDOM);
			singleton = null;

			'function' === typeof this.state.onClose && this.state.onClose();

			return this;
		}
	}

	constructor(props) {
		super(props);
		singleton = this;

		this.state = {
			type: 'normal',
			show: false,
			message: '操作成功',
			modal: true,
			duration: 3000,
			autoClose: true,
			onClose: null
		}

	}

	render() {
		const {...others } = this.props;
		const {type, show, message, modal, duration, autoClose} = this.state;

		let IconComponent = '';

		if(!(type === 'normal')) {
			const iconClass = classNames({
				['fm-toast-icon']: true,
				['icon-toast-' + type]: true
			});
			IconComponent = <i className={iconClass} ></i>;
		}

		return (
				<div ref="toastDOM" style={{display: show ? 'block' : 'none'}}>
					<Mask show={ modal }></Mask>
					<div className="fm-toast" style={ type === 'normal' ? {  padding: '10px', width: '80%' } : {padding:'24px 24px 20px'}}>
						{IconComponent}
						<span className="fm-toast-text" style={{ paddingTop: type === 'normal' ? '0' : '8px' }}>{ message }</span>
					</div>
				</div>
		)
	}

}

function notice(message, type, duration, onClose) {
	if (typeof duration === 'function') {
		onClose = duration;
		duration = 2500;
	}

	let toastInstance = Toast.init();

	return toastInstance.show({
		type: type,
		show: true,
		message: message,
		modal: true,
		duration: duration,
		autoClose: type !== 'loading',
		onClose: onClose
	});
}

Toast.init = (settings) => {
	if(!singleton) {
		let bodyDOM = document.body,
			toastContainer = bodyDOM.querySelector('#global-toast-id');

		if( !toastContainer ) {
			toastContainer = document.createElement('div');
			toastContainer.setAttribute('id', 'global-toast-id');
			bodyDOM.appendChild(toastContainer);
		}

		ReactDOM.render(
				<Toast />,
				document.getElementById('global-toast-id')
		);
	}

	return singleton;

}

Toast.show = function (settings) {
	let toastInstance = Toast.init();
	return toastInstance.show(settings);
}

Toast.normal = (message, duration, onClose) => {
	return notice(message, 'normal', duration, onClose);
}

Toast.success = (message, duration, onClose) => {
	return notice(message, 'success', duration, onClose);
}

Toast.fail = (message, duration, onClose) => {
	return notice(message, 'fail', duration, onClose);
}

Toast.network = (message, duration, onClose) => {
	return notice(message, 'network', duration, onClose);
}

Toast.loading = (message, duration, onClose) => {
	return notice(message, 'loading', duration, onClose);
}

Toast.destroy = () => {
	let toastInstance = Toast.init();
	return toastInstance.destroy()
}
