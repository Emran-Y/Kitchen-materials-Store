import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data/data'
import HomeImageSamples from '../data/SamplesImage'
import Reason from '../Components/Reason'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'

function Home() {

    const handleLeftArrowClick = () =>{
      if(index > 0){
        setIndex(prev => prev - 1)
      }
      console(index)
    }
    const handleRightArrowClick = () =>{
      if(index < 10 ){
        setIndex(prev => prev + 1)
      }else{
        return
      }
      console.log(index)
    }

    const [index,setIndex] = React.useState(0)
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

        <section className='sample-image-container'>
          <h2 className='sample-image-title'>Sample Images</h2>
          <section className='sample-images'>
            <div onClick={handleLeftArrowClick} className={`left-arrow ${index === 0 && 'red-blurr'}`}><AiOutlineArrowLeft/></div>
            <img className='Home-sample-image' src={HomeImageSamples[index]}/>
            <div onClick={handleRightArrowClick} className={`right-arrow ${index === 10 && 'red-blurr'} `}><AiOutlineArrowRight/></div>
          </section>
        </section>
    </div>
  )
}

export default Home