import React from 'react';
import Header from './Header/Header';
import './App.css';
import Search from './Search/Search';
import BookList from './BookList/BookList';


const BOOKS = [
  {id: 1, title:'random title1', description:'random description', price:'$35.00', cover:'https://nice-assets.s3-accelerate.amazonaws.com/smart_templates/e639b9513adc63d37ee4f577433b787b/assets/wn5u193mcjesm2ycxacaltq8jdu68kmu.jpg'},{id:2, title:'random title2', description:'random description', price:'$15.00', cover:'https://nice-assets.s3-accelerate.amazonaws.com/smart_templates/e639b9513adc63d37ee4f577433b787b/assets/wn5u193mcjesm2ycxacaltq8jdu68kmu.jpg'},{id:3, title:'random title3', description:'random description', price:'$350.00', cover:'https://nice-assets.s3-accelerate.amazonaws.com/smart_templates/e639b9513adc63d37ee4f577433b787b/assets/wn5u193mcjesm2ycxacaltq8jdu68kmu.jpg'}
];


class App extends React.Component {

  state = {
    books:[],
    searchTerm:'',
    loading:false,
    error:null
  }

  fetchBookResults(searchTerm, printType, bookType) {
    const apiKey = 'AIzaSyBOv743t053Kv1vW5VRRaWaK3zQHK6fkgU'
    this.setState( {
      loading:true
    });
    // need to fetch, baseURL- searchTerm-filters- options
    let baseURL = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&filter=${bookType}&printType=${printType}&key=${apiKey}`

    fetch(baseURL)
    .then(res => res.ok ? res.json() : Promise.reject("Couldn't get the data, Boss!"))
    .then(data => {
      console.log(data)
      this.setState( {
        loading:false
      })
    })
    .catch(error => this.setState({error, loading:false}));
  }
  handleSearchButton(event) {
    event.preventDefault();
    
    console.log('Search button clicked');
    
  }
  render() {
    return(
      <>
        <Header />
        <Search handleSearchButton={this.handleSearchButton} />
        <BookList books={BOOKS} />
      </>
    )
    
  }
}

export default App;
