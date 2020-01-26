import React from 'react';
import { Consumer } from '../context';
import Loader from '../LoaderComponent/Loader';


class Tracks extends React.Component {


    render () {
        return (
            <Consumer>
            { (value) => {
                console.log(value)
                let UIComponent
                if (value.track_list.length == 0) {
                    UIComponent = <Loader />
                } else {
                    UIComponent = <div  >hi</div>
                }
                
                
                return (
                    UIComponent
                )
            } }
            </Consumer>
        )
    }
}

export default Tracks;
