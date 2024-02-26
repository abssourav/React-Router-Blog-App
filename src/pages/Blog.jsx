import React, { useEffect, useState } from 'react'
import data from './data.json'
import { useLocation, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import './blog.css'

const Blog = () => {
  const { title } = useParams()
  const navigate = useNavigate()

  
  // useLocation er maddome Link er modde data access kora jay
  // It allows you to access information about the current URL, including the pathname, search, hash, and state.
  //amra jdi chai Link er modde state ba onno konokisute data set kore dite pari and sei data eikhan theke access korte pari
  //ex:   <Link to={title}       state={{body,id}}     >Learn More</Link>
  const location = useLocation()

  
  
  // const [blogData, setBlogData] = useState()
  // useEffect(() => {
  //   const filterData = data.filter((blog) => blog.title === title)
  //   setBlogData(filterData)

  // }, [])


  return (
    <div>
      <h2>{title}</h2>
      <p className='blogParagraph'>{location.state.body}</p>
      <button onClick={() => {
        navigate('/blogs')
      }}>Go to Blogs</button>
    </div>
  )
}

export default Blog
