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
		// 生成随机name域（form 组件取值处理时会过滤掉，只会去隐藏域的值）
		let timestamp = new Date().getTime();

		this.state = {
			checkedDefault: [],
			hiddenName: `hidden_name_${timestamp}`
		}
	}

	static propTypes = {
		checkboxData: PropTypes.array,
		checkboxName: PropTypes.string,
		checkboxType: PropTypes.oneOf(['normal', 'rect', 'cell']),
		checkboxClass: PropTypes.string,
		onChange: PropTypes.func,
		checkboxChange: PropTypes.func,
		checkedDefault: PropTypes.array,
		validations: PropTypes.arrayOf(PropTypes.string)
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
				checkedDefault: 'string' === typeof nextProps.checkedDefault ?
									nextProps.checkedDefault ?
									nextProps.checkedDefault.split(',') :
									[]:
									nextProps.checkedDefault
			});
		}
	}

	handleChange(e) {

		const { value, checked } = e.target;
		const { onChange, checkboxChange } = this.props;
		let { checkedDefault } = this.state;

		if(checked && checkedDefault.indexOf(value) == -1) {
			checkedDefault.push(value);
		} else {
			checkedDefault = checkedDefault.filter( i => i !== value);
		}

		this.setState({
			checkedDefault: checkedDefault
		}, () => {

			'function' === typeof onChange && onChange(e);
			'function' === typeof checkboxChange &&
					checkboxChange(Object.assign(e, {target: this.hiddenInput}));

		});
	}


	render() {
		const { checkboxData, checkboxName, checkboxType, checkboxClass, className, validations } = this.props;
		let { checkedDefault, hiddenName } = this.state;



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
						          name={hiddenName}
						          value={item.value}
						          disabled={item.disabled || false}
						          checked={checkedDefault.indexOf(`${item.value}`) !== -1}
						          onChange={this.handleChange.bind(this)}/>
					</label> :
					<Checkbox type='checkbox'
					          key={`${checkboxName}_${index}`}
					          className={checkboxCls}
					          name={hiddenName}
					          stylesheet={checkboxType}
					          label={item.label}
					          value={item.value}
					          disabled={item.disabled || false}
					          checked={checkedDefault.indexOf(`${item.value}`) !== -1}
					          onChange={this.handleChange.bind(this)}/>

			})
		);

		return (
			<div className={cls}>
				<input ref={name => this.hiddenInput = name}
				       type="hidden"
				       name={checkboxName}
				       value={checkedDefault.join(',')}
				       validations={validations}/>
				{component}
			</div>
		)
	}
}