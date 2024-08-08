import photo from '../assets/photo.jpg'
import { useRef, useState } from 'react'


const UserCreate = () => {
  const inputRef = useRef(null)
  const [image, setImage] = useState("")

  const handleImageClick = () => {
    inputRef.current.click()
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    console.log(file)
    setImage(event.target.files[0]);
  }


  return (
    <div className="bg-[#E7E7E7] min-h-screen">
      <div>
        UserCreate Page
        <div onClick={handleImageClick}>
          {image ? <img src={URL.createObjectURL(image)} alt="" className='w-[100px] h-[100px] rounded-full' /> : <img src={photo} alt="" />}
          <input type="file" ref={inputRef} onChange={handleImageChange} className='hidden' />
        </div>
        <div>
          <button className='bg-slate-500 rounded-lg p-4 hover:bg-slate-400'>Upload</button>
        </div>
      </div>
    </div>
  )
}

export default UserCreate