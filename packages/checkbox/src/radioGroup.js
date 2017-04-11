/**
 * Created by huangchengwen on 17/4/11.
 */
import React, { Component, PropTypes } from 'react';
import { findDOMNode, cloneElement } from 'react-dom';
import cx from 'classnames';

import Checkbox from '../../../packages/checkbox';



export default class RadioGroup extends Component {
	constructor(prop) {
		super(prop);

		this.state = {
			radioValue: ''
		}
	}

	static propTypes = {
		radioData: PropTypes.array,
		radioName: PropTypes.string,
		radioType: PropTypes.oneOf(['normal', 'rect', 'cell']),
		radioClass: PropTypes.string,
		onChange: PropTypes.fun,
		checkedValue: PropTypes.oneOf([PropTypes.string, PropTypes.number])
	}

	componentDidMount() {
		this.setState({
			radioValue: this.props.checkedValue
		});
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.checkedValue !== this.props.checkedValue) {
			this.setState({
				radioValue: nextProps.checkedValue
			});
		}
	}

	handleChange(e) {
		const { onChange } = this.props;

		this.setState({
			radioValue: e.target.value
		}, (e) => {
			'function' === typeof onChange && onChange(e);
		});
	}


	render() {
		const { radioData, radioName, radioType, radioClass, className, ...props } = this.props;
		const { radioValue } = this.state;

		const cls = cx({
			[className]: className
		});

		const radioCls = cx({
			[radioClass]: radioClass
		});

		let component = (
			radioData.map((item, index) => {
				return radioType === 'cell' ?
						<label key={`${radioName}_${index}`}
						       className={`fm-list-item ${radioCls}`}>
							<div className="fm-list-content">{item.label}</div>
							<Checkbox type='radio'
							          name={radioName}
							          value={item.value}
							          disabled={item.disabled || false}
							          checked={item.value == radioValue}
							          onChange={this.handleChange.bind(this)}/>
						</label> :
						<Checkbox type='radio'
						          key={`${radioName}_${index}`}
						          className={radioCls}
						          name={radioName}
						          stylesheet={radioType}
						          label={item.label}
						          value={item.value}
						          disabled={item.disabled || false}
						          checked={item.value == radioValue}
						          onChange={this.handleChange.bind(this)}/>

			})
		);

		return (
			<div {...props} className={cls}>
				{component}
			</div>
		)
	}
}