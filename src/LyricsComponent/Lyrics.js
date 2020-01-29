import React from 'react';
import Loader from '../LoaderComponent/Loader';
import './Lyrics.css'
import { Link } from 'react-router-dom'


class Lyrics extends React.Component {
    state = {
        track: {},
        lyrics: {}
    }

    getTrackInfo = () => {
        let url = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${ this.props.match.params.id }&apikey=${process.env.REACT_APP_MM_KEY}`
        fetch(url)
        .then( res => res.json() )
        .then( data => { this.setState({ track : data.message.body.track }) })
        .catch(err => console.log(err))
    }

    getLyricsInfo = () => {
        let url = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${ this.props.match.params.id }&apikey=${process.env.REACT_APP_MM_KEY}`
        fetch(url)
        .then( res => res.json() )
        .then( data => { this.setState({ lyrics : data.message.body.lyrics }) })
        .catch(err => console.log(err))
    }

    componentDidMount() {
        this.getLyricsInfo()
        this.getTrackInfo()
    }

    render () {

        const { track, lyrics } = this.state
        let UIComponent
        if( track === undefined || lyrics === undefined || Object.keys(track).length === 0 || Object.keys(lyrics).length === 0) {
            UIComponent = <Loader />
        }
        else {
            console.log(track)
            UIComponent = (
                

            <div className='card-panel teal accent-4 lyriccomponent-item'>
                <h6>{ track.track_name } by { track.artist_name }</h6>

                <p>{lyrics.lyrics_body}</p>
                {/* <span className='icons'><ion-icon name="play-circle" className="icon"></ion-icon></span> Track: { props.title }
                <br/>
                <span className='icons'><ion-icon name="albums" className="icon"></ion-icon></span> Album: { props.album }
                <br/> */}
            
            </div>
            )
        }

        return (
            <div className='lyricscomponent-container'>
                <Link 
                    to='/'
                    className='btn #7c4dff deep-purple accent-2 '>
                    Go Back
                </Link> 
                {UIComponent}
            </div>
        )
    }
}

export default Lyrics