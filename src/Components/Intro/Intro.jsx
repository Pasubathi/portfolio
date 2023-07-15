import React from 'react'
import "./Intro.css"
import GitHub from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png"

const Intro = () => {
  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-name">
                <span> Hy! I Am </span>
                <span> Gopinath </span>
                <span> Full Stack Developer with 5 years experience in web development, producting the Quality work</span>
            </div>
            <button className="button i-button">Hire Me</button>
            <div className="i-icons">
                <img src={GitHub} alt="GitHub" />
                <img src={LinkedIn} alt="LinkedIn" />
                <img src={Instagram} alt="Instagram" />
            </div>
        </div>
        <div className="i-rigth">Right Side</div>
    </div>
  )
}

export default Intro