/**
 * Created by huangchengwen on 17/1/3.
 */
import React from 'react'
import classNames from 'classNames'
import './search.scss'

export default class Search extends React.Component {
	constructor(prop){
		super(prop)

		this.state = {
			isSearch: false
		}
	}

	static propTypes = {
		searchSubmit: React.PropTypes.func
	}

	static defaultProps = {
		searchSubmit: null
	}

	searchFocus() {
		this.setState({ isSearch: true });
	}

	searchSubmit() {
		this.setState({ isSearch: false });

		'function' === typeof this.props.searchSubmit &&
			this.props.searchSubmit();
	}

	render() {
		const { isSearch } = this.state;

		return(
			<div className="ml-search">
				<div className="ml-search-input">
					<div className="ml-icon-search-wrapper">
						<span className="ml-icon-search"></span>
					</div>
					<input className="ml-search-text" type="search" placeholder="搜索" onFocus={this.searchFocus.bind(this)}/>
				</div>
				<div className="ml-search-btn" style={{display: isSearch ? 'block' : 'none'}}>
					<button type="button" onClick={this.searchSubmit.bind(this)}>搜索</button>
				</div>
			</div>
		)
	}
}