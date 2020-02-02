
import React from 'react'
import { Link } from 'react-router-dom'
import './StandAlone.css'

class StandAlone extends React.Component { 

    handleClick = () => {
        
    }
    render () {
        return (
            <div className='standalone-wrapper'>
            <Link className='standalone-link' to='/'><button className='btn #7c4dff deep-purple accent-2 standalone-button'>Click Here To Begin</button></Link>
            </div>
        )
    }
}


export default StandAlone