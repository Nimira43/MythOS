import { useState, useEffect } from 'react'
import axios from 'axios'

export default function CommentList({ postId}) {
  const [comments, setComments] = useState([])
  
  const fetchData = async () => {
    const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`)
    setComments(res.data)
  }

  useEffect(() => {
    fetchData()
  })

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
        <button className='btn bg-main text-light'>Submit</button>
      </form>
    </div>
  )
}