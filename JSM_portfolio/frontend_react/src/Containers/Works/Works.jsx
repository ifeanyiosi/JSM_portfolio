import React, {useEffect, useState} from 'react'
import {AiFillEye, AiFillGithub} from 'react-icons/ai'
import {motion} from 'framer-motion'
import { AppWrap, MotionWrap} from '../../wrapper'
import {urlFor, client} from '../../client'
import { images } from '../../Constants'
import './Works.scss'

const Works = () => {

  const [activeFilter, setActiveFIlter] = useState('all');

  const [animateCard, setAnimateCard] = useState({ y:0, opacity: 1 });

  const [works, setWorks] = useState([]);

  const [filterWork, setFilterWork] = useState([])

  useEffect(() => {
    const query = '*[type == "works"]';

    client.fetch(query).then((data) => {setWorks(data);
    setFilterWork(data);
    })
  }, [])
  

  const handleWorkFilter = (item) => {
    
  }
  return (
    <>
    <h2 className='head-text'>
      My Creative <span>Portfolio</span> 
    </h2>

    <div className="app__work-filter">
      {['UI/UX', 'Web Apps', 'React JS', 'All'].map((item,index)=>(
        <div 
        key={index}
        onClick={() => handleWorkFilter(item)}
        className={"app__work-filter-item app__flex p-text ${activeFIlter === item ? 'item-active' : '' }"}
        >
            {item}
        </div>
      ))}
    </div>

    <motion.div animate={animateCard}
    transition={{duration: 0.5, delayChildren: 0.5}}
      className="app__work-portfolio"
    >
      {/* {filterWork.map(( index) => (
        <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name}/>
              <h1>APPLE</h1>
            </div>
        </div>
      ))} */}
      <div className="app__work-item app__flex">
        <div className="app__work-img app__flex" >
          <img src={images.netflix} alt="" />
            

            <motion.div
            whileHover={{opacity:[0,1]}}
            transition={{ duration: 0.25, ease:'easeInOut', staggerChildren: 0.5}}
            className="app__work-hover app__flex"
            >
              
              <a href="https://github.com/ifeanyiosi/Netflix-Clone">
                <motion.div
              whileInView={{scale: [0, 1]}}
              whileHover={{scale:[1,0.9]}}
            transition={{ duration: 0.25, ease:'easeInOut', staggerChildren: 0.5}}
            className="app__flex"
              >
                <AiFillEye />

              </motion.div>
              </a>

              <a href="https://github.com/ifeanyiosi/Netflix-Clone">
                <motion.div
              whileInView={{scale: [0, 1]}}
              whileHover={{scale:[1,0.9]}}
            transition={{ duration: 0.25, ease:'easeInOut', staggerChildren: 0.5}}
            className="app__flex"
              >
                <AiFillGithub />

              </motion.div>
              </a>

            </motion.div>
        </div>

          <div className='app__work-content app__flex'>
            <h4 className='bold-text'>
              Netflix Clone Using React
            </h4>

            <p className='p-text' style={{marginTop: 10 }}>
              This is a netflix clone, was coded using React. Can only play trailers fetched using Axios from IMDB. 

            </p>

            {/* <div className='app__work-tag app__flex'>
              <p className='p-text'>
                  tags
              </p>

            </div> */}

          </div>

          
        

      </div>

      <div className="app__work-item app__flex">
        <div className="app__work-img app__flex" >
          <img src={images.amazon} alt="" />
            

            <motion.div
            whileHover={{opacity:[0,1]}}
            transition={{ duration: 0.25, ease:'easeInOut', staggerChildren: 0.5}}
            className="app__work-hover app__flex"
            >
              
              <a href="https://clone-a11bd.web.app/">
                <motion.div
              whileInView={{scale: [0, 1]}}
              whileHover={{scale:[1,0.9]}}
            transition={{ duration: 0.25, ease:'easeInOut', staggerChildren: 0.5}}
            className="app__flex"
              >
                <AiFillEye />

              </motion.div>
              </a>

              <a href="https://github.com/ifeanyiosi/amazon-clone">
                <motion.div
              whileInView={{scale: [0, 1]}}
              whileHover={{scale:[1,0.9]}}
            transition={{ duration: 0.25, ease:'easeInOut', staggerChildren: 0.5}}
            className="app__flex"
              >
                <AiFillGithub />

              </motion.div>
              </a>

            </motion.div>
        </div>

          <div className='app__work-content app__flex'>
            <h4 className='bold-text'>
              Amazon Clone Using React
            </h4>

            <p className='p-text' style={{marginTop: 10 }}>
              Simple amazon site with checkout page

            </p>

            {/* <div className='app__work-tag app__flex'>
              <p className='p-text'>
                  tags
              </p>

            </div> */}

          </div>

          
        

      </div>

      <div className="app__work-item app__flex">
        <div className="app__work-img app__flex" >
          <img src={images.game} alt="" />
            

            <motion.div
            whileHover={{opacity:[0,1]}}
            transition={{ duration: 0.25, ease:'easeInOut', staggerChildren: 0.5}}
            className="app__work-hover app__flex"
            >
              
              <a href="https://e-commerce-ifeanyi.netlify.app">
                <motion.div
              whileInView={{scale: [0, 1]}}
              whileHover={{scale:[1,0.9]}}
            transition={{ duration: 0.25, ease:'easeInOut', staggerChildren: 0.5}}
            className="app__flex"
              >
                <AiFillEye />

              </motion.div>
              </a>

              <a href="https://github.com/ifeanyiosi/Gaming-ECommerce-site">
                <motion.div
              whileInView={{scale: [0, 1]}}
              whileHover={{scale:[1,0.9]}}
            transition={{ duration: 0.25, ease:'easeInOut', staggerChildren: 0.5}}
            className="app__flex"
              >
                <AiFillGithub />

              </motion.div>
              </a>

            </motion.div>
        </div>

          <div className='app__work-content app__flex'>
            <h4 className='bold-text'>
              Gamer E-Commerce site
            </h4>

            <p className='p-text' style={{marginTop: 10 }}>
              Used react to make a simple gaming e-commerce site. with a login page desin and checkout page.

            </p>

            {/* <div className='app__work-tag app__flex'>
              <p className='p-text'>
                  tags
              </p>

            </div> */}

          </div>

          
        

      </div>

      <div className="app__work-item app__flex">
        <div className="app__work-img app__flex" >
          <img src={images.bank} alt="" />
            

            <motion.div
            whileHover={{opacity:[0,1]}}
            transition={{ duration: 0.25, ease:'easeInOut', staggerChildren: 0.5}}
            className="app__work-hover app__flex"
            >
              
              <a href="">
                <motion.div
              whileInView={{scale: [0, 1]}}
              whileHover={{scale:[1,0.9]}}
            transition={{ duration: 0.25, ease:'easeInOut', staggerChildren: 0.5}}
            className="app__flex"
              >
                <AiFillEye />

              </motion.div>
              </a>

              <a href="">
                <motion.div
              whileInView={{scale: [0, 1]}}
              whileHover={{scale:[1,0.9]}}
            transition={{ duration: 0.25, ease:'easeInOut', staggerChildren: 0.5}}
            className="app__flex"
              >
                <AiFillGithub />

              </motion.div>
              </a>

            </motion.div>
        </div>

          <div className='app__work-content app__flex'>
            <h4 className='bold-text'>
              Bank App design
            </h4>

            <p className='p-text' style={{marginTop: 10 }}>
              UI desiggn of a bank app

            </p>

            {/* <div className='app__work-tag app__flex'>
              <p className='p-text'>
                  tags
              </p>

            </div> */}

          </div>

          
        

      </div>

      <div className="app__work-item app__flex">
        <div className="app__work-img app__flex" >
          <img src={images.airbda} alt="" />
            

            <motion.div
            whileHover={{opacity:[0,1]}}
            transition={{ duration: 0.25, ease:'easeInOut', staggerChildren: 0.5}}
            className="app__work-hover app__flex"
            >
              
              <a href="https://www.behance.net/ifeanyiokeke">
                <motion.div
              whileInView={{scale: [0, 1]}}
              whileHover={{scale:[1,0.9]}}
            transition={{ duration: 0.25, ease:'easeInOut', staggerChildren: 0.5}}
            className="app__flex"
              >
                <AiFillEye />

              </motion.div>
              </a>

              <a href="https://www.behance.net/ifeanyiokeke">
                <motion.div
              whileInView={{scale: [0, 1]}}
              whileHover={{scale:[1,0.9]}}
            transition={{ duration: 0.25, ease:'easeInOut', staggerChildren: 0.5}}
            className="app__flex"
              >
                <AiFillGithub />

              </motion.div>
              </a>

            </motion.div>
        </div>

          <div className='app__work-content app__flex'>
            <h4 className='bold-text'>
              UI design
            </h4>

            <p className='p-text' style={{marginTop: 10 }}>
              Redesigned the mobile and web site of a website

            </p>

            {/* <div className='app__work-tag app__flex'>
              <p className='p-text'>
                  tags
              </p>

            </div> */}

          </div>

          
        

      </div>

      <div className="app__work-item app__flex">
        <div className="app__work-img app__flex" >
          <img src={images.music} alt="" />
            

            <motion.div
            whileHover={{opacity:[0,1]}}
            transition={{ duration: 0.25, ease:'easeInOut', staggerChildren: 0.5}}
            className="app__work-hover app__flex"
            >
              
              <a href="https://www.behance.net/ifeanyiokeke">
                <motion.div
              whileInView={{scale: [0, 1]}}
              whileHover={{scale:[1,0.9]}}
            transition={{ duration: 0.25, ease:'easeInOut', staggerChildren: 0.5}}
            className="app__flex"
              >
                <AiFillEye />

              </motion.div>
              </a>

              <a href="https://www.behance.net/ifeanyiokeke">
                <motion.div
              whileInView={{scale: [0, 1]}}
              whileHover={{scale:[1,0.9]}}
            transition={{ duration: 0.25, ease:'easeInOut', staggerChildren: 0.5}}
            className="app__flex"
              >
                <AiFillGithub />

              </motion.div>
              </a>

            </motion.div>
        </div>

          <div className='app__work-content app__flex'>
            <h4 className='bold-text'>
              UI design of a music player
            </h4>

            <p className='p-text' style={{marginTop: 10 }}>
              This is how my ideal music player would look like

            </p>

            {/* <div className='app__work-tag app__flex'>
              <p className='p-text'>
                  tags
              </p>

            </div> */}

          </div>

          
        

      </div>




    </motion.div>
    </>
  )
}

export default AppWrap(
  
 MotionWrap(Works, 'app__works' ), 'work', 'app__primarybg') ;