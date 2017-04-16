import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import Base from './base';

import {RadioGroup} from '../../checkbox';



export default class Radio extends Base {
	static propTypes = {
		radioData: PropTypes.arrayOf(PropTypes.object),
		validations: PropTypes.arrayOf(PropTypes.string),
		radioName: PropTypes.string,
		radioType: PropTypes.oneOf(['normal', 'rect', 'cell']),
		radioClass: PropTypes.string
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
			value: this.props.checkedValue
		});
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.checkedValue !== this.props.checkedValue) {
			this.setState({
				value: nextProps.checkedValue
			});
		}
	}

	render() {
		const {
			radioData,
			radioName,
			radioType,
			className,
			radioClass,
			validations,
			...rest } = this.props;
		// TODO: Refactor conditions

		return (
			<RadioGroup {...rest}
						radioData={radioData}
			            radioName={radioName}
			            radioType={radioType}
			            className={className}
			            validations={validations}
			            checkedValue={this.state.value}
			            radioClass={radioClass}
			            radioChange={this.onChange}/>
		);
	}
}
