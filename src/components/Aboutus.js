
import React,{useState} from 'react'

export default function About() {
  const [deafultbg, setbg] = useState({
    color: "black",
    backgroundColor: "white",
    Name: "fa-solid fa-moon fa-shake fa-xl"
  });
  const togglebg = () => {
    
    if (deafultbg.color === "black") {
      setbg({
        color: "white",
        backgroundColor: "#2d2727",
        Name:"fa-sharp fa-solid fa-sun fa-spin fa-xl"
      })
    }
    else {
      setbg({
        color: "black",
        backgroundColor: "white",
        Name: "fa-solid fa-moon fa-shake fa-xl"
      })
    }
  }
  return (
    <div>
      <div className="container my-3">
      <div className="form-check form-switch">
  <input className="form-check-input" onClick={togglebg} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><i class={deafultbg.Name}></i></label>
</div>
      </div>
          <div className="container my-4 " >
          <div className="accordion" id="accordionExample" >
  <div className="accordion-item" style={deafultbg}>
    <h2 className="accordion-header"style={deafultbg}>
      <button className="accordion-button" type="button" data-bs-toggle="collapse" style={deafultbg} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
              </div>
              </div>
    </div>
  )
}
