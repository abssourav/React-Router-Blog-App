import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Error from './pages/Error'
import Blogs from './pages/Blogs'
import Blog from './pages/Blog'

function App() {

  return (
    <BrowserRouter>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/blogs'>Blogs</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/about'>About</NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:title' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<Error />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
