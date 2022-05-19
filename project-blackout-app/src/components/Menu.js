import React from 'react'
import MenuItem from './MenuItem'

function Menu() {
  return (
    <div className='menu-container'>
        <div className='description'>
            <span className='discover'>Discover Businesses</span>
        </div>
        <div className='menu-body'>
            <MenuItem title="View All" image="0"/>
            <MenuItem title = "Clothing" image="1"/>
            <MenuItem title = "Hair Stylists" image="2"/>
            <MenuItem title = "Artists" image="3"/>
            <MenuItem title = "Writers" image="4"/>
            <MenuItem title = "Food" image="5"/>
        </div>
    </div>
  )
}

export default Menu
