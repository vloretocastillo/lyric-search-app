import React from 'react';
// import './App.css';

class Lyrics extends React.Component {
    state = {
        track: {},
        lyrics: {}

    }

    getTrackInfo = () => {
        let url = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${ this.props.match.params.id }&apikey=${process.env.REACT_APP_MM_KEY}`
        fetch(url)
        .then( res => res.json() )
        .then( data => {
            this.setState({ track : data.message.body.track })
        })
        .catch(err => console.log(err))
    }

    getLyricsInfo = () => {
        let url = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${ this.props.match.params.id }&apikey=${process.env.REACT_APP_MM_KEY}`
        fetch(url)
        .then( res => res.json() )
        .then( data => {
            this.setState({ lyrics : data.message.body.lyrics })
        })
        .catch(err => console.log(err))
    }

    componentDidMount() {
        this.getLyricsInfo()
        this.getTrackInfo()

        console.log(this.state.lyrics)
        console.log(this.state.track)

    }
    render () {
        return (
            <h1>
                lycs
            </h1>
        )
    }
}

export default Lyrics