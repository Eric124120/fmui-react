/**
 * Created by huangchengwen on 17/4/11.
 */
import React, { Component, PropTypes } from 'react';
import { findDOMNode, cloneElement } from 'react-dom';
import cx from 'classnames';

import Checkbox from '../../../packages/checkbox';



export default class CheckboxGroup extends Component {
	constructor(prop) {
		super(prop);

		this.state = {
			checkedDefault: []
		}
	}

	static propTypes = {
		checkboxData: PropTypes.array,
		checkboxName: PropTypes.string,
		checkboxType: PropTypes.oneOf(['normal', 'rect', 'cell']),
		checkboxClass: PropTypes.string,
		onChange: PropTypes.fun,
		checkedDefault: PropTypes.array
	}

	static defaultProps = {
		checkboxData: [],
		checkboxName: '',
		checkboxType: 'normal',
		checkboxClass: '',
		checkedDefault: []

	}

	componentDidMount() {
		this.setState({
			checkedDefault: this.props.checkedDefault
		});
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.checkedDefault !== this.props.checkedDefault) {
			this.setState({
				checkedDefault: nextProps.checkedDefault
			});
		}
	}

	handleChange(e) {

		const { value, checked } = e.target;
		const { onChange } = this.props;
		let { checkedDefault } = this.state;

		if(checked && checkedDefault.indexOf(value) == -1) {
			checkedDefault.push(value);
		} else {
			checkedDefault = checkedDefault.filter( i => i !== value);
		}

		this.setState({
			checkedDefault: checkedDefault
		}, (e) => {
			'function' === typeof onChange && onChange(e);
		});
	}


	render() {
		const { checkboxData, checkboxName, checkboxType, checkboxClass, className, ...props } = this.props;
		let { checkedDefault } = this.state;



		const cls = cx({
			[className]: className
		});

		const checkboxCls = cx({
			[checkboxClass]: checkboxClass
		});

		let component = (
			checkboxData.map((item, index) => {
				return checkboxType === 'cell' ?
					<label key={`${checkboxName}_${index}`}
					       className={`fm-list-item ${checkboxCls}`}>
						<div className="fm-list-content">{item.label}</div>
						<Checkbox type='checkbox'
						          name={checkboxName}
						          value={item.value}
						          disabled={item.disabled || false}
						          checked={checkedDefault.indexOf(`${item.value}`) !== -1}
						          onChange={this.handleChange.bind(this)}/>
					</label> :
					<Checkbox type='checkbox'
					          key={`${checkboxName}_${index}`}
					          className={checkboxCls}
					          name={checkboxName}
					          stylesheet={checkboxType}
					          label={item.label}
					          value={item.value}
					          disabled={item.disabled || false}
					          checked={checkedDefault.indexOf(`${item.value}`) !== -1}
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