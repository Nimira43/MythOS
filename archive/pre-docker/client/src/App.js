import PostCreate from './PostCreate'
import PostList from './PostList'

export default function App() {
  return (
    <div className='container'>
      <h4 className='logo text-main mt-3'>MythOS</h4>
      <PostCreate />
      <hr />
      <h4 className='logo text-main'>Posts</h4>
      <PostList />
    </div>
  )
}