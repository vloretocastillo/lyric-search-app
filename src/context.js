import React from 'react';
const Context = React.createContext()

export class Provider extends React.Component {

    state = {
        track_list : [
            {track : { trackname: 'abc'} },
            {track : { trackname: 'abc'} },
        ], 
        heading : 'Top 10 tracks'
    }


    render () {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;