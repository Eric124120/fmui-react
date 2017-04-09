/**
 * Created by huangchengwen on 17/1/3.
 */
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
			<div className="fm-search">
				<div className="fm-search-input">
					<div className="fm-icon-search-wrapper">
						<span className="fm-icon-search"></span>
					</div>
					<input className="fm-search-text" type="search" placeholder="搜索" onFocus={this.searchFocus.bind(this)}/>
				</div>
				<div className="fm-search-btn" style={{display: isSearch ? 'block' : 'none'}}>
					<button type="button" onClick={this.searchSubmit.bind(this)}>搜索</button>
				</div>
			</div>
		)
	}
}