"use client"
import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Property from './components/Property'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import Link from 'next/link'

function Properties() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  const array = new Array(9).fill(9);
  return (
    <div className='h-screen '>
      <Home />
      <About />
      <Link href="/properties">
        <div className='flex items-center justify-center'>
          <ArrowLeftOutlinedIcon className='text-yellow-300' fontSize='large' />
          <div className=' text-2xl text-yellow-300 font-semibold uppercase'>Propeties</div>
        </div>
      </Link>
      <Carousel responsive={responsive}>
        {
          array?.map((e,i) => (
            <Link href='/properties'>
              <Property key={i} />
            </Link>
          ))
        }
      </Carousel>;


      <Contact />
      <Footer />
    </div>
  )
}

export default Properties
