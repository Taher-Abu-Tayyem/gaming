import React from 'react'
import "./GamingLibaryCard.css"
import { SecondaryButton } from '../index'
const GamingLibaryCard = (props) => {
  return (
    <div className='gaming-library-card'>
        <ul>
            <li className='gaming-library-card-image'><img src={props.image} alt=""/></li>
            <li><h4>{props.title}</h4><span>{props.category}</span></li>
            <li><h4>date added</h4><span>{props.date_added}</span></li>
            <li><h4>hours played</h4><span>{props.hours_played}</span></li>
            <li><h4>Currently</h4><span>{props.download}</span></li>
           
           <SecondaryButton>Download</SecondaryButton>
        </ul>
    </div>
  )
}

export default GamingLibaryCard
