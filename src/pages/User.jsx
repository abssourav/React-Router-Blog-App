import React from 'react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const User = () => {

  const [searchParams, setSearchParams] = useSearchParams()

  const [name, setName] = useState('')

  
  const handleSubmit= (e) =>{
      e.preventDefault()
      setSearchParams({name:name})
  }

  return (

    <div style={{width:'70vw'}}>
      <h2>Search User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Search...' style={{padding:'.6rem', marginRight:'30px'}} onChange={(e)=>setName(e.target.value)}/>
        <button type='submit'>Search</button>
      </form>


     {searchParams.get('name')  && <h3>Welcome {searchParams.get('name')}. Hope you are Well .Thanks for searching. </h3>}
    </div>
  )
}

export default User
