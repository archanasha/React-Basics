import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { Search } from './components/search/search.component';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchParam: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = e => {
    this.setState({ searchParam: e.target.value })
  }

  render() {

    const { monsters, searchParam } = this.state;
    const filteredData = monsters.filter(monster => monster.name.toLowerCase().includes(
      searchParam.toLowerCase()));

    return (
      <div className="App">
        <h1>Mosnters Rolodex</h1>
        <Search placeholder='search monsters'
          handleChange={this.handleChange} />
        <CardList monsters={filteredData}>
        </CardList>
      </div>
    );
  }
}

export default App;
