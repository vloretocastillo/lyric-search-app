
import React from 'react'
import './Track.css';
import { Link } from 'react-router-dom'



const Track = (props) => {



    return (
        <div className='card-panel teal accent-4 trackcomponent-item'>
            <h6>{ props.artist } </h6>
            
            <span className='icons'><ion-icon name="play-circle" className="icon"></ion-icon></span> Track: { props.title }
            <br/>
            <span className='icons'><ion-icon name="albums" className="icon"></ion-icon></span> Album: { props.album }
            <br/>
            <Link 
                to={`lyrics/track/${ props.id }`}
                className='btn #7c4dff deep-purple accent-2 trackcomponent-button'>
                View Lyrics
            </Link>
            {/* <button className='btn #7c4dff deep-purple accent-2 trackcomponent-button'><a href={ `http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${ props.id }&apikey=${process.env.REACT_APP_MM_KEY}` }></a>View Lyrics</button> */}
        </div>
    )

}

export default Track

                {/* to={`http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${ props.id }&apikey=${process.env.REACT_APP_MM_KEY}`}  */}
