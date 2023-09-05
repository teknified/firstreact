import React from 'react';
import flower from '../../assets/images/flowers.jpeg'
import "./flexItem.css";
import { Link } from 'react-router-dom';

const FlexItem = () => {
  return (
    <div>
      <div className='images'>
      <img src={flower} alt="Flower"></img>
      <div className='link'>
      <Link to="/profile">Go To Profile</Link>
      </div>
      </div>
    </div>  

  )
}
export default FlexItem
