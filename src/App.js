import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

const API_URL = 'https://rickandmortyapi.com/api/character/?page=1'

class App extends Component {
  constructor() {
    super();

    this.state = {
      characters : [],
      searchField: '',
      hasNextPage: null,
      hasPrevPage: null
    };

  }

  changeAPILinkNext = () => {
    return this.state.hasNextPage ? this.state.hasNextPage : API_URL 
  }

  changeAPILinkPrev = () => {
    return this.state.hasPrevPage ? this.state.hasPrevPage : API_URL 
  }

  fetchAPIInformationNext = () => {
    fetch(this.changeAPILinkNext())
      .then(response => response.json())
      .then(data => {
        this.setState({characters: data.results, hasNextPage: data.info.next, hasPrevPage:data.info.prev})
      })
  }

  fetchAPIInformationPrev = () => {
    fetch(this.changeAPILinkPrev())
      .then(response => response.json())
      .then(data => {
        this.setState({characters: data.results, hasNextPage: data.info.next, hasPrevPage:data.info.prev})
    })
  }


  componentDidMount() {
    this.fetchAPIInformationNext()
  }

  searchByName = (name) => {
    fetch('https://rickandmortyapi.com/api/character/?name=' + name)
      .then(response => response.json())
      .then(data => {
        this.setState({
          searchField: name,
          hasNextPage: data.info && data.info.next ? data.info.next : null,
          characters: data.results ? data.results : []
        })
      })
  }

  render() {
    const { characters, hasNextPage, hasPrevPage } = this.state;

    return (
      <div className="App">
        <h1 className='title'>Rick and Morty<br />Characters</h1>
        <SearchBox
          placeholder = 'Search characters'
          handleChange={e =>  this.searchByName(e.target.value)}
        />

        <CardList characters={characters}/>
        {
          hasPrevPage && (
            <button 
            onClick={() => this.fetchAPIInformationPrev()}
            className = 'button'
            >
              Previous
            </button>
          )
        }
        {
          hasNextPage && (
            <button 
            onClick={() => this.fetchAPIInformationNext()}
            className = 'button'
            >
              Next
            </button>
          )
        }
      </div>
    );
  }
}

export default App;
