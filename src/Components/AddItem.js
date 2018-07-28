import React, {Component} from 'react'

class AddItem extends Component {
	state = {
		inputValue : ""
	}
	inputValueChanged = (e) => {
		this.setState({inputValue: e.target.value})
	}
	
	keyUp = (e) => {
		if (e.keyCode === 13) {
			if (this.state.inputValue !== "") {
				this.props.itemAdded(this.state.inputValue)
				this.setState({inputValue: ""})
			}
		}
	}
	render() {
		return (
			<div className = "addContainer">
				<input type = "text" placeholder = "Add Item" value={this.state.inputValue} onChange={this.inputValueChanged} onKeyUp = {this.keyUp}/>
			</div>
		)
	}
}

export default AddItem