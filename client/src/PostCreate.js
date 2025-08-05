export default function PostCreate() {
  return (
    <div>
      <form>
        <div className='form-group'>
          <label>Post Title</label>
          <input 
            type="text" 
            className='form-control'
          />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}