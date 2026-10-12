import React from 'react'
import { useState } from 'react'
import './Feed.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Feed = () => {
    const navigate = useNavigate()
    const buttonNavigate=()=>{
      navigate('/createpost')
    }
    useEffect(() => {
      axios.get('http://localhost:3000/posts')
         .then((res)=>{
           setFeed(res.data.posts)
         })
         
    }, [])
    
    const [feed, setFeed] = useState([
        {
        id : 1,
        image : "https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption : "A beautiful sunset over the mountains."
    }
    ])
    
    
  return (
    <main className='Main-feed'>
        <h1 className='main-heading'>My Feed</h1>
     <section className="feed-page">
      {
        feed.length > 0 ? (
        feed.map((post)=>(
        <div key={post.id} className="post-card">
            <img className="post-image" src={post.image} alt={post.caption || 'Post image'}/>
            <p className="post-caption">{post.caption}</p>
            </div>
             ))
      ):(
        <p>No posts available.</p>
      )
   }

      <button onClick={buttonNavigate} 
      className='navigate-button'>Create new post</button>
    </section>
    </main>
  )
}


export default Feed
