import React, {Component} from 'react'

class ListRow extends Component {
	itemDeleted = (e) => {
		this.props.itemDeleted(e.target.previousSibling.nodeValue)
	}
	render () {
		return (
			<React.Fragment>
				<li>
					{this.props.elem}
					<input type="button" value="Delete" onClick={this.itemDeleted} disabled={this.props.isSearched}/>
				</li>
			</React.Fragment>
		)
	}
}

export default ListRow