import React, { Component, PropTypes } from 'react';
import Btn from '../../button/index';
import cx from 'classnames';

export default class Button extends Component {
    static propTypes = {
        children: PropTypes.node,
        errorClassName: PropTypes.string,
        className: PropTypes.string
    };

    static contextTypes = {
        errors: PropTypes.objectOf(PropTypes.array)
    };

    render() {
        const { ...rest } = this.props;
        const isDisabled = Object.keys(this.context.errors).length;

        return (
            <Btn disabled={isDisabled}
              {...rest}
            >{this.props.children}</Btn>
        );
    }
}