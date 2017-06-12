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
		onCancelPopup: PropTypes.func,
		show: PropTypes.bool
	}

    shouldComponentUpdate(nextProp, nextState) {
        return this.props.show !== nextProp.show;
    }

    touchMoveHandler(e) {
        // 禁止滚动
        e.preventDefault();

    }


	render() {
		const {title, show, onCancelPopup, className, children, ...props } = this.props;

		let titleDOM = null;
		let cls = classNames({
			['fm-modal-popup']: true,
			['fm-modal-popup-toggle']: show,
			[className]: !!className
		});

		if(title) titleDOM = (<h3 className="fm-modal-title">{title}</h3>);

		return(
			<div>
				<Mask show={ show } maskClick={onCancelPopup}></Mask>
				<div className={cls}
					 onTouchMove={this.touchMoveHandler}
					 {...props}>
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