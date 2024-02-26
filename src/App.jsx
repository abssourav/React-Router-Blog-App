import {Helmet} from "react-helmet";
import { useState } from 'react'
import ProtectedRoute from './routes/ProtectedRoute'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'

//pages
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Error from './pages/Error'
import Blogs from './pages/Blogs'
import Blog from './pages/Blog'
import User from './pages/User'


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleOnClick = () => {
    setIsLoggedIn((prev)=> !prev)
  }

  return (
    <BrowserRouter>
    <Helmet>
      <title>Home</title>
    </Helmet>
      <div style={{ display: 'flex', justifyContent:'space-between' }}>

        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/blogs'>Blogs</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          <NavLink to='/user'>User</NavLink>
          <NavLink to='/about'>About</NavLink>
        </nav>

        <button onClick={handleOnClick}>
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </button>

      </div>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:title' element={<Blog />} />
        <Route path='/contact' element={
        <ProtectedRoute isLoggedIn={isLoggedIn}>    {/*protected route */}
          <Contact />
        </ProtectedRoute>} />
        <Route path='/user' element={<User />} />
        <Route path='/user/:userName' element={<User />} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<Error />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
