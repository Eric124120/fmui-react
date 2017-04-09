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
        if (nextProps.value !== this.props.value || nextProps.checked !== this.props.checked) {
            this.setState({
                value: nextProps.value,
                isChanged: true,
                isChecked: nextProps.checked
            }, () => {
                this.context.validateState(this.props.name);
            });
        }
    }

    componentWillUnmount() {
        this.context.unregister(this);
    }


    onChange = (event) => {
        // 防止type=radio的值没改变，也会触发onChage事件，造成的bug
        if(this.props.type === 'radio' && this.state.isChecked) {
            return false;
        }
        // type=radio，回显示bug
        if(this.props.type === 'radio') {
            let radioArray = this.context.components[this.props.name].others || [];
            radioArray.map((item, index) => {
                if(item.props.value !== this.props.value) {
                    item.props.checked = false;
                    item.state.isChecked = false;
                }
            })
        }

        // TODO: Refactor conditions
        const isChecked = this.state.isCheckbox ? !this.state.isChecked : true;
        const checkboxValue = isChecked ? event.target.value : '';
        const value = this.state.isCheckbox ? checkboxValue : event.target.value;


        event.persist();

        this.setState({
            value,
            isUsed: true,
            isChanged: true,
            isChecked
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
