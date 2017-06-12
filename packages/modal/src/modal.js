/**
 * Created by huangchengwen on 17/1/2.
 */
import { Component, PropTypes } from 'react';
import ComponentModal from '../../base/component/ComponentModal';
import classNames from 'classnames'
import Mask from '../../mask'
import './modal.scss'

export default class Modal extends ComponentModal {
	constructor(prop) {
		super(prop);
	}

	static propTypes = {
		show: PropTypes.bool,
		icon: PropTypes.string,
		title: PropTypes.string,
		content: PropTypes.string,
		buttons: PropTypes.array
	}

	static defaultProps = {
		show: false,
		icon: '',
		title: '提示',
		content: '提示信息',
		buttons: [
			{text: "ok", type: 'primary'}
		]
	}

	renderButtons() {
		return this.props.buttons.map( (action, idx) => {
			const { text, onClick, type, ...others } = action;
			const cls = classNames({
				"fm-modal-button": true,
				"fm-modal-button-default": type === 'default',
				"fm-modal-button-primary": type === 'primary'
			})

			return(
				<a key={idx} href="javascript:void(0);"
				   className={cls}
				   onClick={ e => onClick.call(this, e)}
				   {...others}>{text}</a>
			)
		});
	}

	render() {
		const {show, icon, title, content, ...others } = this.props;
		const iconDOM = icon ? <i className="fm-modal-icon"><img src={icon} width="36" height="36"/></i> : '';

		return(
			<div  style={ { display: show ? 'block' : 'none' } }>
				<Mask show={ show }></Mask>
				<div className="fm-modal" {...others}
					 // 禁止滚动
					 onTouchMove={this.onTouchMove}>
					<div className="fm-modal-header">
						{iconDOM}
						<h3 className="fm-modal-title">{title}</h3>
					</div>
					<div className="fm-modal-body">
						<span className="fm-modal-content">{content}</span>
					</div>
					<div className="fm-modal-footer">
						{this.renderButtons()}
					</div>
				</div>
			</div>
		)
	}
}