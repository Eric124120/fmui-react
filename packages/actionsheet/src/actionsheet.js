/**
 * Created by huangchengwen on 17/1/5.
 */
import { Component, PropTypes } from 'react';
import ComponentModal from '../../base/component/ComponentModal';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import Mask from '../../mask';

import './actionsheet.scss';

export default class ActionSheet extends ComponentModal {
	constructor(prop) {
		super(prop);
	}

	static propTypes = {
		show: PropTypes.bool,
		actionMenus: PropTypes.array,
		cancelText: PropTypes.string,
		cancelFun: PropTypes.func
	}

	static defaultProps = {
		show: false,
		actionMenus: [],
		cancelText: '取消',
		cancelFun: null
	}

	renderMenus() {
		return this.props.actionMenus.map( (action, idx) => {
			const { text, current, onClick, ...others } = action;
			const cls = classnames({
				'fm-actionsheet-item': true,
				'fm-actionsheet-item-current': current
			});

			return(
				<div key={idx}
				     className={cls}
				     {...others}
				     onClick={e => onClick(e, this)}>{text}</div>
			)
		});
	}

	actionSheetCancel() {
		'function' === typeof this.props.cancelFun &&
		this.props.cancelFun();
	}

	render() {

		const { show, cancelText, cancelFun } = this.props;

		const cls = classnames({
			'fm-actionsheet': true,
			'fm-actionsheet-toggle': show
		});

		return(
			<div>
				<Mask show={show} maskClick={e => cancelFun(e, this)}/>
				<div className={cls} onTouchMove={this.onTouchMove}>
					<div className="fm-actionsheet-menu">
						{ this.renderMenus() }
					</div>
					<div className="fm-actionsheet-cancel">
						<div className="fm-actionsheet-item"
						     onClick={e => cancelFun(e, this)}>
							{cancelText}
						</div>
					</div>
				</div>
			</div>

		)
	}
}
