import React, { useState} from "react"
import google from "../img/google-brands.svg"
import apple from "../img/apple-brands.svg"

function Form({Login, error}) {
   const[details, setDetails] = useState(
      {name:"", 
       email:"",
       password:""})

   const submitHandler = e => {
      e.preventDefault()
      Login(details)
   }

  return (
    <form>
      <div className="login--container">
        <h2 className="login--header">Getting Started</h2>
        <h6 className="login--subheader">Create an account to continue and connect with the people.</h6>
        <div>
          <button onClick = {() => {window.location.href='https://www.gmail.com'}} className="form--button"> 
            <img src = {google} alt = "google" className="button--logo"/> &nbsp;Log in with Google 
          </button>
          <button onClick = {() => {window.location.href='https://www.apple.com'}} className="form--button"> 
            <img src = {apple} alt = "apple" className="button--logo"/> &nbsp;Log in with Apple 
          </button>
        </div>
  
        <hr className="horizontal--line"/> <span> OR </span>  <hr className="horizontal--line"/>

        {(error != "") ? (<div className = "error"> {error} </div>) : ""}

        <div className ="form--container">
            <input type = "email" placeholder="@   Your Email" className="form--input" 
              onChange = {e => setDetails({...details, email: e.target.value})} value = {details.email}/>
            <input type = "text" placeholder="@   Your Name" className="form--input"
              onChange = {e => setDetails({...details, name: e.target.value})} value = {details.name}/>
            <input type = "password" placeholder="@   Create Password" className = "form--input" 
              onChange = {e => setDetails({...details, password: e.target.value})} value = {details.password}/>
        </div>
        <div className = "form--subcontainer">
            <input type = "text" placeholder = "@   Date of birth" className = "form--input--dob" />
            <div className = "form--radio">
                <input type = "radio" className = "form-radio--input"/> &nbsp;Male
                <input type = "radio" className = "form-radio--input" /> &nbsp;Female
            </div>
            
        </div>
        
        <input type = "Submit" placeholder = "Sign Up" className = "form--submit" onClick = {submitHandler}/>
        
        <p className = "form--footer">Already have an account? <span className="form--sign-in"> Sign In </span></p> 
      </div>
    </form>
  );
}

export default Form;