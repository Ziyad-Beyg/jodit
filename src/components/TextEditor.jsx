import { useState, useRef } from "react";
import JoditEditor from "jodit-react";

const TextEditor = () => {
  const editor = useRef(null);
  const textContainer = useRef(null);
  const [editorText, setEditorText] = useState();
  const [content, setContent] = useState();

  return (
    <div style={{ maxWidth: "50%", margin: "0 auto" }}>
      <JoditEditor
        className="editorContainer"
        ref={editor}
        value={content}
        onBlur={(newContent) => setEditorText(newContent)}
        onChange={(newContent) => setContent(newContent)}
      />
      <input type="text" name="Author Name" title="Author Name" id="" />

      {/* <h1>{content}</h1> */}
      <hr />
      {/* <h1>{editorText}</h1> */}
      <button
        onClick={() => {
          console.log(editorText);
          textContainer.current.innerHTML = content;
        }}
      >
        PREVIEW
      </button>

      <div ref={textContainer}></div>
    </div>
  );
};

export default TextEditor;
