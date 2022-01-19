import React from 'react'

import Image from 'next/image'
export default function Welcome() {
    return (
        <div className="jumbotron jumbotron-fluid bg-light">
          <div className="container text-center"> 
          <img className="img-fluid rounded-circle" width="150px" height="150px" src="/image.png" ></img>
            <h2>MGTOW meaning</h2>
            <p className="lead">All you need to know is here!</p>
            <a class="btn btn-outline-dark" href="#">Discover more</a> 
          </div>
          
        </div>

    )
}
