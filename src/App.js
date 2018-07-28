import React, { Component } from 'react';
import './App.css';
import ListContainer from './Components/ListContainer'
import AddItem from './Components/AddItem'
import Search from './Components/Search'

class App extends Component {
  state = {
    items: [],
    searchList : [],
    searchText : ""
  }

  itemAdded = (item) => {
    let items = this.state.items
    items.push(item)
    this.setState({items})
  }

  itemDeleted = (item) => {
    let items = this.state.items
    let deletedItemIndex = items.indexOf(item)
    items.splice(deletedItemIndex, 1 )
    this.setState({items})
  }

  filterList = (searchText) => {
      let items = this.state.items
      this.setState({searchText})
      let searchList = items.filter((item) => {return item.includes(searchText)})
      this.setState({searchList})
  }

  render() {
    let itemsToRender = this.state.searchText === "" ? this.state.items : this.state.searchList
    return (
      <div className="App">
        <div className="appContainer">
          <Search filterList = {this.filterList}/>
          <ListContainer items = {itemsToRender} itemDeleted = {this.itemDeleted} isSearched = {this.state.searchText === "" ? false : true}/>
          <AddItem itemAdded = {this.itemAdded}/>
        </div>
      </div>
    );
  }
}

export default App;
