import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import cx from 'classnames';
import rules from './utils/rules';
import Base from './base';
import Cell, {
    CellItemClear,
    CellItemControl,
    CellItemTip
} from '../../cell/index';
import CheckBox from '../../checkbox/index'


export default class Input extends Base {
    static propTypes = {
        validations: PropTypes.arrayOf(PropTypes.string).isRequired,
        errorClassName: PropTypes.string,
        containerClassName: PropTypes.string,
        errorContainerClassName: PropTypes.string
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

        const isCheckbox = !!(props.type === 'checkbox' || props.type === 'radio');
        const checkboxValue = props.checked ? props.value : '';

        // TODO: Refactor conditions
        this.state = {
            value: isCheckbox ? checkboxValue : props.value,
            isChanged: isCheckbox ? props.checked : !!props.value,
            isCheckbox,
            isUsed: isCheckbox,
            isChecked: isCheckbox ? !!props.checked : true,
            isFocus: false
        };

        context.register(this);
    }

    componentDidMount() {

    }

    render() {
        const {
            fmListTip,
            className,
            ...rest } = this.props;
        // TODO: Refactor conditions
        const isFocus = this.state.isFocus;
        const isInvalid = this.state.isUsed
            && this.state.isChanged
            && !!this.context.errors[this.props.name];
        const value = this.state.isCheckbox ? this.props.value : this.state.value;
        const error = isInvalid && this.context.errors[this.props.name][0];
        let hint = null;
        let tip = null;
        let component = null;
        let clear = null;

        if (isInvalid && isFocus) {
            hint = typeof error === 'function' ? error(value, this.context.components) : rules[error].hint(value, this.context.components, this.props.name);
        }

        if('undefined' !== typeof fmListTip) {
            tip = <CellItemTip>{fmListTip}</CellItemTip>
        }

        if(!this.props.disabled && !this.props.readOnly) {
            clear = <CellItemClear onClick={this.onClear}/>;
        }

        if(this.state.isCheckbox) {
            component = (
                <CheckBox
                    {...rest}
                    className = {cx({[className]: !!className})}
                    value={value}
                    checked={this.state.isChecked}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    onFocus={this.onFocus}
                    />
            )
        } else {
            component = (

            <CellItemControl className = {cx({
                'fm-input-autoclear': isFocus,
                'fm-validate': !!error
            })}>
                <input
                    {...rest}
                    value={value}
                    className={cx({
                        [className]: !!className,
                        'fm-validate-red': !!error
                    })}
                    checked={this.state.isChecked}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    onFocus={this.onFocus}
                />
                {clear}
                {tip}
                {hint}
            </CellItemControl>
            )
        }

        return component;
    }
}
