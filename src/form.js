import React from "react"
import Entry from "./formentry";

const Form =()=>{
    return(
             <div className="row justify-content-center">
                <div className="col-lg-8 col-xl-7">
                  
                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    

                        <Entry labelinp="First Name" type="text" id="name" htmlfor="name" />
                        <Entry labelinp="Email Address" type="email" id="email" htmlfor="email"/>
                        <Entry labelinp="Phone Number" type="tel" id="phone" htmlfor="phone" />
                    
                        <div class="form-floating mb-3">
                         <textarea className="form-control" id="message" type="text" placeholder="Enter your message here...     "    data-sb-validations="required" style={{height:"10rem"}}></textarea>

                         <label htmlfor="message">Message</label>
                    </div>

                        <button class="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Send</button>
                   
                 </form>
                </div>
         </div>
    )
}

export default Form;