import React, { useContext } from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import { ThemeContext } from "../context/ThemeContext";

const Page = () => {

  return (
    <div className='page'>
        <Header/>
        <Content/>
        <Footer/>
    </div>
  )
}

export default Page