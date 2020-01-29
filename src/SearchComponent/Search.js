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
                return (
                    <div className='input-wrapper'>
                        <input type="text" id="input" className="input-track-title" placeholder="Search By Track Title" />
                    </div>
                )
            }}
            </Consumer>
        )
    }

}

export default Search;
