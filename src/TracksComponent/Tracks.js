import React from 'react';
import { Consumer } from '../context';
import Loader from '../LoaderComponent/Loader';
import Track from '../TrackComponent/Track';
import './Tracks.css';




class Tracks extends React.Component {


    render () {
        return (
            <Consumer>
            { (value) => {
                let { track_list, heading } = value
                let UIComponent
                if (track_list.length === 0) {
                    UIComponent = <Loader />
                } else {
                    let tracks = track_list.map(el => {
                        {/* let { track } = el */}
                        let {track_name, track_id, album_name, artist_name, primary_genres } = el.track
                        let { music_genre_list } = primary_genres
                        let genres = music_genre_list.map(el => el.music_genre.music_genre_name )
                        {/* console.log(track, genres) */}
                        return <Track key={track_id} id={track_id} title={ track_name } album={ album_name } artist={ artist_name } genres={ genres }/>
                    })

                    UIComponent = (
                        <div className='trackscomponent-container'>
                            <h2>{ heading }</h2>
                            {tracks}
                        </div>
                    )
                }
                
                
                return (
                    <React.Fragment>
                        {UIComponent}
                    </React.Fragment>
                )
            } }
            </Consumer>
        )
    }
}

export default Tracks;
