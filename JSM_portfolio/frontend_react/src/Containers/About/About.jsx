import React, {useEffect, useState} from 'react'
import './About.scss'
import {motion} from 'framer-motion';
import {images} from '../../Constants';

const abouts = [
  {title: 'Web Development', description: ' I am a pretty good web developer', imgUrl: images.development },
  {title: 'UX/UI', description: ' I make really good designs too', imgUrl:images.uiux},
  {title: 'Web Design', description: ' Let me help you design a worldclass site', imgUrl: images.design }
  // {title: 'Web Development', description: ' I am a pretty good web developer', imgUrl:''  }
];

const About = () => {
  return (
    <>
    <h2 className='head-text'>
      I know that <span>Good Apps</span> <br /> means <span>Good Business</span>
    </h2>

    <div className="app__profiles">

      {abouts.map((about, index) =>(
        <motion.div
        whileInView={{opacity:1}}
        whileHover={{scale: 1.1}}
        transition={{duration:0.5, type: 'tween'}}
        className="app__profile-item"
        key={about.title + index}
        >

          <img src={about.imgUrl} alt={about.title} />
          <h2 className='p-text' style={{marginTop: 20}}>{about.title}</h2>
          <p className='p-text' style={{marginTop: 10}}>{about.description}</p>

        </motion.div>
      ))}

    </div>
    
    </>
  )
}

export default About