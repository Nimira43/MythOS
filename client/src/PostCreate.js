import { useState } from 'react'
import axios from 'axios'

export default function PostCreate() {
  const [title, setTitle] = useState('')
  
  const onSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div>
      <form
        onSubmit={onSubmit}
      >
        <div className='form-group'>
          <label>Title of Post</label>
          <input 
            value={title}
            onChange={e => setTitle(e.target.value)} 
            className='form-control'
          />
        </div>
        <button className='btn bg-main text-light'>Submit</button>
      </form>
    </div>
  )
}