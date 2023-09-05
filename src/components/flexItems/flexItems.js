import React from 'react';
import './flexItems.css';
import FlexItem from '../flexItem/flexItem';

const FlexItems = () => {
  const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
  return (
    <div className="flex_items">
      {items.map(item => {
        return <FlexItem />
      })}
    </div> 
  )
}

export default FlexItems
