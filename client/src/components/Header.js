import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="header ui secondary pointing menu">
            <Link to="/" className="item">STREAMER</Link>
            <div className="right menu">
                <Link to="/" className="item">
                    <small>STREAMER</small>
                </Link>
                <Link to="/streams/new" className="item"></Link>
                <Link to="/streams/delete" className="item"></Link>
                <Link to="/streams/edit" className="item"></Link>
                <Link to="/streams/show" className="item"></Link>
            </div>
        </div>
    )
}

export default Header