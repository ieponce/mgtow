import React from 'react'

import Image from 'next/image'
export default function Welcome() {
    return (
        <div className="jumbotron jumbotron-fluid bg-light">
          <div className="container text-center"> 
          <Image className="img-fluid rounded-circle" alt="chingada "width="150px" height="150px" src="/image.png" ></Image>
            <h2>MGTOW meaning</h2>
            <p className="lead">All you need to know is here!</p>
            <a className="btn btn-outline-dark" href="#">Discover more</a> 
          </div>
          
        </div>

    )
}
