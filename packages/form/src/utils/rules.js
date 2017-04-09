import validator from 'validator'; 
import Hint from '../hint/hint'

export default {
	 api: {
        hint: value => (
            <button
                className="form-error is-visible"
            >
                API Error on "{value}" value. Focus to hide.
            </button>
        )
    },

    required: {
        rule: value => typeof value === 'undefined' ? ('').trim() : value.toString().trim(),
        hint: () => <Hint massage='必填项'/>
    },

    phone: {
        rule: value => validator.isMobilePhone(value, 'zh-CN'),
        hint: (value, components, name) => <Hint massage='请输入正确的手机号'/>
    },

    email: {
        rule: value => validator.isEmail(value),
        hint: (value, components, name) => <Hint massage={ components[name].props.placeholder}/>
    },

    alpha: {
        rule: value => validator.isAlpha(value),
        hint: () => (
            <span className="form-error is-visible">
                String should contain only letters (a-zA-Z).
            </span>
        )
    },

    number: {
        rule: value => validator.isNumeric(value),
        hint: (value, components, name) => <Hint massage='请输入数字'/>
    },

    password: {
        rule: (value, components) => {
            const password = components.password.state;
            const passwordConfirm = components.passwordConfirm.state;
            const isBothUsed = password
                && passwordConfirm
                && password.isUsed
                && passwordConfirm.isUsed;
            const isBothChanged = isBothUsed && password.isChanged && passwordConfirm.isChanged;

            if (!isBothUsed || !isBothChanged) {
                return true;
            }

            return password.value === passwordConfirm.value;
        },
        hint: () => <span className="form-error is-visible">Passwords should be equal.</span>
    },

    vehicleNumber: {
        rule: (value) => {
            let result = false 
            if (value.length == 7) {
                let express = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
                result = express.test(value)
            }

            return result
        },

        hint: () => <Hint massage='请输入正确的车牌号'/>
    }
}
