import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data/data'
import Reason from '../Components/Reason'

function Home() {


    const Reasons = data.map(item => <Reason key={item.id} imgURL={item.imgURL} altText={item.altText} title={item.title} description={item.description}/>)


  return (
    <div className='Home-page'>
        <div className='Home'>
            <h2 className='Home-page-title'>Transform Your Kitchen Today</h2>
            <p className='Home-page-description'><span className='inner-description'>Fatuma's Kitchen Emporium:</span> Your Culinary Oasis for High-Quality Cookware, Utensils, and Kitchen Essentials. Explore our Collection and Elevate Your Cooking Experience Today!</p>
        <Link to='/items'><button className='Home-page-button'>Explore Now - Why Wait?</button></Link>
        </div>
        <section className='Home-page-2'>
            <h3 className='Home-page-2-title'>Reasons why you shop from Us</h3>
            {Reasons}
        </section>
    </div>
  )
}

export default Home