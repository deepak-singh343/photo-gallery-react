import React from 'react'
import {Link} from 'react-router-dom'

const Title = () => {
    return (
        <div className='title'>
            <Link to='/' style={{textDecoration: 'none'}}>
                <h1>My Image Studio</h1>
            </Link>
            <h2>Your Pictures</h2>
        </div>
    )
}

export default Title
