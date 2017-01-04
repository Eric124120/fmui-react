/**
 * Created by huangchengwen on 17/1/1.
 */
import React from 'react'
import './checkbox.scss'

export default class Checkbox extends React.Component {
	constructor(prop) {
		super(prop);
	}

	static propTypes = {
		type: React.PropTypes.string,
		name: React.PropTypes.string,
		checkboxVal: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		checked: React.PropTypes.bool,
		label: React.PropTypes.string
	}

	static defaultProps = {
		type: 'checkbox',
		name: 'checkbox',
		checkboxVal: '',
		disabled: false,
		checked: false,
		label: null
	}

	render() {
		var { type, name, checkboxVal, disabled, checked, label, ...others } = this.props;
		const labelDOM = label ? <label className="ml-checkbox-label">{label}</label> : '';
		return(
			<div className="ml-checkbox" {...others}>
				<input type={type}
				       name={name}
				       value={checkboxVal}
				       disabled={disabled}
				       defaultChecked={checked}/>
				<span className="ml-icon-checkbox"></span>
				{labelDOM}
			</div>
		)
	}
}