import { useState } from 'react'
import axios from 'axios'

export default function CommentCreate(
  { postId }
) {
  const [content, setContent] = useState('')
  const onSubmit = async (event) => {
    event.preventDefault()

  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>New Comment</label>
          <input 
            className='form-control' 
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </div>
        <button className='btn bg-main'>Submit</button>
      </form>
    </div>
  )
}