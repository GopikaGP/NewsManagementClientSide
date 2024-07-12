import React from 'react'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import newslogo from '../assets/newslogo.png'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'




function Footer() {
  return (
    <div className="row w-100 mt-5 p-3 text-light" style={{backgroundColor:'darkblue'}}>
    <div className="col-md-4 p-4 ms-md-5">
        {/* <h2 className='text-warning me-3'> News</h2> */}
        <img src={newslogo} alt='' width={'100px'} height={'100px'}/>
        <p style={{textAlign:'justify'}}
        className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et placeat non explicabo eos tempore beatae eligendi cumque nam hic qui at minus reiciendis, modi expedita nobis! Optio reiciendis necessitatibus distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto iste eaque non, neque qui atque impedit dolor repellendus ipsum maxime saepe earum maiores dignissimos unde rem excepturi cumque modi.
        </p>
    </div>

    <div className="col-md-2 p-4 justify-content-center d-md-flex">

        <div>
              <h4>Links</h4>
              {/* <p className='mt-4'><Link to={'/'}>Landing Page</Link></p> */}
              <p><Link to={'/home'}>Home Page</Link></p>
              {/* <p><Link to={'/watch-history'}>Watch History</Link></p> */}
        </div> 
    </div>
    <div className="col-md-2 p-4">
    <h4> Guides</h4>
    <p className='mt-4'>React</p>
              <p>React Bootstrap</p>
              <p>Bootswatch</p>


    </div>
    <div className="col-md-3 p-4">
      <h4>Contact Us</h4>
      <div className='d-flex mt-4'>
        <input type='text' className='form-contorl rounded' placeholder='Email Id'></input>
        <button className='btn btn-warning ms-3'>SubScribe</button>
      </div>
      <div className='d-flex mt-4 justify-content-between'>
      <FontAwesomeIcon icon={faInstagram} size="2xl" />
      <FontAwesomeIcon icon={faFacebook} size="2xl"  />
      <FontAwesomeIcon icon={faTwitter} size="2xl"  />
      <FontAwesomeIcon icon={faLinkedin} size="2xl" />

      </div>
    </div>
    <div className='col-md-1'></div>
</div>
  )
}

export default Footer