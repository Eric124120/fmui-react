import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import './hint.scss'

class Hint extends Component {
	constructor(prop) {
		super(prop);

		this.state = {
			show: true
		}
	}

	static propTypes = {
		massage: PropTypes.string.isRequireds
	}

	static defaultProps = {
		massage: '必填项'
	}


	componentDidMount() {
		const node = findDOMNode(this);
		const parentNode = node.parentNode;
		const arrowNode = node.querySelector('.fm-validate-tooltip-arrow');
		const clearNode = parentNode.querySelector('.fm-list-clear');
		const nodeStyle = window.getComputedStyle(node, null);
		const claerStyle = window.getComputedStyle(clearNode, null);
		const arrowStyle = window.getComputedStyle(arrowNode, null);
		let arrowNodeLeft = parseFloat(nodeStyle.width) / 2 + 'px';

		if(arrowNode) {
			arrowNodeLeft =( clearNode.offsetLeft + parseFloat(claerStyle.paddingLeft) + parseFloat(claerStyle.width) / 2 - parseFloat(arrowStyle.width) / 2 ) + 'px';
		}

		arrowNode.style.left = arrowNodeLeft;

		setTimeout( () => this.setState( { show: false } ), 3000 );

	}


	render() {

		let { massage, ...rest } = this.props;

		let component = (
			<div className="fm-validate-tooltip" {...rest}>
				<i className="fm-validate-tooltip-arrow"></i>
				<div className="fm-validate-tooltip-content">{massage}</div>
			</div>
		);

		if(!this.state.show) {
			component = null
		}

		return component;
	}

}


export default Hint;