import React, { useState } from 'react'
import {FormGroup, Input, Label} from 'reactstrap'
import '../App.css'
const App = () => {

  // const [baseImage,setBaseImage] = useState("");
  // const [base64code,setBase64code] = useState("");
  const [images,setImages] = useState([])

  // const uploadImage =async (e)=>{
  //   // console.log(e.target.files)
  //   const file = e.target.files[0]
  //   const base64 = await convertBase64(file);
  //   setBaseImage(base64);
  // }

  // const convertBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);

  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };

  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  // };



  // const uploadImage = (e)=>{
  //   const file = e.target.files[0]
  //   console.log(file)
   
  //   convertBase64(file);
  // }

  // const convertBase64 = (file) =>{
  //   const reader = new FileReader();

  //   reader.onload=()=>{
  //     setBaseImage(reader.result.toString());
  //     setBase64code(reader.result)
      
  //   }

  //   reader.readAsDataURL(file);
  // }



  
   const uploadMultipleImage = (e)=>{
    // console.log(e.target.files)

  const files = Array.from(e.target.files);
  console.log("Files----------",files)
  setImages(files);
  multipleBase64(files)
   
  }

  const multipleBase64 = (files) => {
    let base64Array = [];
    files.forEach((images) => {
      const reader = new FileReader();
      reader.readAsDataURL(images);
      reader.onload = () => {
        base64Array.push(reader.result);
        if (base64Array.length === files.length) {
          setImages(base64Array); 
          
        }
      };
    });
  };

  return (
    <>
    <div className='image'>
      <FormGroup>
      <Label for='image'>Upload Multiple Image:</Label><br/>
      <Input type='file' multiple onChange={(e)=>uploadMultipleImage(e)}/>
      </FormGroup>
    </div>

    <div className="output">
     <p>Output:</p>
     <div>
     {
          images.map(
            (imgs,i)=>{
              return(
                  // <img src={URL.createObjectURL(imgs)} key={i}  className='img ms-5' alt='input'/>
                  <img src={imgs} key={i}  className='img ms-5 mt-5' alt='input'/>
                  
                   
              )
            })
     }
     </div>
     {/* <div>
      {
        images.map(
          (imgs,i)=>{
            return(
             <textarea className='ms-5' key={i} rows="15" cols="120" value={imgs}></textarea>

            )
          }
        )
      }
     </div> */}
       {/* <img src={baseImage}  className='img ms-5' alt='input'/> */}
       {/* <textarea className='ms-5' rows="15" cols="120" value={base64code}></textarea> */}
    </div>
    </>
  )
}
export default App
