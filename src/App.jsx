
import './App.css'
import Container from './components/Container'
import { MdDriveFolderUpload } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { useEffect, useState } from 'react';
import imgs from './assets/hellow.jpg'
import Tesseract from 'tesseract.js';
import Textconvart from './components/Textconvart';


function App() {
  /////prevwes image start
  const [image, setImage] = useState({
    placeholder: imgs,
    file: null
  });
  const handelProfileImageChange = (event) => {
    const image = event.target.files[0]
    setImage(image);
    console.log(image);

    if (event.target.files[0].type === 'image/png' || event.target.files[0].type == 'image/jpeg') {
      const reader = new FileReader()
      reader.onload = (r) => {
        setImage({
          placeholder: r.target.result,
          file: event.target.files[0]
        })
        console.log(r.target.result);
      }

      reader.readAsDataURL(event.target.files[0])

    } else {
      toast.error("invalid file!")
      image.file = null
    }
  }
  /////prevwes image end



  return (
    <>
      <Container>
        <div className=" text-center">
          <h1 className='font-bold  mt-10 border inline-block px-8 text-teal-600 py-3'>Image Preview in React</h1>
        </div>
        <div className="  ">
          <div className=" flex justify-center ">
            <MdDriveFolderUpload className='text-[60px] text-blue-500 mt-8 ' />
          </div>
          <div className=" text-center ">
            <h2 className='font-semibold text-base pb-2'>Get started by ading your first file</h2>
            <p className='text-slate-500 font-semibold'>Create new documents dlrcetly within box or uplod an existing file</p>
          </div>
          <div className="text-center">
            <form className=' ml-[30%]  from  ' onClick={() => document.querySelector(".inputfile").click()}>
              <input type="file" className='inputfile ml-[100px] hidden' onChange={handelProfileImageChange} />
              <h2 className='font-bold  flex items-center  '>Upload  <FaCaretDown /></h2>
            </form>
          </div>     
          <div className="flex gap-5 pt-5 justify-center pb-10">
            <div className="border">
              <img style={{ objectFit: 'cover' }} className='w-[400px] h-[500px]' src={image.placeholder} alt="" />
            </div>
          </div>
        </div>
      </Container >
      <Container>
        <Textconvart/>
      </Container>
      

    </>

  )
}

export default App
