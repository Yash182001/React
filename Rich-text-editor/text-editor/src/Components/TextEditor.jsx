import React from 'react'
import './Editor.css'
import {Editor} from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useState } from 'react';

const TextEditor = () => {

    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
      );

  return (
    <>

      <header className="header">Text Editor</header>

    <div className="editor">
    <Editor 
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
    </div>
     
    
    
    </>
  )
}

export default TextEditor
