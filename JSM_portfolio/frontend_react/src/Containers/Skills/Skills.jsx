import React, {useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import ReactTooltip from 'react-tooltip'
import { AppWrap, MotionWrap} from '../../wrapper'
import {urlFor, client} from '../../client'
import { images } from '../../Constants'
import './Skills.scss'

const Skills = () => {

  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[type == "experiences"]';
    const skillsQuery = '*[type == "skills"]';

    client.fetch(query).then((data) => {setExperience(data);
    
    })
    client.fetch(skillsQuery).then((data) => {setSkills(data);
    
    })
  }, [])

  return (
    <>
      <h2 className='head-text'>
        Skills & Experience
      </h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          
            <motion.div  
            whileInView={{opacity:[0,1]}}
            transition={{duration: 0.5}}
            className="app__skills-item app__flex"
            // key={skills.name} 
            >
                <div className='app__flex'>
                  <img src={images.react} alt="" />

                </div>

                <p className='p-text'>
                  React
                </p>
            </motion.div>
          

           <motion.div  
            whileInView={{opacity:[0,1]}}
            transition={{duration: 0.5}}
            className="app__skills-item app__flex"
            // key={skills.name} 
            >
                <div className='app__flex'>
                  <img src={images.figma} alt="" />

                </div>

                <p className='p-text'>
                  Figma
                </p>
            </motion.div>

             <motion.div  
            whileInView={{opacity:[0,1]}}
            transition={{duration: 0.5}}
            className="app__skills-item app__flex"
            // key={skills.name} 
            >
                <div className='app__flex'>
                  <img src={images.node} alt="" />

                </div>

                <p className='p-text'>
                  Node JS
                </p>
            </motion.div>

             <motion.div  
            whileInView={{opacity:[0,1]}}
            transition={{duration: 0.5}}
            className="app__skills-item app__flex"
            // key={skills.name} 
            >
                <div className='app__flex'>
                  <img src={images.XD} alt="" />

                </div>

                <p className='p-text'>
                  Adobe XD
                </p>
            </motion.div>

             <motion.div  
            whileInView={{opacity:[0,1]}}
            transition={{duration: 0.5}}
            className="app__skills-item app__flex"
            // key={skills.name} 
            >
                <div className='app__flex'>
                  <img src={images.javascript} alt="" />

                </div>

                <p className='p-text'>
                  Javascript
                </p>
            </motion.div>

{/* experience section */}

            <motion.div  
            whileInView={{opacity:[0,1]}}
            transition={{duration: 0.5}}
            className="app__skills-item app__flex"
            // key={skills.name} 
            >
                <div className='app__flex'>
                  <img src={images.git} alt="" />

                </div>

                <p className='p-text'>
                  Git
                </p>
            </motion.div>

        </motion.div>

        <motion.div className='app__skills-exp'>

          <>
          <motion.div
          whileInView={{opacity:[0,1]}}
            transition={{duration: 0.5}}
            className="app__skills-exp-work app__flex"
            // data-tip
          >
            <h4 className='bold-text'>

            </h4>

            <p className='p-text'>

            </p>
          </motion.div>
          </>

        </motion.div>

      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Skills, 'app__skills' ), 'skills', 'app__whitebg') ;