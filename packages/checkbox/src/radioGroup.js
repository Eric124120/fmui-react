/**
 * Created by huangchengwen on 17/4/11.
 */
import React, {Component, PropTypes} from 'react';
import {findDOMNode, cloneElement} from 'react-dom';
import cx from 'classnames';

import Checkbox from '../../../packages/checkbox';


export default class RadioGroup extends Component {
	constructor(prop) {
		super(prop);
		// 生成随机name域（form 组件取值处理时会过滤掉，只会去隐藏域的值）
		let timestamp = new Date().getTime();

		this.state = {
			radioValue: '',
			hiddenName: `hidden_name_${timestamp}`
		}
	}

	static propTypes = {
		radioData: PropTypes.array,
		radioName: PropTypes.string,
		radioType: PropTypes.oneOf(['normal', 'rect', 'cell']),
		radioClass: PropTypes.string,
		onChange: PropTypes.func,
		radioChange: PropTypes.func,
		checkedValue: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
		validations: PropTypes.arrayOf(PropTypes.string)
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
		const {onChange, radioChange} = this.props;

		this.setState({
			radioValue: e.target.value
		}, () => {
			'function' === typeof onChange && onChange(e);
			// 诊断form组件的onChange
			'function' === typeof radioChange &&
					radioChange(Object.assign(e, {target: this.hiddenInput}));
		});
	}


	render() {
		const {radioData, radioName, radioType, radioClass, className, validations} = this.props;
		const {radioValue, hiddenName} = this.state;

		const cls = cx({
			[className]: className
		});

		const radioCls = cx({
			[radioClass]: radioClass
		});

		let component = (
			radioData.map((item, index) => {
				return radioType === 'cell' ?
					<label key={`${hiddenName}_${index}`}
					       className={`fm-list-item ${radioCls}`}>
						<div className="fm-list-content">{item.label}</div>
						<Checkbox type='radio'
						          name={hiddenName}
						          value={item.value}
						          disabled={item.disabled || false}
						          checked={item.value == radioValue}
						          onChange={this.handleChange.bind(this)}/>
					</label> :
					<Checkbox type='radio'
					          key={`${hiddenName}_${index}`}
					          className={radioCls}
					          name={hiddenName}
					          stylesheet={radioType}
					          label={item.label}
					          value={item.value}
					          disabled={item.disabled || false}
					          checked={item.value == radioValue}
					          onChange={this.handleChange.bind(this)}/>

			})
		);

		return (
			<div className={cls}>
				<input ref={name => this.hiddenInput = name}
					   type="hidden"
				       name={radioName}
				       value={radioValue}
				       validations={validations}/>
				{component}
			</div>
		)
	}
}