import React,{useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState('');
    const [restore, setRestore] = useState('');
    const handleOnChange = () =>{
        let mytext = document.getElementById('mytext');
        setText(mytext.value);
        setRestore(mytext.value);

    }
    const handleUpper = () =>{
        setText(text.toUpperCase());
    }

    const handleLower = () =>{
        setText(text.toLowerCase());
    }

    const clear = () =>{
        setText("");
    }
    const restoreText = ()=>{
        setText(restore);
    }
    const copyText = ()=>{
       let text = document.getElementById("mytext");
       navigator.clipboard.writeText(text.value);
    }
    const removeSpace = () =>{
        setText((text.split(/[ ]+/)).join(" "));

    }
  return (

    <>

    <h1 className={`my-3 text-${props.mode === 'light'?'dark':'light'}`}>Convert Yout Text Here</h1>
      <div className="mb-3 my-3" >
  <textarea className="form-control my-4" id="mytext" rows="8" style={{backgroundColor : props.mode==='light'? 'white': 'rgb(0 24 51)', color : props.mode === 'light'?'black':'white',resize : 'none'}} value={text} onChange={handleOnChange} placeholder="Enter Your Text Here"></textarea>
</div>
<button className='btn btn-primary mx-1' onClick={handleUpper}>ToUpperCase</button>
<button className='btn btn-primary mx-1' onClick={handleLower}>ToLowerCase</button>
<button className='btn btn-primary mx-1' onClick={clear}>Clear Text</button>
<button className='btn btn-primary mx-1' onClick={restoreText}>Restore</button>
<button className='btn btn-primary mx-1' onClick={copyText}>Copy Text</button>
<button className='btn btn-primary mx-1' onClick={removeSpace}>Remove Spaces</button>

<div className={`my-4  text-${props.mode === 'light'?'dark':'light'}`}>
<span>Number of Characters : {text.length}</span> <span> Number of Words : {text.split(" ").length-1}</span>
</div>

<div className={`text-${props.mode === 'light'?'dark':'light'} `}>
    <h5>Preview Your Text Here</h5>
    <span>{text}</span>
</div>
    </>
  )
}
