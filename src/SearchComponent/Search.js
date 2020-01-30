import React from 'react';

import './Search.css';
import { Consumer } from '../context';



class Search extends React.Component { 

    state = {
        title : ''
    }

    handleChange(e) {
        this.setState({ title: e.target.value})
    }

    handleSumbmit(e) {
        e.preventDefault();
        let url = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${ this.state.title }&apikey=${process.env.REACT_APP_MM_KEY}`
        fetch(url)
            .then( res => res.json() )
            .then( data => console.log(data))
            .catch(err => console.log(err))
    }

    
    render () {
        return (
            <Consumer>
            { (value) => {
                return (
                    <div className='input-wrapper'>
                        <form action="" onSubmit={ (e)=> this.handleSumbmit(e) }>
                        <input 
                            type="text" 
                            id="input" 
                            className="input-track-title" 
                            placeholder="Search By Track Title" 
                            name='title' 
                            value={this.state.title}
                            onChange={ (e) => this.handleChange(e) }
                            autoComplete="off"
                        />
                        </form>
                    </div>
                )
            }}
            </Consumer>
        )
    }

}

export default Search;
