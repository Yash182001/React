import React from 'react'
import './about.css'
import image2 from './about.jpg'

export default function About() {
  return (
    <>
    <div className="card card-about">
    <div className="container about">
      <div className="row">
        <div className="col-6">
          <img src={image2} className='about-img' alt='img2'/>
        </div>

        <div className="col-6">
          <dl>
            <dt className='dt'>Lorem Ipsum</dt>
            <dd className='dl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Culpa asperiores optio quod eaque possimus error, adipisci quis beatae qui repellat! Repellat
                saepe ut laborum perspiciatis dolorem harum blanditiis quod sapiente.</dd>
          </dl>
        </div>
      </div>
    </div>
    </div>
    
    
    
    </>
  )
}
