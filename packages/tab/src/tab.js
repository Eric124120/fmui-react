import { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Search from '../../search'
import './tab.scss'

export default class Tab extends Component {
	constructor(prop) {
		super(prop)

		this.state = {
			currentIndex: this.props.currentIndex
		}

	}

	static propTypes = {
		currentIndex: PropTypes.number,
		searchHandle: PropTypes.node,
		onSelect: PropTypes.func,
		type: PropTypes.oneOf(['normal', 'bottom']),
	}

	static defaultProps = {
		currentIndex: 0,
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
								<span>{title.props.name}</span>
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