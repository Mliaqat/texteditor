import React , { useState } from 'react'



export default function Textbox(props) {

    const upper=()=>{
        let newtext= text.toUpperCase();
        setText(newtext);
            }
    const clear=()=>{
           setText("");
            }
    const lower=()=>{
        let newtext= text.toLowerCase();
        setText(newtext);
            }
    const handleOnChange=(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }

     const [text, setText] = useState("");
    
     

    return (
        <>
        <div className="container">
           <h1>{props.head}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} id="mybox" rows="8" onChange={handleOnChange} placeholder="Enter a text Here"></textarea>
        </div> 
        <button type="button" onClick={upper} className="btn btn-primary mx-3 my-2"  >Convert into Upper</button>
        <button type="button" onClick={lower} className="btn btn-primary mx-3 my-2"  >Convert into Lower</button>
        <button type="button" onClick={clear} className="btn btn-primary mx-3 my-2"  >Clear All</button>
        </div>

        <div className="Container" my-3>
        <h1>Text Summary</h1>
        <p>Total Charter {text.length}</p>
        <p>Total word {text.split(" ").filter((elemet)=>{return elemet.length !==0 }).length}</p>
        </div>
        </>
    );
}
