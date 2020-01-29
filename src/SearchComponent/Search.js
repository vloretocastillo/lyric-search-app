import React from 'react';

import './Search.css';
import { Consumer } from '../context';



class Search extends React.Component { 

    state = {
        title : ''
    }

    render () {
        return (
            <Consumer>
            { (value) => {
                return <h1>Search me</h1>
            }}
            </Consumer>
        )
    }

}

export default Search;
