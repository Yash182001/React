import React, {useCallback, useState,useMemo} from 'react'
import {useDropzone} from 'react-dropzone'
import '../App.css'
import close from './close.png'
import upload from './upload.png'

const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  transition: 'border .3s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};
function MyDropzone(props) {

  const [images,setImages] = useState([])

  const onDrop = useCallback(acceptedFiles => {
  //  console.log("Accepted Files-----",acceptedFiles)
  const files = Array.from(acceptedFiles);
  console.log("Files----------",files)
  // setImages(files);
  setImages(files.map((file) => ({
    name: file.name,
    size: file.size,
    base64: null, // Placeholder for base64 data
  })));
  multipleBase64(files)
  }, [])

  const multipleBase64 = (files) => {
    let base64Array = [];
    files.forEach((images) => {
      const reader = new FileReader();
      reader.readAsDataURL(images);
      reader.onload = () => {
        base64Array.push(reader.result);
        if (base64Array.length === files.length) 
        //   {
        //   setImages(base64Array); 
          
        // }
        {
          setImages((prevImages) => prevImages.map((img, i) => ({
            ...img,
            base64: base64Array[i],
          })));
        }
      };
    });
  };

  const removeImg = (i)=>{
    // console.log(i,"delete")
    let deleteImg = [...images];
    deleteImg.splice(i,1);
    setImages(deleteImg);
  }
  const {getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject} = useDropzone({onDrop,accept: {
    'image/png': ['.png'],
    'text/html': ['.html', '.htm'],
  }})

  const handlePaste = (event) => {
    console.log("pasted")
    if (event.clipboardData.items) {
      const clipboardItem = event.clipboardData.items[0];
      if (clipboardItem.kind === 'file' && clipboardItem.type.includes('image')) {
        const file = clipboardItem.getAsFile();
        setImages(prevImages => [
          ...prevImages,
          {
            name: file.name,
            size: file.size,
            base64: URL.createObjectURL(file),
          }
        ]);
      }
    }
  };

  



  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);

  


  return (
    <>
    <h3 className='text'>Drag and Drop Files</h3>
    <div className='drag' {...getRootProps({ style, onPaste: handlePaste })}>
      <input {...getInputProps()} />
      <img src={upload} className='img' alt='upload'/>
      <p>Drag and drop your images here.</p>
      <em>(Only *.jpeg and *.png images will be accepted)</em>
    </div>


    <p className='preview h5'>Preview:</p>
     <div>
     
     {
          images.map(
            (imgs,i)=>{
              // console.log("images------",imgs)
              return(
                  // <img src={URL.createObjectURL(imgs)} key={i}  className='img ms-5' alt='input'/>
                  <p>
                  <img src={imgs.base64} key={i}  className='img ms-4 mt-5' alt='input'/>
                  <button type='button' className='btn' onClick={()=>{removeImg(i)}}><img className='close' src={close} alt='close'/></button><br/>
                  <span className='ms-4'>{imgs.name}</span><br/>
                  <span className='ms-4'>{imgs.size} bytes</span>
                  </p>
                  
                   
              )
            })
     }
     
     </div>
    </>
  )
}

export default MyDropzone