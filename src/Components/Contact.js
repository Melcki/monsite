import React, { useState } from "react";

const Contact = () => {

    const [message, setMessage] = useState("");

    return(
        <div style={{padding:"10%"}}>
            <center>
                <h1>Me contacter</h1>
                <textarea onChange={{message}} style={{width:"50%", height:"300px"}}>

                </textarea><br></br>
                <button>Envoyer</button>
            </center>
            
        </div>
    )
}

export default Contact;