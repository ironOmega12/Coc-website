import './Hero.css'
import image1 from '../../assets/img.png'
import React from 'react'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <h5>#2 Trending</h5>
        <h4>Lead Supercell</h4>
        <h1>CLASH</h1>
        <p>Join millions of players worldwide as you build your village, <br /> raise a clan, and compete in epic Clan Wars!</p>
        <a href="#">Compare</a>
        <a href="#" className='ctaa'><i className='bx bx-play' ></i>Watch Gameplay</a>
      </div>
      
      <div className='hero-img'>
        <img src={image1} alt="#" />
      </div>
    </div>
  )
}

export default Hero
