import { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Search from '../../search'
import './tab.scss'

export default class Tab extends Component {
	constructor(prop) {
		super(prop)

		this.state = {
			currentIndex: 0
		}

	}

	static propTypes = {
		searchHandle: PropTypes.node,
		onSelect: PropTypes.fun,
		type: PropTypes.oneOf(['normal', 'bottom']),
	}

	static defaultProps = {
		searchHandle: null,
		onSelect: null,
		type: 'normal',
	}

	handlSelect(currentIndex) {
		const { onSelect } = this.props;

		this.setState({
			currentIndex: currentIndex
		}, () => {
			'function' === typeof onSelect && onSelect(currentIndex);
		});
	}

	titleCls(index) {
		return index === this.state.currentIndex ?
				'fm-tabs-tab selected' :
				"fm-tabs-tab";
	}

	itemCls(index) {
		return index === this.state.currentIndex ?
				'fm-tabs-panel selected' :
				"fm-tabs-panel";
	}

	render() {

		const {index, type, searchHandle, className, children, ...others} = this.props;
		const cls = classNames({
			['fm-tabs']: true,
			['fm-tabs-' + type]: !!type,
			[className]: !!className
		});


		return(
			<div className={cls} {...others} index={index}>
				<div className="fm-tabs-nav">
					{children.map( (title, idx) => {
						return(
							<div key={"title_" + idx} className={this.titleCls(idx)} onClick={this.handlSelect.bind(this, idx)}>
								{title.props.name}
							</div>
						)
					})}
				</div>
				{
					searchHandle &&
					<Search searchSubmit={searchHandle}/>
				}
				<div className="fm-tabs-content">
					{children.map( (item, idx) => {
						return(
							<div key={"content_" + idx} className={this.itemCls(idx)}>
								{item}
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}