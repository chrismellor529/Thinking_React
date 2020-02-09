import React from "react";

class Searchbar extends React.Component{
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }
    handleFilterTextChange(e){
        this.props.onFilterTextChange(e.target.value);
    }
    handleInStockChange(e) {
        this.props.onInStockChange(e.target.checked);
    }

    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        return (
            <form className="search-bar">
                <input type="text" placeholder="Search..." value={filterText} onChange={this.handleFilterTextChange}/>
                <p>
                    <input type="checkbox" checked={inStockOnly} onChange={this.handleInStockChange}/>
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}
export default Searchbar;