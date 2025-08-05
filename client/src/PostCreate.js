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
        <button className='btn bg-main text-light'>Submit</button>
      </form>
    </div>
  )
}