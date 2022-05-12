import React from 'react'

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                     <a href='#'>
                         <i className='fa-facebook-square'></i>
                     </a>
                     <a href='#'>
                         <i className='fa-google-plus-square'></i>
                     </a>
                     <a href='#'>
                         <i className='fa-instagram'></i>
                     </a>
                     <a href='#'>
                         <i className='fa-linkedin-square'></i>
                     </a>
                     <a href='#'>
                         <i className='fa-twitter'></i>
                     </a>
                </div>
            
            <div className='profile-details-name'>
                <span className='primary-text'>
                    {' '}
                    Hello, WE'RE <span className='highlighted-text'>Cholwe and Mapalo</span>
                </span>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {' '}
                        <h1>
                            
                        </h1>
                    </span>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
