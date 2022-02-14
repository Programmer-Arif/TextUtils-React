import React, {useState} from 'react';


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("UpClick");
        setText(text.toUpperCase());
        props.showAlert("success","Converted to Uppercase")
        
    }
    const handleLoClick = ()=>{
        setText(text.toLowerCase());
        props.showAlert("success","Converted to Lowercase")
    }
    const handleClearClick = ()=>{
      setText("");
      props.showAlert("success","Text Cleared")
    }
    const handleCopyClick = ()=>{
        let text = document.getElementById("myBox");
        // text.select();
        // navigator.clipboard.writeText(text.value);
        // document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text);
        props.showAlert("success","Copied to Clipboard")
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/); // Regular Expression
        console.log(newText); // newText is an array
        setText(newText.join(" "));
        props.showAlert("success","Extra spaces removed")
    }
    const handleOnChange = (event)=>{
        // console.log("OnChange");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    // text = "new text"; // wrong
    // setText("Text has been set"); // correct

    return (
        <>
            <div className="container mb-3 my-3" style={{color:props.mode==='light'?'black':'white'}}>
                <h2>{props.heading}</h2>
                <label htmlFor="myBox" className="form-label">Enter your text below</label>
                <textarea style={{backgroundColor:props.mode==='light'?'white':'#001622',color:props.mode==='light'?'black':'white'}} className="form-control" id="myBox" rows="8" placeholder='Enter text here...' value={text} onChange={handleOnChange}></textarea>
                <button className="btn btn-primary my-3 mx-2" disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary my-3 mx-2" disabled={text.length===0} onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary my-3 mx-2" disabled={text.length===0} onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary my-3 mx-2" disabled={text.length===0} onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-primary my-3 mx-2" disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
                <h2>Your text summary</h2>
                {/* <p>{text===""?0:text.split(" ").length} words and {text.length} characters</p> */}
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                {/* <p>{text===""?0:0.008*text.split(" ").length} minutes required to read the text above</p> */}
                <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes required to read the text above</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Nothing to preview..."}</p>
            </div>
        </>
    );
}
