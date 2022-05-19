import React from 'react';

export default function MenuItem(props) {
  return (
        <div className = "menu-item" {...props}>
            <div className = "item-image-container">
                <div className='item-image-div'>
                    <img className='item-image' src = {`./images/Oval(${props.image}).png`} alt = ""/>
                </div>
            </div>
            <div className = "item-name-container">  
                <span className='item-title'>{props.title}</span>
                <span className='item-description'>{props.description}</span>
            </div>
        </div>
)};