import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Text is converted to Upper Case","success")
    }
    const handleLowClick = ()=>{
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showAlert("Text is converted to Lower Case","success")
    }
    const handleClearClick = ()=>{
        let newtext = ('')
        setText(newtext)
        props.showAlert("Text is cleared","success")
    }
    const handleCopy = ()=>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text is coppied to clipboard","success")
    }
    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces are removed","success")
    }
    const handleOnChange = (event)=>{
        // console.log("On change : ");
        setText(event.target.value)
    }
    const[text, setText] = useState("");
    // setText("New Text");
    return (
        <>
            <div className='container' style={{color : props.mode === 'dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark'?'#1f1f1f':'white', color : props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
                <button className="btn btn-primary my-2 mx-3" onClick={handleLowClick}>Convert to Lower Case</button>
                <button className="btn btn-primary " onClick={handleCopy}>Copy Text </button>
                <button className="btn btn-primary my-2 mx-3" onClick={handleClearClick}>Clear text</button>
                <button className="btn btn-primary" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color : props.mode === 'dark'?'white':'black'}}>    
                <h2>Your Text Summery</h2>
                <p>{text.split(' ').length} words and {text.length} character</p>
                <p>{0.008 * text.split(' ').length} Minutes to read </p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in text box above to preview here"}</p> 
            </div>
        </>
    )
}

