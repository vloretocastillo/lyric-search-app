import React from 'react';
const Context = React.createContext()

export class Provider extends React.Component {

    state = {
        track_list : [], 
        heading : 'Top 10 tracks'
    }

    componentDidMount() {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=nl&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`, {
            // method: 'GET',
            // contentType: 'application/json',
            // mode: 'no-cors'
        })
        .then( res => res.json() )
        .then( data => {
            this.setState({ track_list : data.message.body.track_list })
        })
        .catch(err => console.log(err))
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