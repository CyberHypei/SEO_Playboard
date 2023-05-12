import React from 'react'
import '../styles/Services.css'

const demos = {
    soundcloud:
      '<iframe width="100%" height="400" scrolling="yes" frameborder="10" src="https://www.flipkart.com/" display="none" position="sticky"></iframe>'
    };
  
  function Iframe(props) {
    return (
        <div dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }} />
        );
    }

function Services() {
  return (
    <div className="Split_frame" >
        {/* <h1>This is the Service Page.</h1>  */}
        
            <Iframe iframe={demos["soundcloud"]} />
            
    </div>
  )
}

export default Services
