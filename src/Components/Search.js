import React,  {Component} from 'react'

class Search extends Component {
	state = {
		searchText : ""
	}

	filterList = (e) => {
		let searchText = e.target.value
		this.setState({searchText})
		this.props.filterList(searchText)
	}

	render() {
		return (
			<div className = "search">
				<label> Search Item: </label>
				<input placeholder = "Search Text" type="text" value={this.searchText} onChange={this.filterList}/>
			</div>
		)
	}
}

export default Search