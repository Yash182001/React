import React, { useState,useMemo } from 'react'
import JoditReact from 'jodit-react'
import './Jodit.css'

const JoditEdit = () => {

  const config = useMemo(
    () => ({
        readonly: false, 
  toolbar: true,

    }),
    []
);
  const [value,setValue] = useState("")
  // const [content ,setContent] = useState("")
  return (
<>

<header className="header">Jodit Editor</header>

<div className="container">
    <JoditReact
    value={value}
    onChange={newValue => setValue(newValue)}
    config={config}
    // onBlur={newcontent => setContent(newcontent)}
    />
</div>

    <div className="container" dangerouslySetInnerHTML={{ __html:value}}/>
    
 

 </>
  )
}

export default JoditEdit

