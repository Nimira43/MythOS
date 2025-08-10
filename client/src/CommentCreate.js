import { useState } from 'react'

export default function CommentCreate(
  { postId }
) {
  const [content, setContent] = useState('')

  return (
    <div>
      <form>
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