import React, { useState } from "react";
import "./Nav.css"
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import EmailIcon from '@mui/icons-material/Email';
function ContactForm() {
    const [name,Setname] = useState("");
    const [email,Setemail] = useState("");
    const [text,Settext] = useState("");
    const submit = (event)=>{
        event.preventDefault();
        console.log(event);
    }
    function Call(){
        alert("I have contacted you with a call...")
    }
    
    function Message(){
        alert("I have contacted you with a message...")
        
    }
    function Email(){
        alert("I have contacted you with a email...")
    }



  return (

    <div className="all-form">
      <form onSubmit={submit} className="form-elements">
        <div className="top">
          <button className="Black-button" onClick={Message}><MessageOutlinedIcon />  VIA SUPPORT CHAT</button>
          <button  className="Black-button" onClick={Call}>< CallRoundedIcon />VIA CALL</button>
        </div>
        <button className="White-button" onClick={Email}><EmailIcon/> VIA EMAIL FORM</button>
        
        <div className="form-control">
            
        <label htmlFor="name">Name </label>
          <input
            type="text"
            name="name"
            placeholder="ENTER YOUR NAME"
            onChange={(e) =>Setname(e.target.value)}
          />
       
        
        </div>
        
        <div className="form-control"> 
        <label htmlFor="email">Email </label>
          <input type="email"
            name="email"
            onChange={(e) =>Setemail(e.target.value)}
            placeholder="ENTER YOUR EMAIL"/>
        </div>
        
        <div className="form-control">
        <label htmlFor="Any"> Enter Text   </label>
       
        <textarea name="Any"
         onChange={(e) =>Settext(e.target.value)}    
        placeholder="Enter any text..." />
        </div>
       
    
        <button  className="Black-button" type="submit">SUBMIT</button>

      </form>
    <table>
         <caption>Details</caption> 
         
      
      
        <tr> <th>Name</th> <td>{name}</td> </tr>
        <tr> <th>Email</th> <td>{email}</td> </tr>
        <tr> <th>Text</th> <td>{text}</td> </tr>
      
      </table>
    </div>
    
  );
}

export default ContactForm;
