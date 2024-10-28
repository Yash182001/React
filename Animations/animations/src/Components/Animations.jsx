import React, { useEffect, useState } from 'react'
import truck from './free-delivery.gif'
import './Animations.css'
import road from './road.png'
import burger from './burger.jpeg'
import pizza from './pizza.jpeg'
import coke from './coke.jpeg'

const Animations = () => {

    const[ship, setShip] = useState(false);

    const handleClick = ()=>{
       setShip(true);
    }

  return (
    <>
  

<div className="container-fluid">
    <div className="row">
        <div className="col-4">
        <div class="card">
  <img src={burger} class="burger" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button type='button' class="btn btn-primary" onClick={handleClick}>Ship</button>
  </div>
</div>
        </div>
        <div className="col-4">
        <div class="card">
  <img src={pizza} class="pizza" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button type='button' class="btn btn-primary" onClick={handleClick}>Ship</button>
  </div>
</div>
        </div>
        <div className="col-4">
        <div class="card">
  <img src={coke} class="coke" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button type='button' class="btn btn-primary" onClick={handleClick}>Ship</button>
  </div>
</div>
        </div>
    </div>
</div>

    {ship? <img src={truck} className='truck'  alt='truck'/>:""}
     <img src={road} className='road' alt='road' />
     
    
    </>
  )
}

export default Animations
