/**
 * Created by huangchengwen on 17/1/1.
 */
import { Component, PropTypes} from 'react';
import { findDOMNode } from 'react-dom';
import cx from 'classnames';
import './checkbox.scss'

export default class Checkbox extends Component {
	constructor(prop) {
		super(prop);
	}

	static propTypes = {
		type: PropTypes.oneOf(['radio', 'checkbox']),
		stylesheet: PropTypes.oneOf(['normal', 'rect', 'protocol']),
		name: PropTypes.string,
		checkboxVal: PropTypes.string,
		disabled: PropTypes.bool,
		checked: PropTypes.bool,
		label: PropTypes.string
	}

	static defaultProps = {
		type: 'checkbox',
		stylesheet: 'normal',
		name: 'checkbox',
		checkboxVal: '',
		disabled: false,
		checked: false,
		label: null
	}

	render() {

		var { type, stylesheet, name, value, disabled, checked, label, className, onChange, ...others } = this.props;
		const labelDOM = label && stylesheet != 'rect' ? <label className="fm-checkbox-label">{label}</label> : '';
		const cls = cx({ 'fm-checkbox': true, [className]: !!className});

		return(
			<div className={cls}>
				<input type={type}
				       name={name}
				       value={value}
				       disabled={disabled}
				       onChange={onChange}
				       checked={checked}
				       {...others}/>
				<span className={ "fm-" + stylesheet +"-checkbox" }>{stylesheet == 'rect' ? label : ''}</span>
				{labelDOM}
			</div>
		)
	}
}