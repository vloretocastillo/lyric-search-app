import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { Consumer } from '../context';



class NavBar extends React.Component { 

    handleClick = (dispatch) => {
        // alert(dispatch)
        fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then( res => res.json() )
            .then( data => {
                dispatch({
                    type: 'RESET',
                    payload: data.message.body.track_list
                })
                // this.setState({title : ''})
            })
            .catch(err => console.log(err))
    }

    render () {
        return (
            <Consumer>
            { (value) => {
                return (<nav>
                    <div className="nav-wrapper teal accent-4 navbarcomponent">
                    <Link to='/' onClick={()=> this.handleClick(value.dispatch)}> <h5>LyricFinder </h5></Link>
                    </div>
                </nav>
                )
            }}
            </Consumer>
        )
    }

}

export default NavBar