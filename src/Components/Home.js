import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>welcome to home page</h1>
       <Link to = '/login'> <button>go to next page</button></Link>
    </div>
  )
}

export default Home