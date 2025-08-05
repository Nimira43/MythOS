export default function PostCreate() {
  return (
    <div>
      <form>
        <div className='form-group'>
          <label>Title of Post</label>
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