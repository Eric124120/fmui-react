/**
 * Created by huangchengwen on 17/4/12.
 */
import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import Base from './base';

import {CheckboxGroup} from '../../checkbox';



export default class Checkbox extends Base {
	static propTypes = {
		checkboxData: PropTypes.arrayOf(PropTypes.object),
		validations: PropTypes.arrayOf(PropTypes.string),
		checkboxName: PropTypes.string,
		checkboxType: PropTypes.oneOf(['normal', 'rect', 'cell']),
		checkboxClass: PropTypes.string
	};

	static contextTypes = {
		register: PropTypes.func.isRequired,
		unregister: PropTypes.func.isRequired,
		validateState: PropTypes.func.isRequired,
		components: PropTypes.objectOf(PropTypes.any),
		errors: PropTypes.objectOf(PropTypes.array)
	};

	constructor(props, context) {
		super(props, context);

		// TODO: Refactor conditions
		this.state = {
			value: props.checkedValue,
			isChanged: true,
			isUsed: true,
			isFocus: false
		};

		context.register(this);
	}

	componentDidMount() {
		this.setState({
			value: this.props.checkedDefault
		});
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.checkedDefault !== this.props.checkedDefault) {
			this.setState({
				value: nextProps.checkedDefault
			});
		}
	}

	render() {
		const {
			checkboxData,
			checkboxName,
			checkboxType,
			className,
			checkboxClass,
			validations,
			...rest } = this.props;
		// TODO: Refactor conditions

		return (
			<CheckboxGroup  {...rest}
							checkboxData={checkboxData}
							className={className}
							checkboxClass={checkboxClass}
							checkboxType={checkboxType}
							checkedDefault={this.state.value}
							checkboxName={checkboxName}
							validations={validations}
							checkboxChange={this.onChange}/>
		);
	}
}