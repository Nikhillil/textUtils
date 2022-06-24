import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Nikhil Lilwani" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleDownClick = () => {
    // console.log("Nikhil Lilwani" + text);
    let newText = text.toLocaleLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase!", "success");
  };
  
  const handleClearClick = () =>{
      let newText = "";
      setText(newText)
      props.showAlert("Text Cleared", "success");
  }

  const handleOnChange = (e) => {
    // console.log("On change");
    setText(e.target.value);
  };

  const handleCopyClick = () => {
    console.log("Iam copy");
    const text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  }

  const handleExtraSpace = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(' '));
      props.showAlert("Extra spaces removed!", "success");
  }

  const Words = () => {
    let words = text.trim().split(" ").length;
    if (words === 1 && text.split(" ")[0] === "") {
      words = 0;
      return words;
    } else {
      return words;
    }
  }

  const [text, setText] = useState(" ");
  return (
    <>
      <div className="container" style={{color: props.mode==="dark"?"white":"#052657"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==="dark"?"grey":"white", color: props.mode==="dark"?"white":"#052657"}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary " onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleDownClick}>
          Convert to LowerCase
        </button> 
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear button
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
          Copy button
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
       
      </div>
      <div className="container my-3" style={{color: props.mode==="dark"?"white":"#052657"}}>
        <h2>your text summary</h2>
        <p>{Words()} Words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>1?text:"Enter something in the text above to preview it here"}</p>
      </div>
    </>
  );
}
