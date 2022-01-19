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
     


      <footer>
      </footer>
    </div>

  )
}
