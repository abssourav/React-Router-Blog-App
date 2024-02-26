import React from 'react'
import {useNavigate} from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>
        Home
      </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime fugit illo animi. Eveniet, nam ab. Recusandae cupiditate doloremque corporis asperiores error pariatur, veritatis optio nostrum nam nemo non totam voluptatibus.
      </p>
      <button onClick={()=>{
        navigate('/blogs')
      }}>Go To Blogs Page</button>
    </div>
  )
}

export default Home
