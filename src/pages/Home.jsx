import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <button><Link to='/personas/agregar'>Agregar persona</Link></button>
        </>
    )
}

export default Home