import React from 'react'
import List from '../list/list';

const Lists = () => {
    const items = [1,2,3,4,5,6,7];
  return (
    <div className='lists'>
        {items.map(item => {
            return <List /> 
          })
        }
    </div>
)}
export default Lists
