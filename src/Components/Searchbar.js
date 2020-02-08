import React from "react";

class Searchbar extends React.Component{
    render() {
        return (
            <form className="search-bar">
                <input type="text" placeholder="Search..."/>
                <p>
                    <input type="checkbox"/>
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}
export default Searchbar;