import React from 'react'
import Header from './HEADER/Header'
import Navbar from './NAVBAR/Navbar'
import Home from './HOME/Home'
import Footer from './FOOTER/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Home/>
      {/* <Footer/> */}
    </div>
  )
}

export default App