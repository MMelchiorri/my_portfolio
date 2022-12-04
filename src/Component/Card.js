import React from 'react'
import '../styles/Card.css'

export default function Card({title}) {
  return (
    <div className='card'>

        <div className='container'>
            <h4>{title}</h4>
        </div>

    </div>
  )
}
