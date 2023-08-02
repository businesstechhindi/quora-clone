import React, { useState } from "react";

const Edit = () => {
  const [text, setText] = useState("");

  const handleBoldClick = () => {
    // Wrap the selected text in <strong> tags
    document.execCommand("bold", false, null);
  };

  const handleHeadingClick = (tag) => {
    // Wrap the selected text in the specified heading tag
    document.execCommand("formatBlock", false, tag);
  };

  return (
    <div>
      <div>
        <button onClick={handleBoldClick}>Bold</button>
        <button onClick={() => handleHeadingClick("h1")}>H1</button>
        <button onClick={() => handleHeadingClick("h6")}>H6</button>
      </div>
      <div
        contentEditable
        style={{
          border: "1px solid #ccc",
          minHeight: "100px",
          padding: "10px",
        }}
        onInput={(e) => setText(e.target.innerHTML)}
      />
      <div>
        <h2>Preview:</h2>
        <div>{text}</div>
      </div>
    </div>
  );
};

export default Edit;
