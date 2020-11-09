import React from 'react';
import Header from './Header/Header';
import './App.css';
import Search from './Search/Search';
import BookList from './BookList/BookList';
import Loading from './Loading/Loading';


const BOOKS = [
  {id: 1, title:'random title1', description:'random description', price:'$35.00', cover:'https://nice-assets.s3-accelerate.amazonaws.com/smart_templates/e639b9513adc63d37ee4f577433b787b/assets/wn5u193mcjesm2ycxacaltq8jdu68kmu.jpg'},{id:2, title:'random title2', description:'random description', price:'$15.00', cover:'https://nice-assets.s3-accelerate.amazonaws.com/smart_templates/e639b9513adc63d37ee4f577433b787b/assets/wn5u193mcjesm2ycxacaltq8jdu68kmu.jpg'},{id:3, title:'random title3', description:'random description', price:'$350.00', cover:'https://nice-assets.s3-accelerate.amazonaws.com/smart_templates/e639b9513adc63d37ee4f577433b787b/assets/wn5u193mcjesm2ycxacaltq8jdu68kmu.jpg'}
];


class App extends React.Component {

  state = {
    books:[],
    search:'',
    printType:'',
    filter:'',
    loading:false,
    error:null
  }
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handlePrintTypeChange = this.handlePrintTypeChange.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleSearchButton = this.handleSearchButton.bind(this);
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
  handleSearchChange (event) {
    console.log('state changed');
    this.setState({search: event.target.value});
    
  }
  handlePrintTypeChange(event) {
    console.log('state changed');
    this.setState({printType:event.target.value});
  }
  handleFilterChange(event) {
    console.log('state changed');
    this.setState({filter:event.target.value});
  }
  handleSearchButton(event) {
    event.preventDefault();
    console.log('search button clicked');
    let searchTerm = this.state.search;
    let printType = this.state.printType;
    let bookType = this.state.filter;
    this.fetchBookResults(searchTerm, printType, bookType)
  }
  
  render() {

    if(this.state.loading) {
      return (
        <>
          <Header />
          <Search 
            onSearchChange={this.handleSearchChange}
            onPrintTypeChange={this.handlePrintTypeChange}
            onFilterChange={this.handleFilterChange}
            handleSearchButton={this.handleSearchButton} />
          <Loading />
        </>
      )
    } else {
        return(
          <>
            <Header />
            <Search 
              onSearchChange={this.handleSearchChange}
              onPrintTypeChange={this.handlePrintTypeChange}
              onFilterChange={this.handleFilterChange}
              handleSearchButton={this.handleSearchButton} />
            <BookList books={BOOKS} />
          </>
    )
    }
    
    
  }
}

export default App;
