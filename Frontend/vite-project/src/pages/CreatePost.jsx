import { useState } from 'react'
import './CreatePost.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const CreatePost = () => {
    const navigate = useNavigate()
 const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    axios.post('http://localhost:3000/createpost', formData)
    .then((res)=>{
      
        navigate('/feed')
    })
    .catch((err)=>{
        console.log(err)
        alert("Error creating post.")
    })
}

  return (
    <main className="create-post-page">
      <section className="create-post-card" aria-labelledby="create-post-title">
        <div className="create-post-heading">
          <span className="create-post-eyebrow">SHARE A MOMENT</span>
          <h1 id="create-post-title">Create a post</h1>
          <p>Choose an image and add a caption to share it with your community.</p>
        </div>

        <form  onSubmit={handleSubmit}
        className="create-post-form">
          <label className="field-label" htmlFor="post-image">Image</label>
          <div className="image-upload-field">
            
            <span className="upload-title">Choose an image</span>
            <span className="upload-hint">PNG, JPG, or GIF</span>
            <input id="post-image" type="file" name="image" accept="image/*" />
          </div>

          <label className="field-label" htmlFor="post-caption">Caption</label>
          <input
            className="caption-input"
            id="post-caption"
            type="text"
            name="caption"
            placeholder="Write a caption..."
            required
          />

          <button className="create-post-button" type="submit">
            Create post <span aria-hidden="true">→</span>
          </button>
        </form>
      </section>
    </main>
  )
}

export default CreatePost
