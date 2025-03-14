import { useState } from "react";

function Feedback({onSubmit}){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");
    const [error,setError]=useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();

        if(!name || !email || !message)
        {
            setError("All fields are required");
            return;
        }

        onSubmit({name,email,message});

        setName("");
        setEmail("");
        setMessage("");
        setError("");
    };

    return(
        <div className="feedback-form">
            <h2>Feedback Form</h2>
            {error && <p style={{color:"red"}}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name : </label>
                <input type="text" 
                placeholder="Enter your name"
                value={name}
                onChange={(e)=> setName(e.target.value)}/>
                <br/>
                <br/>
                <label htmlFor="">Email : </label>
                <input type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
                <br/>
                <br/>
                <label htmlFor="">Your Feedback : </label>
                <textarea 
                    placeholder="Enter your feedback"
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}/>
                <br/>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Feedback;