/**
 * Created by huangchengwen on 16/12/28.
 */
import { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Mask from '../../mask';
import './toast.scss'


let singleton = null;

export default class Toast extends Component {
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

	/**
	 * ====================非单例模式处理========================
	 */

	static propTypes = {
		type: PropTypes.oneOf(['normal', 'success', 'loading', 'fail', 'network']),
		show: PropTypes.bool,
		message: PropTypes.string,
		modal: PropTypes.bool,
		duration: PropTypes.number,
		autoClose: PropTypes.bool,
		onClose: PropTypes.fun
	}

	static defaultProps = {
		type: 'normal',
		show: false,
		message: '操作成功',
		modal: true,
		duration: 3000,
		autoClose: true,
		onClose: null
	}

	componentDidMount() {
		// 非单例模式时处理
		const {type, show, message, modal, duration, autoClose} = this.props;
		this.setState({ type, show, message, modal, duration, autoClose });
	}

	componentWillReceiveProps(nextProps) {
		// 非单例模式时处理
		if(nextProps.show !== this.props.show) {
			this.setState({ show: nextProps.show });

			nextProps.autoClose && setTimeout(() => {
				this.hidden()
			}, nextProps.duration);
		}
	}

	hidden() {
		// 非单例模式时处理
		this.setState({show: false}, () => this.props.show = false);
	}


	/**
	 * ====================单例模式处理========================
	 */

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

	render() {
		const {type, show, message, modal} = this.state;

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

/**
 * ====================单例模式处理函数========================
 */

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
