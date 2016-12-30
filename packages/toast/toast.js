/**
 * Created by huangchengwen on 16/12/28.
 */
import React from 'react';
import {render} from 'react-dom';
import classNames from 'classnames';
import Mask from '../mask/index';
import './toast.scss'


let singleton = null;

export default class Toast extends React.Component {

	static propTypes = {
		type: React.PropTypes.oneOf(['success', 'fail', 'network', 'normal', 'loading']),
		show: React.PropTypes.bool,
		message: React.PropTypes.string,
		modal: React.PropTypes.bool,
		duration: React.PropTypes.number,
		autoClose: React.PropTypes.bool,
		showFunc: React.PropTypes.func,
		hideFunc: React.PropTypes.func
	};

	static defaultProps = {
		type: 'normal',
		show: false,
		message: '操作成功',
		modal: true,
		duration: 3000,
		autoClose: false,
		showFunc: null,
		hideFunc: null

	};


	update(settings) {
		//this.state.show = true//settings.show;
		this.setState({
			show: true
		})
	}



	constructor(props) {
		super(props);
		singleton = this;

		this.state = {
			show: false
		}

		this.componentDidMount = () => {
			setTimeout(() => {
				this.setState({
					show: false
				})
			}, 2000);

			'function' === this.props.showFunc &&
			this.props.showFunc();
		}

		this.componentWillUnmount = () => {
			'function' === this.props.hideFunc &&
			this.props.hideFunc();
		}

	}

	render() {
		const { type, show, message, icon, modal, duration, autoClose, ...others } = this.props;

		let IconComponent = '';

		if(!(type === 'normal')) {
			const iconClass = classNames({
				['ml-toast-icon']: true,
				['icon-toast-' + type]: true
			});
			IconComponent = <i className={iconClass} ></i>;
		}

		return (
				<div style={{display: this.state.show ? 'block' : 'none'}}>
					<Mask show={ modal }></Mask>
					<div className="ml-toast" style={{ padding: type === 'normal' ? '10px' : '24px 24px 20px' }}>
						{IconComponent}
						<span className="ml-toast-text" style={{ paddingTop: type === 'normal' ? '0' : '8px' }}>{ message }</span>
					</div>
				</div>
		)
	}

}



Toast.getInstance = function(props) {
	if (singleton)
		return singleton;

	render(<Toast show={true}/>,
			document.getElementById('global-toast-id'))
	return singleton;
}