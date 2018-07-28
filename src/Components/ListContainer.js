import React, {Component} from 'react'
import List from './List'

class ListContainer extends Component {
	render () {
		return (
			<div className="listContainer">
				<h3> TODO List </h3>
				<List items = {this.props.items} itemDeleted={this.props.itemDeleted} isSearched = {this.props.isSearched}/>
			</div>
		)
	}
}

export default ListContainer