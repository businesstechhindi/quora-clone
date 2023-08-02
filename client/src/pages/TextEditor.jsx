import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';

const TextEditor = () => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      const editor = new Quill(editorRef.current, {
        theme: 'bubble',
        placeholder: 'Say something...',
      });

      quillRef.current = editor; // Save the quill instance to quillRef

      // Add 'bold' toolbar button
      const toolbar = editor.getModule('toolbar');
      toolbar.addHandler('bold', handleBoldClick);

      // Handle content change
      editor.on('text-change', handleContentChange);
    }
  }, []);

  const handleBoldClick = () => {
    const quill = quillRef.current;
    if (quill) {
      const selection = quill.getSelection();
      if (selection) {
        const selectedText = quill.getText(selection.index, selection.length);
        const isBold = quill.getFormat(selection).bold;
        quill.format('bold', !isBold);
      }
    }
  };

  const handleContentChange = () => {
    const quill = quillRef.current;
    if (quill) {
      const content = quill.root.innerHTML;
      // You can use the 'content' variable to store or process the editor content.
      setContent(content); // Set the content to show in the output div
    }
  };

  const [content, setContent] = React.useState('');

  return (
    <div>
      <div ref={editorRef} style={{ minHeight: '150px', border: '1px solid red' }} />
      <div>
        <button onClick={handleBoldClick} style={{backgroundColor:"red"}}>Bold</button>
      </div>
      <div>
        <p>Content:</p>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default TextEditor;
