/**
 * Created by huangchengwen on 16/12/31.
 */
import React from 'react'
import {render} from 'react-dom';
import classNames from 'classnames';
import './switch.scss'

export default class Switch extends React.Component {
	constructor(prop) {
		super(prop);

		this.state = {
			checked: false
		}
	}

	static propTypes = {
		name: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		onChange: React.PropTypes.func
	}

	static defaultProps = {
		name: 'switch',
		disabled: false,
		onChange: null
	}

	onChange(e) {
		if(this.props.disabled == false) {
			this.setState( { checked: !this.state.checked } );
			'function' === typeof this.props.onChange &&
				this.props.onChange(e);
		}
	}


	render() {
		const { name, disabled, ...others } = this.props;

		return(
			<label className="ml-switch">
				<input type="checkbox"
				       name={name}
				       disabled={disabled}
				       className="ml-switch-checkbox"
				       checked={this.state.checked}
				       onChange={(e) => this.onChange(e)}/>
				<div className="ml-switch-label"></div>
			</label>
		)
	}
}