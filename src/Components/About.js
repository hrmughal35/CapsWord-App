import React from "react"; 
// (We will use  this line in case if we are using the state for darkmode switch whose other code is commented just below.)?
export default function About(props) {

// const[mystyle, setMyStyle] = useState(
//   {
//     color: 'black',
//     backgroundColor:'white',
//    }
// )

// const togglestyle= () =>{
//     if(mystyle.color === 'black'){
//       setMyStyle({
//         color: 'white',
//         backgroundColor: 'black',
//       })
//     }
//     else(
//       setMyStyle({
//         color: 'black',
//         backgroundColor: 'white',
//       })
//     )
// }

  return (
    <div className="container" mx-3="true" style={{ color: props.mode === "dark" ? "white" : "black" }}>
      <h3>
        <u>About US</u>
      </h3>

      <div className="accordion" id="accordionExample"  >
        <div className="accordion-item" style={{backgroundColor:props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black" }}>
          <h2 className="accordion-header">
            <button
              style={{backgroundColor:props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black" }}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={{backgroundColor:props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black" }}>
          <h2 className="accordion-header">
            <button
             style={{backgroundColor:props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black" }}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{backgroundColor:props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black" }}>
          <h2 className="accordion-header">
            <button
            style={{backgroundColor:props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black" }}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
