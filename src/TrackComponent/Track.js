
import React from 'react'


const Track = (props) => {

    return (
        <div className='card-panel teal'>
            Title: { props.title }
            Artist: { props.artist }
            Album: { props.album }
        </div>
    )

}

export default Track