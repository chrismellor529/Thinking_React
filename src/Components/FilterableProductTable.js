import React from "react";
import Searchbar from "./Searchbar.js";
import ProductTable from "./ProductTable.js";

class FilterableProductTable extends React.Component{
    render() {
        return (
            <div>
                <Searchbar/>
                <ProductTable products={this.props.products}/>
            </div>
        );
    }
}

export default FilterableProductTable;
