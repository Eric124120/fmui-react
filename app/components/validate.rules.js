import React from 'react';
import validator from 'validator';
import Form from '../../packages/form';

const { Hint } = Form;


Object.assign(Form.rules, {
	number: {
		rule: value => validator.isNumeric(value + ''),
		hint: (value, components, name) => <Hint massage='请输入数字'/>
	}
});