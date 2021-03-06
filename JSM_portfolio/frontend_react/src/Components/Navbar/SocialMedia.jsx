import React from 'react';
import {BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs'
import {FaFacebook, FaFacebookF} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsTwitter href={'https://twitter.com/BATTLETIDE'}/>
        </div>
         <div>
            <FaFacebookF/>
        </div>
         <div>
            <BsInstagram/>
        </div>
         <div>
            <BsLinkedin/>
        </div>
    </div>
  )
}

export default SocialMedia