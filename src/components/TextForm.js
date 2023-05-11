import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState("enter text Here");
    let textupper = () => {
        setText(text.toUpperCase());
    }
    let textLower = () => {
        setText(text.toLowerCase());
    }
    const textClear = () => {
        setText("");
    }
    const textCopy = () => {
        navigator.clipboard.writeText(text);
    }
    let changeHandel = (event) => {
        setText(event.target.value);
    }

  return (
          <div className="container my-3">
      <div>
         
          <h1>{props.heading}</h1>
          <div className="mb-3 my-4">
              <textarea className="form-control" value={text} onChange={changeHandel} id="exampleFormControlTextarea1" rows="8"></textarea>
          </div>
              <button className="btn btn-primary " onClick={textupper}>Convert to UpperCase</button>
              <button className="btn btn-primary ms-3 " onClick={textLower}>Convert to LowerCase</button>
              <button className="btn btn-primary ms-3 " onClick={textClear}>Clear</button>
              <button className="btn btn-primary ms-3 " onClick={textCopy}>Copy</button>
              
          <p className='my-3'>{text.length>0?text.split(" ").length:0 } words and {text.length } characters</p>
          </div>
      <div className="container my-3">
              <h2>Preview</h2>
              <p>{ text}</p>
      </div>
      </div>
  )
}
