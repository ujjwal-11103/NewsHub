import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Categories from './Components/Categories'
import NewsHub from './Components/NewsHub'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<NewsHub />} />
          <Route path='/Home' element={<Categories data="Home" />} />
          <Route path='/General' element={<Categories data="General" />} />
          <Route path='/Business' element={<Categories data="Business" />} />
          <Route path='/Entertainment' element={<Categories data="Entertainment" />} />
          <Route path='/Health' element={<Categories data="Health" />} />
          <Route path='/Science' element={<Categories data="Science" />} />
          <Route path='/Sports' element={<Categories data="Sports" />} />
          <Route path='/Technology' element={<Categories data="Technology" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
