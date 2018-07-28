import React, {Component} from 'react'
import ListRow from './ListRow'
import uniqueId from 'react-html-id'

class List extends Component {
	constructor(props) {
		super(props)
		uniqueId.enableUniqueIds(this) //Used to generate unique ids needed by the DOM elements
	}
	render() {

		let list = this.props.items.map((elem) => {
			return <ListRow key={this.nextUniqueId()} elem = {elem}  itemDeleted = {this.props.itemDeleted} isSearched={this.props.isSearched}/>
		})
		return (
			<ul>
				{list}
			</ul>
		)
	}
}

export default List