import React from 'react'
import '../styles/Header.css'
import avatar_image from '../static/images/avataaars.svg'

export default function Header() {
    return (

        <div className='title'>

            <h1 className='heading_title'>Hi, I'm Marco<br></br>Backend Developer</h1>
            <img className= "avatar" src={avatar_image} alt='avatar' />

        </div>



    )
}
