import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/Navbar'
import Welcome from '../components/welcome/Welcome'
import React from 'react';
import Link from 'next/link'
import Image from 'next/image';


export default function Home() {
  return (
    <div>
      <Head>
        <title>MGTOW - Explanation</title>
        <link rel="icon" href="/icon.png" />
        <meta name="description" content="MGTOW explained in simple words." />
      </Head>
      <Navbar />
      <Welcome />
      <div className='container col-12 col-md-11 col-lg-9'>
        <section className=" jumbotron jumbotron-fluid  pr-4 pl-4   d-flex justify-content-center">

          <h2 className="text-justify texto" >
            MGTOW lo que realmente significa: Es una filosofía de vida adoptada por varones cibernautas alrededor del mundo, cuya consignia se trata de evitar cualquier tipo de relación con las mujeres, trabajar en uno mismo y escoger su propio camino. (Men Going Their Own Way).

            Aquel varon que tenga la mente abierta a ver la realidad con otros ojos es bienvenido.



          </h2>
          <li>
        <Link href="/simon">
          <a>Home</a>
        </Link>
      </li>

        </section>
      </div>
     
      <section id="intro" className="bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h3 className="section-title">Section Heading</h3>
              <p className="lead">Place a nice <strong>introduction</strong> here <strong>to catch reader's attention</strong>. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderi.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row no-gutters">
            <div className="col-12 col-sm-12 col-lg-5 order-1 order-lg-2"> <Image width="150px" height="150px" className="img-fluid" src="/1.jpg" /> </div>
            <div className="col-12 col-sm-12 col-lg-7 bg-light blog-text order-2 order-lg-1">
              <h5>Category</h5>
              <h4>Blog Post Title</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrude consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
              <button type="button" className="btn btn-dark btn-sm">Read More</button>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-12 col-sm-12 col-lg-5 order-1 order-lg-1"> <Image width="150px" height="150px" className="img-fluid" src="/2.jpg" /> </div>
            <div className="col-12 col-sm-12 col-lg-7 bg-white blog-text order-2 order-lg-2">
              <h5>Category</h5>
              <h4>Blog Post Title</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrude consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
              <button type="button" className="btn btn-dark btn-sm">Read More</button>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-12 col-sm-12 col-lg-5 order-1 order-lg-2"> <Image width="150px" height="150px" className="img-fluid" src="/3.jpg" /> </div>
            <div className="col-12 col-sm-12 col-lg-7 bg-light blog-text order-2 order-lg-1">
              <h5>Category</h5>
              <h4>Blog Post Title</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrude consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
              <button type="button" className="btn btn-dark btn-sm">Read More</button>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center"> <a href="#" className="btn btn-lg btn-primary btn-more">Older Articles</a> </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-6 ml-auto mr-auto text-center">
              <h3 className="section-title">Subscribe to Newsletter</h3>
              <div className="input-group">
                <input type="text" className="form-control form-control-lg" placeholder="Enter your email address" />
                <span className="input-group-btn">
                  <button className="btn btn-dark btn-lg" type="button">Subscribe</button>
                </span> </div>
            </div>
          </div>
        </div>
      </section>


      <footer>
      </footer>
    </div>

  )
}
