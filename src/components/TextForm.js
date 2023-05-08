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
    let changeHandel = (event) => {
        setText(event.target.value);
    }
  return (
          <div className="container my-3">
      <div>
          <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault"><i class="fa-solid fa-moon"></i></label>
</div>
          <h1>{props.heading}</h1>
          <div className="mb-3 my-4">
              <textarea className="form-control" value={text} onChange={changeHandel} id="exampleFormControlTextarea1" rows="8"></textarea>
          </div>
              <button className="btn btn-primary " onClick={textupper}>Convert to UpperCase</button>
              <button className="btn btn-primary ms-3 " onClick={textLower}>Convert to LowerCase</button>
              <button className="btn btn-primary ms-3 " onClick={textClear}>Clear</button>
              
          <p className='my-3'>{text.split(" ").length } words and {text.length } characters</p>
          </div>
      <div className="container my-3">
              <h2>Preview</h2>
              <p>{ text}</p>
      </div>
      </div>
  )
}
