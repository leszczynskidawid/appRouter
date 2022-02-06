import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import { color } from '@mui/system';






function ContactPage() {

    const [inputValue, setInputValue] = useState(""); 
    const [h1value, seth1Value] = useState("")
    const [buttonState ,setButtonState] = useState(false)
  
  const handleChangeInput  = (e) => {
         
        setInputValue(e.target.value)
       

    };
    const handleButtonSendMessages  = (e) => {
        e.preventDefault()  
   

     seth1Value(inputValue)

     setButtonState(!buttonState)
     console.log(buttonState)


     
    }




 
    
    
  

    return(     
      <>
      <form >
        <h1>Skontaktuj sie z nami </h1>
        <textarea onChange = {handleChangeInput} name="contact" id="contact" cols="30" rows="10" value={inputValue} placeholder='wpisz tekst...'></textarea>
        <button  onClick = {handleButtonSendMessages} style ={buttonState ?{color:"red"}: {color:"green"}}>Send messages</button>
        <h2>{h1value}</h2>
   
        </form>
        </>
    )
};

 





export default ContactPage; 



