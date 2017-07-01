
import React, { Component, PropTypes, cloneElement } from 'react';
import ComponentModal from '../../base/component/ComponentModal';
import classNames from 'classnames'
import Mask from '../../mask'
import './popupModal.scss'


export default class PopupModal extends ComponentModal {
	constructor(prop) {
		super(prop);
	}

	static propTypes = {
		onCancelPopup: PropTypes.func,
		show: PropTypes.bool
	}


	render() {
		const { show, onCancelPopup, path, children, ...props } = this.props;


		return(
				<div  style={ { display: show ? 'block' : 'none' } }
					  onTouchMove={this.onTouchMove}
					  onClick={onCancelPopup}>
					<Mask show={ true } maskClick={onCancelPopup}></Mask>
					<img src={path} alt="" height="100%" />
				</div>
		)
	}
}