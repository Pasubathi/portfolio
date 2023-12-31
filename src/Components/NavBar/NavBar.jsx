import React from 'react'
import "./Nave.css";

const NavBar = () => {
  return (
    <div className='n-wrapper'>
        <div className="n-left">
            <div className="n-name">Gopinath</div>
            <span> toggle </span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experiences</li>
                    <li>Portfolio</li>
                    <li>Testmonial</li>
                </ul>
            </div>
            <button className="n-button">Contact</button>
        </div>
    </div>
  )
}

export default NavBar