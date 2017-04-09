/**
 * Created by huangchengwen on 17/1/5.
 */
import { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import Mask from '../../mask'

import './actionsheet.scss'

let singleton = null;
export default class ActionSheet extends Component {
	constructor(prop) {
		super(prop);
		singleton = this;

		this.state = {
			show: false
		}
	}

	static propTypes = {
		actionMenus: PropTypes.array,
		cancelText: PropTypes.string,
		cancelFun: PropTypes.func
	}

	static defaultProps = {
		actionMenus: [],
		cancelText: '取消',
		cancelFun: null
	}

	show() {
		this.setState({
			show: true
		})
	}

	hide() {
		this.setState({
			show: false
		})
	}

	destroy() {
		if(singleton) {
			var modalDOM = document.body.querySelector('#global-actionsheet-id');
			modalDOM && document.body.removeChild(modalDOM);
			singleton = null;

			return this;
		}
	}

	renderMenus() {
		return this.props.actionMenus.map(function (action, idx) {
			const { text, current, ...others } = action;
			const cls = classnames({
				'fm-actionsheet-item': true,
				'fm-actionsheet-item-current': current
			});

			return(
				<div key={idx}
				   className={cls}
				   {...others}>{text}</div>
			)
		});
	}

	actionSheetCancel() {
		this.setState({
			show: false
		}, () => {
			'function' === typeof this.props.cancelFun &&
				this.props.cancelFun();
		})
	}

	render() {

		const cls = classnames({
			'fm-actionsheet': true,
			'fm-actionsheet-toggle': this.state.show
		});

		return(
			<div>
				<Mask show={this.state.show} maskClick={this.hide.bind(this)}/>
				<div className={cls}>
					<div className="fm-actionsheet-menu">
						{ this.renderMenus() }
					</div>
					<div className="fm-actionsheet-cancel">
						<div className="fm-actionsheet-item"
						     onClick={this.actionSheetCancel.bind(this)}>
							{this.props.cancelText}
						</div>
					</div>
				</div>
			</div>

		)
	}
}

const notice = (title, actionMenus, cancelFun) =>
		ActionSheet.init(title, actionMenus, cancelFun);


ActionSheet.init = (title, actionMenus, cancelFun) => {
	if(!singleton) {
		let bodyDOM = document.body,
				container = bodyDOM.querySelector('#global-actionsheet-id');

		if( !container ) {
			container = document.createElement('div');
			container.setAttribute('id', 'global-actionsheet-id');
			bodyDOM.appendChild(container);
		}


		ReactDOM.render(
				<ActionSheet actionMenus={actionMenus} cancelFun={cancelFun}/>,
				document.getElementById('global-actionsheet-id')
		);
	}

	return singleton;
}

ActionSheet.showActionSheet = (title, actionMenus, cancelFun) => {
	notice(title, actionMenus, cancelFun);
}

ActionSheet.destroy = () =>
	singleton && singleton.destroy();
