import React from "react";

const Entry =({labelinp,type,id,htmlfor}) => {
    return(
     
        <div className="form-floating mb-3">
         <input className="form-control" id={id} type={type}placeholder="Enter your name..." data-sb-validations="required" />
        <label htmlFor={htmlfor}>{labelinp}</label>
        <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
          
     </div>
    )
}

export default Entry;