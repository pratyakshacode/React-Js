import React from 'react'

export default function About(props) {
  return (
    <>
    
        <div className="accordion my-5" id="accordionExample bg-dark" >
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{color: props.mode === 'light'?'black':'white',backgroundColor : props.mode === 'light'?'white':'rgb(0 24 51)'}}>
        <strong>About Us</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{color: props.mode === 'light'?'black':'white',backgroundColor : props.mode === 'light'?'white':'rgb(0 24 51)'}}>
        Hey there this is the app to help to customize the text according to your need and will help to quickly access the various features related to the text. We are awair that the users wants all the feature in one app and we are working on it. The updates will come for making this app as better app
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{color: props.mode === 'light'?'black':'white',backgroundColor : props.mode === 'light'?'white':'rgb(0 24 51)'}}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{color: props.mode === 'light'?'black':'white',backgroundColor : props.mode === 'light'?'white':'rgb(0 24 51)'}}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{color: props.mode === 'light'?'black':'white',backgroundColor : props.mode === 'light'?'white':'rgb(0 24 51)'}}>
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{color: props.mode === 'light'?'black':'white',backgroundColor : props.mode === 'light'?'white':'rgb(0 24 51)'}}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    </>
  )
}
