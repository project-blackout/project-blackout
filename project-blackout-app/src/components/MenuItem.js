import React from 'react';

export default function MenuItem(props) {
  return (
        <div className = "menu-item" {...props}>
            <div className = "item-image-container">
                <div>
                    <img src = "./Oval.png" alt = ""/>
                </div>
            </div>
            <div className = "item-name-container">
                <div>    
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                </div>
            </div>
        </div>
)};