/**
 * Created by huangchengwen on 17/1/2.
 */
import React from 'react'
import { render } from 'react-dom'
import classNames from 'classnames'
import Mask from '../../mask'
import './modal.scss'

let singleton = null;

export default class Modal extends React.Component {
	constructor(prop) {
		super(prop);

		singleton = this;

		this.state = {
			show: false,
			icon: '',
			title: '提示',
			content: '提示信息',
			buttons: [
				{text: "ok", type: 'primary'}
			]
		}
	}

	static propTypes = {
		show: React.PropTypes.bool,
		icon: React.PropTypes.string,
		title: React.PropTypes.string,
		content: React.PropTypes.string,
		buttons: React.PropTypes.array
	}


	show(options) {
		this.setState(options);

		return this;
	}

	destroy() {
		if(singleton) {
			var modalDOM = document.body.querySelector('#global-modal-id');
			modalDOM && document.body.removeChild(modalDOM);
			singleton = null;

			return this;
		}
	}

	renderButtons() {
		return this.state.buttons.map( (action, idx) => {
			const { text, type, ...others } = action;
			const cls = classNames({
				"ml-modal-button": true,
				"ml-modal-button-default": type === 'default',
				"ml-modal-button-primary": type === 'primary'
			})

			return(
				<a key={idx} href="javascript:void(0);"
				   className={cls}
				   {...others}>{text}</a>
			)
		});
	}

	render() {
		const {show, icon, title, content, buttons, ...others } = this.state;
		const iconDOM = icon ? <i className="ml-modal-icon"><img src={icon} width="36" height="36"/></i> : '';

		return(
				<div  style={ { display: show ? 'block' : 'none' } }>
					<Mask show={ true }></Mask>
					<div className="ml-modal" {...others}>
						<div className="ml-modal-header">
							{iconDOM}
							<h3 className="ml-modal-title">{title}</h3>
						</div>
						<div className="ml-modal-body">
							<span className="ml-modal-content">{content}</span>
						</div>
						<div className="ml-modal-footer">
							{this.renderButtons()}
						</div>
					</div>
				</div>
		)
	}
}

function notice(icon, title, content, buttons) {


	let modalInstance = Modal.init();

	return modalInstance.show({
		show: true,
		icon: icon,
		title: title,
		content: content,
		buttons: buttons
	});
}

Modal.init = () => {
	if(!singleton) {
		let bodyDOM = document.body,
			modalContainer = bodyDOM.querySelector('#global-modal-id');

		if( !modalContainer ) {
			modalContainer = document.createElement('div');
			modalContainer.setAttribute('id', 'global-modal-id');
			bodyDOM.appendChild(modalContainer);
		}

		render(
				<Modal />,
				document.getElementById('global-modal-id')
		);
	}

	return singleton;
}

Modal.alert = ({icon: icon, title: title, content: content, buttons: buttons}) => {
	return notice(icon, title, content, buttons);
}

Modal.destroy = () => {
	let modalInstance = Modal.init();
	return modalInstance.destroy()
}