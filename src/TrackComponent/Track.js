
import React from 'react'
import './Track.css';


const Track = (props) => {

    return (
        <div className='card-panel teal accent-4 trackcomponent-item'>
            <h6>{ props.artist } </h6>
            
            <span className='icons'><ion-icon name="play-circle" className="icon"></ion-icon></span> Track: { props.title }
            <br/>
            <span className='icons'><ion-icon name="albums" className="icon"></ion-icon></span> Album: { props.album }
        </div>
    )

}

export default Track