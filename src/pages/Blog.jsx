import React, { useEffect,useState } from 'react'
import data from './data.json'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import './blog.css'

const Blog = () => {
    const navigate = useNavigate()
    const {title} = useParams()
    const [blogData, setBlogData] = useState()

    useEffect(()=>{
        const filterData = data.filter((blog)=> blog.title === title)
        setBlogData(filterData)

    },[])
    

  return (
    <div>
      <h2>{title}</h2>
      <p className='blogParagraph'>{blogData && blogData[0].body}</p>
      <button onClick={()=>{
        navigate('/blogs')
      }}>Go to Blogs</button>
    </div>
  )
}

export default Blog
