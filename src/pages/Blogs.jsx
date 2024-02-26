import React from 'react'
import data from './data.json'
import { Link } from 'react-router-dom'


import './blogs.css'


const Blogs = () => {


    const truncateString=(body,num)=>{
        if(body.length > num){
            return body.slice(0,num) + '...'
        }else{
            return body
        }
    }
    return (
        <div>
            <h2>Blogs Page</h2>

            <div className='div'>
                {data.map((blog) => {
                    const { id, title, body } = blog;
                    return <div key={id} className='div2'>
                        <h3>{title}</h3>
                        <p className='p'>{truncateString(body,150)}</p>
                        <Link to={title} state={{body,id}}>Learn More</Link>
                    </div>
                })}
            </div>

        </div>
    )
}

export default Blogs
