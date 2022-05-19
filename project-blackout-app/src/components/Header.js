import React from 'react';

const image = "https://t3.ftcdn.net/jpg/02/86/23/98/240_F_286239861_5aUxLf1u9Xf8gRQFVKbMqtZmWykv39Yz.jpg"

export default function Header() {
  return (
            <div className = "banner" style={{backgroundImage: `url(${image})`, height: '60px'}}>
                <div className = 'logo-div'>
                    <h2 className="logo-name">Project-Blackout</h2>
                </div>
            </div>
)};