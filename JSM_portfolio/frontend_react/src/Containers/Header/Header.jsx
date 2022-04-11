import React from 'react'
import './Header.scss'
import { motion } from 'framer-motion'
import { images } from '../../Constants'


const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition:{
      duration:1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div id='home' className='app__header app__flex'>
      <motion.div whileInView={{ x: [100, 0], opacity:[0, 1]}} transition={{duration:1}} className="app__header-info" >

        <div className="app__header-badge">

          <div className="badge-cnp app__flex">

          <span>👋</span>
          <div style={{marginLeft: 20}}>
            <p className='p-text'>Hello, I am</p>
            <h1 className='head-text'>Ifeanyi</h1>

            </div>

          </div>

          <div className='tag-cnp app__flex'>
            <p className='p-text'>Web Developer</p>
            <p className='p-text'>UX/UI Designer</p>

          </div>

        </div>

      </motion.div>

      <motion.div whileInView={{ opacity:[0, 1]}} transition={{duration:0.5, delayChildren: 0.5}} className="app__header-img">

        <img src="https://hashnode.imgix.net/res/hashnode/image/upload/v1555606717282/vvGfL6BnE.png" alt="" />
        <motion.img
        whileInView={{ scale:[0, 1]}} transition={{duration:0.5, delayChildren: 1, ease: 'ea seInOut'}} 
        src={images.circle}
        alt= "profile"
        className='overlay_circle'
        />

      
      </motion.div>

      <motion.div variants={scaleVariants} whileInView={scaleVariants.whileInView} className="app__header-circles">

        {[images.figma, images.react, images.sass].map((circle, index) => <div className='circle-cnp app__flex' key={`circle-${index}`} >
          <img src={circle} alt="circle" />

        </div> )}
        
      </motion.div>


      </div>
  )
}

export default Header