import React, { useState } from "react";

export default function TextForm(props) {
  const [text, newtext] = useState(""); //The given value "Write your text is the defaulted value of the text."
  // text =   "New Text" (It is the wrong way to change the text)
  // newtext("Enter you new text") <= It is the right way to change the text
  const handleupperclick = () => {
    console.log("Upper case Button has been clicked");
    let settext = text.toUpperCase();
    newtext(settext);
    props.showAlert("Converted into UpperCase", "Success")
  };

  const handlelowerclick = () => {
    console.log("Lower case Button has been clicked");
    let settext = text.toLowerCase();
    newtext(settext);
    props.showAlert("Converted into LowerCase", "Success")
  };
  const handlecopyclick = () => {
    console.log("Text has been copied.");
    // text.select(); (Don't know how to display that text has been selected or not.)
    navigator.clipboard.writeText(text);
    props.showAlert("Text has been copied", "Success")
  };
  const handleremoveclick = () => {
    newtext("");
    console.log("Successfully cleared the Text Area");
    props.showAlert("Text has been Cleared", "Success")
  };

  const onchangehandler = (event) => {
    newtext(event.target.value);
  };

  return (
    <>
      <div>
        <div className="mb-3">
          <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
            <h3>{props.heading}</h3>
            <textarea
              style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
                color: props.mode === "dark" ? "white" : "dark",
              }}
              className="form-control"
              value={text}
              onChange={onchangehandler}
              id="exampleFormControlTextarea1"
              rows="5"
            ></textarea>
          </div>
          <button className="btn btn-primary my-2" onClick={handleupperclick}>
            Convert to uppercase
            
          </button>
          <button className="btn btn-primary mx-2" onClick={handlelowerclick}>
            Convert to lowercase
          </button>
          <button className="btn btn-success mx-2" onClick={handlecopyclick}>
            Copy the text
          </button>
          <button
            className="btn btn-secondary my-2"
            onClick={handleremoveclick}
          >
            Remove the text.
          </button>
        </div>
      </div>
      <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h3>Text Summary:</h3>
        <p>
          {text.split(" ").length} Words and {text.length} Alphabets
        </p>
        <h3>Your text preview</h3>
        <p>{text.length>0?text:"Enter your text in text box above for preview"}</p> <hr></hr>
      </div>
            <div className="container">
        <h5>
          This Application is created by Hassan Raza.
        </h5>
      </div>
    </>
  );
}
