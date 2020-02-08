import React from 'react';
import logo from './logo.svg';
import './App.scss';
import FilterableProductTable from "./Components/FilterableProductTable.js";

class App extends React.Component{
  render() {
    return (
        <div className="App">
          <h1>React Component Building</h1>
          <header className="App-header">
              <FilterableProductTable products={PRODUCTS}/>
          </header>

        </div>
    );
  }
}
const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
export default App;
