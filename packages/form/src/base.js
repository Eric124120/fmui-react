import { Component, PropTypes } from 'react';
import noop from './utils/noop';

class Base extends Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func,
        onBlur: PropTypes.func
    };

    static contextTypes = {
        register: PropTypes.func.isRequired,
        unregister: PropTypes.func.isRequired,
        validateState: PropTypes.func.isRequired,
        components: PropTypes.objectOf(PropTypes.any),
        errors: PropTypes.objectOf(PropTypes.array)
    };
    


    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({
                value: nextProps.value,
                isChanged: true
            }, () => {
                this.context.validateState(this.props.name);
            });
        }
    }

    componentWillUnmount() {
        this.context.unregister(this);
    }


    onChange = (event) => {

        // TODO: Refactor conditions
        const value = event.target.value;

        event.persist();

        this.setState({
            value,
            isUsed: true,
            isChanged: true
        }, () => {
            this.context.validateState(this.props.name);

            (this.props.onChange || noop)(event);
        });

    };

    onBlur = (event) => {
        event.persist();

        this.setState({
            isUsed: true,
            isFocus: false
        }, () => {
            this.context.validateState(this.props.name);

            (this.props.onBlur || noop)(event);
        });


    };

    onFocus = (event) => {
        event.persist();

        this.setState({
            isFocus: true
        }, () => {
            this.context.validateState(this.props.name);
            
            (this.props.onFocus || noop)(event)

            
        });

    }

    onClear = (event) => {

        this.setState({
            value: '',
            isUsed: false,
            isFocus: false
        }, () => {
            this.context.validateState(this.props.name);

            (this.props.onChange || noop)(event);
        });
    }
}

export default Base;
