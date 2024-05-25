import React from 'react'
import Tesseract from 'tesseract.js';
import { useEffect, useState } from 'react';
const Textconvart = () => {
    const [image, setImage] = useState(null);
    const [text, setText] = useState("");
    const hendelImage = async () => {
        Tesseract.recognize(image, "eng").then((res) => {
            setText(res.data.text)
        }).catch((err) => {
            console.log(err);
        })
    }
    const handelChange = (e) => {
        const image = e.target.files[0];
        setImage(image)
        console.log(image);
    }
    return (
        <>
       
         <div className="flex justify-center py-5">
         <input  type="file" onChange={handelChange} />
         </div>
        <div className="flex justify-center py-5">
        <button className='font-bold  border inline-block px-8 text-teal-600 py-3'  onClick={hendelImage}>convert Image Text</button>

        </div>
           <div className=" ml-[380px] p-5 w-[400px] h-[400px] border">
           {text && (
                <p>
                    {text}
                </p>
            )


            }
           </div>

        </>
    )
}

export default Textconvart