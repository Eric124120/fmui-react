/**
 * Created by huangchengwen on 17/3/16.
 * 目前仅支持上拉加载数据
 * -----参数介绍--------
 * ScrollTarget：绑定scroll事件的容器
 * ScrollIsEnd：数据是否已经全部加载，false-为加载全，true-已经加载全部数据（停止滚动加载）
 * ScrollIsFetch: 数据是否处于请求中，false-非请求状态，true-请求状态（锁死请求）
 * ScrollSize：每次请求数据记录数
 * ScrollLastId：请求数据的起始标记
 * ScrollOnPopup：上拉加载函数
 * ScrollOnReload：下来刷新函数（未实现）
 * ScrollOffset：滚动加载，距离底部位置
 * -------end---------
 */
import React, { Component, PropTypes, cloneElement } from 'react';
import { findDOMNode } from 'react-dom';
import './scrollLoad.scss'
/*
import { getLeader } from '../../../actions/tools'*/

export default class ScrollLoad extends Component {
	constructor(prop) {
		super(prop);
	}

	static defaultProps = {
		ScrollTarget: 'body',
		ScrollIsEnd: false,
		ScrollIsFetch: false,
		ScrollSize: 15,
		ScrollLastId: -1,
		ScrollOnReload: null,
		ScrollOnPopup: null,
		ScrollOffset: 74
	}

	static propTypes = {
		ScrollTarget: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
		ScrollIsEnd: PropTypes.bool,
		ScrollIsFetch: PropTypes.bool,
		ScrollSize: PropTypes.number,
		ScrollLastId: PropTypes.string,
		ScrollOnReload: PropTypes.fun,
		ScrollOnPopup: PropTypes.fun,
		ScrollOffset: PropTypes.number
	}

	componentDidMount() {
		const  {
			ScrollTarget,
			ScrollOnReload,
			ScrollOnPopup,
			ScrollOffset,
			ScrollOnScroll
		} = this.props;

		const _this = this

		const targerDOM = 'string' === typeof ScrollTarget ?
				document.querySelector(ScrollTarget) : ScrollTarget;

		// 绑定scroll事件
		targerDOM && (targerDOM.onscroll = (e) => {

			/*_this.props.dispatch( getLeader( e.target.scrollTop ) )*/

			const { ScrollIsEnd, ScrollIsFetch } = this.props;

			let target = e.target,
				{ clientHeight, scrollTop, scrollHeight } = target;

			if( clientHeight + scrollTop + ScrollOffset > scrollHeight){

				if(ScrollIsEnd || ScrollIsFetch) return;

				'function' === typeof ScrollOnPopup && ScrollOnPopup();

			}

			'function' === typeof ScrollOnScroll && ScrollOnScroll(e)

		});

		//this.loadInit();

	}


	componentWillUnmount() {
		const  { ScrollTarget } = this.props;
		const targerDOM = 'string' === typeof ScrollTarget ?
				document.querySelector(ScrollTarget) : ScrollTarget;

		targerDOM.onscroll = null;
	}

	loadInit() {

		const { ScrollOnPopup } = this.props;

		'function' === typeof ScrollOnPopup && ScrollOnPopup();

	}

	render() {
		const {children, ...props} = this.props;

		let components = (
			React.Children.map(children, (child, i) => {
				return cloneElement(child, child.props);
			})
		);
		let moreComponent = <div className="ui-scroll-more">无更多记录</div>;

		if(this.props.ScrollIsEnd) {
			moreComponent = <div className="ui-scroll-more">无更多记录</div>;
		} else if(this.props.ScrollIsFetch) {
			moreComponent = <div className="ui-scroll-more">正在努力加载</div>;
		}

		return (
			<div ref="scrollLoad" {...props}>
				{components}
				{moreComponent}
			</div>
		)
	}
}