import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import Button from './button';
import Input from './input';
import Select from './select';
import Textarea from './textarea';
import rules from './utils/rules';


export default class Form extends Component {
    static propTypes = {
        children: PropTypes.node
    };

    static childContextTypes = {
        register: PropTypes.func.isRequired,
        unregister: PropTypes.func.isRequired,
        validateState: PropTypes.func.isRequired,
        components: PropTypes.objectOf(PropTypes.oneOfType([
            PropTypes.instanceOf(Button),
            PropTypes.instanceOf(Input),
            PropTypes.instanceOf(Select),
            PropTypes.instanceOf(Textarea)
        ])),
        errors: PropTypes.objectOf(PropTypes.array)
    };

    constructor(props) {
        super(props);

        this.components = {};

        this.state = {
            errors: {}
        };
    }

    getChildContext() {
        return {
            register: this.register,
            unregister: this.unregister,
            validateState: this.validateState,
            components: this.components,
            errors: this.state.errors
        };
    }

    componentDidMount() {
        this.validateState();
    }

    getErrors = () => Object.keys(this.components).reduce((prev, name) => {
        const component = this.components[name];
        const validations = component.props.validations;
        const length = validations ? validations.length : 0;


        if( !!component.others ) {
            if(!this.getOtherErrors.call(this, component)) {
                prev[name] = validations;
            }
        } else {

            for (let i = 0; i < length; i += 1) {
                if ( !rules[validations[i]].rule(component.state.value, this.components) ) {

                    prev[name] = prev[name] || [];
                    prev[name].push(validations[i]);

                }
            }
        }

        return prev;
    }, {});

    /**
     * 多个checkbox或radio，按照第一个设置的规则匹配；
     * 只要有一个符合就匹配通过
     * @param component
     * @param prev
     * @returns {boolean}
     */
    getOtherErrors(component) {
        let flag = false;
        component.others.map( (item, index) => {
            const validations = component.props.validations;
            const length = validations ? validations.length : 0;

            for (let i = 0; i < length; i++) {
                if ( rules[validations[i]].rule(item.state.value, this.components) ) {
                    flag = true;

                    return false;
                }
            }

        });

        return flag;
    }

    register = (component) => {

        // this.components[component.props.name] = component;
        if(component.state.isCheckbox) {
            if(!this.components[component.props.name]) {
                this.components[component.props.name] = component;
                this.components[component.props.name].others = []
            }
            this.components[component.props.name].others.push(component);
        } else {
            this.components[component.props.name] = component;
        }

    };

    unregister = (component) => {
        const errors = Object.assign({}, this.state.errors);

        delete this.components[component.props.name];
        delete errors[component.props.name];

        this.setState({ errors });
    };

    validateState = () => {
        const errors = this.getErrors();

        this.setState({ errors });
    };

    validate = (name) => {
        this.components[name].setState({
            isUsed: true,
            isChanged: true
        }, this.validateState);
    };

    validateAll() {
        Object.keys(this.components).forEach((name) => {
            this.components[name].setState({
                isUsed: true,
                isChanged: true
            });
        });

        return this.getErrors();
    }

    validateForm() {
        if(Object.keys(this.validateAll()).length > 0) {
            return false;
        } else {
            return true;
        }
    }

    showError = (name, error) => {
        this.components[name].setState({
            isUsed: true,
            isChanged: true
        }, () => {
            this.setState({
                errors: {
                    ...this.state.errors,
                    [name]: [error]
                }
            });
        });
    };

    hideError = (name) => {
        const errors = Object.assign({}, this.state.errors);

        delete errors[name];

        this.setState({ errors });
    };

    serializeArray = function() {

       /* let name, type, result = [],
                form = findDOMNode(this),
                formElements = form.elements || [],
                add = function(value) {
                    if (value.forEach) return value.forEach(add)
                    result.push({ name: name, value: value })
                }

        if (form) {
            this.each(formElements, function(_, field) {
                type = field.type;
                name = field.name;
                if (name && field.nodeName && field.nodeName.toLowerCase() != 'fieldset' &&
                        !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' &&
                        ((type != 'radio' && type != 'checkbox') || field.checked))
                    add(field.value)
            });
        }

        return result*/

        let form = findDOMNode(this);

        return serializeFormArray(form)

    }

    serializeJson() {
        let result = {};
        this.serializeArray().forEach(function(elm){
            result[encodeURIComponent(elm.name)] = encodeURIComponent(elm.value);
        });

        return result;
    }

    serializeFormData() {
        let formData  = new FormData();
        this.serializeArray().forEach(function(elm){
            formData.append(encodeURIComponent(elm.name), encodeURIComponent(elm.value));
        });
        return formData;
    }

    serialize() {
        let result = []
        this.serializeArray().forEach(function(elm){
            result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value))
        })
        return result.join('&')
    }

    each(elements, callback) {

        if( elements instanceof Array ) {
            for(let i = 0, len = elements.length; i < len; i++) {
                if (callback.call(elements[i], i, elements[i]) === false) return elements;
            }
        } else {
            for(let key in elements){
                if(callback.call(elements[key], key, elements[key]) === false) return elements;
            }
        }
    }

    render() {
        return (
                <form {...this.props}>
                    {this.props.children}
                </form>
        );
    }
}

//获取指定form中的所有的<input,textarea>对象
function getElements(formElement) {
    var form = formElement;
    var elements = new Array();
    var tagElements = form.querySelectorAll('input,textarea,select');

    for (var j = 0; j < tagElements.length; j++){
        elements.push(tagElements[j]);

    }
    return elements;
}

//获取单个input中的【name,value】数组
function inputSelector(element) {
    if (element.checked)
        return {name: element.name, value: element.value};
}

function input(element) {
    switch (element.type.toLowerCase()) {
        case 'number':
        case 'hidden':
        case 'password':
        case 'text':
        case 'textarea':
        case 'date':
        case 'select-one':
            return element.name ? {name:element.name, value:element.value} : false;
        case 'checkbox':
        case 'radio':
            return element.name ? inputSelector(element) : false;
    }
    return false;
}


//调用方法
function serializeFormArray(formElement) {
    var elements = getElements(formElement);
    var queryComponents = new Array();

    for (var i = 0; i < elements.length; i++) {
        var queryComponent = input(elements[i]);
        if (queryComponent)
            queryComponents.push(queryComponent);
    }

    return queryComponents;
}

