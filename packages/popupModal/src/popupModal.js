/**
 * Created by huangchengwen on 17/3/14.
 */
import React, { Component, PropTypes, cloneElement } from 'react';
import { findDOMNode, render } from 'react-dom';
import classNames from 'classnames'
import Mask from '../../mask'
import './popupModal.scss'


export default class PopupModal extends Component {
	constructor(prop) {
		super(prop);
	}

	static propTypes = {
		title: PropTypes.string,
		onCancelPopup: PropTypes.fun,
		show: PropTypes.bool
	}

	componentDidUpdate() {
		const { show } = this.props;
		let nodeContainer = findDOMNode(this);

		while (nodeContainer.parentNode.tagName != 'BODY') {
			nodeContainer.parentNode.style.overflow = show ? 'hidden' : '';
			nodeContainer = nodeContainer.parentNode;
		}

	}


	render() {
		const {title, show, onCancelPopup, className, children, ...props } = this.props;

		let titleDOM = null;
		let cls = classNames({
			['fm-modal-popup']: true,
			[className]: !!className
		});

		if(title) titleDOM = (<h3 className="fm-modal-title">{title}</h3>);

		return(
			<div  style={ { display: show ? 'block' : 'none' } }>
				<Mask show={ show } maskClick={onCancelPopup}></Mask>
				<div className={cls} {...props}>
					{titleDOM}
					<button className="fm-modal-cancel" onClick={onCancelPopup}>取消</button>
					<div className="fm-modal-body" {...props}>
						{children}
					</div>
				</div>
			</div>
		)
	}
}