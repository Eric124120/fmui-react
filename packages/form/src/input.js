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


export default class Input extends Base {
    static propTypes = {
        validations: PropTypes.arrayOf(PropTypes.string),
        inputClass: PropTypes.string,
        containerClassName: PropTypes.string
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
            value: props.value,
            isChanged: !!props.value,
            isUsed: false,
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
            inputClass,
            containerClassName,
            ...rest } = this.props;
        // TODO: Refactor conditions
        const isFocus = this.state.isFocus;
        const isInvalid = this.state.isUsed
            && this.state.isChanged
            && !!this.context.errors[this.props.name];
        const value = this.state.value;
        const error = isInvalid && this.context.errors[this.props.name][0];
        let hint = null;
        let tip = null;
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



        return (

            <CellItemControl className = {cx({
                'fm-input-autoclear': isFocus,
                'fm-validate': !!error,
                [containerClassName]: !!containerClassName,
                [className]: !!className,
            })}>
                <input
                    {...rest}
                    value={value}
                    className={cx({
                        [inputClass]: !!inputClass,
                        'fm-validate-red': !!error
                    })}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    onFocus={this.onFocus}
                />
                {clear}
                {tip}
                {hint}
            </CellItemControl>
        );
    }
}
