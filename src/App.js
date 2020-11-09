import React from 'react';
import Header from './Header/Header';
import './App.css';
import Search from './Search/Search';
import Filter from './Filter/Filter';
import BookList from './BookList/BookList';


const BOOKS = [
  {title:'random title1', description:'random description', price:'$35.00', cover:'https://nice-assets.s3-accelerate.amazonaws.com/smart_templates/e639b9513adc63d37ee4f577433b787b/assets/wn5u193mcjesm2ycxacaltq8jdu68kmu.jpg'},{title:'random title2', description:'random description', price:'$15.00', cover:'https://nice-assets.s3-accelerate.amazonaws.com/smart_templates/e639b9513adc63d37ee4f577433b787b/assets/wn5u193mcjesm2ycxacaltq8jdu68kmu.jpg'},{title:'random title3', description:'random description', price:'$350.00', cover:'https://nice-assets.s3-accelerate.amazonaws.com/smart_templates/e639b9513adc63d37ee4f577433b787b/assets/wn5u193mcjesm2ycxacaltq8jdu68kmu.jpg'}
];


class App extends React.Component {

  fetchBookResults(searchTerm, printType, bookType) {
    
  }
  render() {
    return(
      <>
        <Header />
        <Search />
        <Filter />
        <BookList books={BOOKS} />
      </>
    )
    
  }
}

export default App;
