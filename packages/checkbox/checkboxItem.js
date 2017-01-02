/**
 * Created by huangchengwen on 17/1/1.
 */
import React from 'react'
import classnames from 'classnames'
import Checkbox from './checkbox'

export default class checkboxItem extends React.Component {
	constructor(prop) {
		super(prop);

		this.state = {

		}
	}

	static defaultProps = {
		type: 'checkbox',
		name: 'checkbox',
		checkboxVal: '',
		disabled: false,
		checked: false,
		content: ''
	}

	static propTypes = {
		type: React.PropTypes.string,
		name: React.PropTypes.string,
		checkboxVal: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		checked: React.PropTypes.bool,
		content: React.PropTypes.string
	}

	render() {
		const { type, name, checkboxVal, disabled, checked, content, ...others } = this.props;

		return(
			<label className="ml-list-item" {...others}>
				<div className="ml-list-content">{content}</div>
				<Checkbox type={type}
				          name={name}
				          checkboxVal={checkboxVal}
				          disabled={disabled}
				          checked={checked}/>
			</label>
		)
	}
}