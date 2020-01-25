import React from 'react';
import { Consumer } from '../context';

class Tracks extends React.Component {


    render () {
        return (
            <Consumer>
            { (value) => {
                console.log(value)
                return <h1>hi</h1>
            } }
            </Consumer>
        )
    }
}

export default Tracks;
