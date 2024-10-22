import React, { useState } from 'react'

export default function Form(props) {
    const upperCase=()=>{
      setValue(textValue.toUpperCase())
    }
    const handleValue=(e)=>{
        setValue(e.target.value)
    }
    const lowerCase=()=>{
        setValue(textValue.toLocaleLowerCase())

    }
    const[textValue,setValue]=useState('')
    return (
        <>
        <div>
            <div className="mb-3">
                <label className="form-label">{props.label}</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={textValue} onChange={(e)=>handleValue(e)}></textarea>
            </div>
            <div style={{display:'flex',flexDirection:'row',}}>
            <button className='btn btn-primary'style={{marginRight:'5px'}}onClick={()=>upperCase()}>UpperCase</button>
            <button className='btn btn-primary'onClick={()=>lowerCase()}>LowerCase</button>
            </div>
            

        </div>
        <div className="container">
            <h2>Your text summary</h2>
            <p>No of Lines{textValue.length>0?textValue.split('\n').length:''},Characters{textValue.length}</p>
            <p>Words{textValue.trim().split(/\s+/).length}</p>
            <p>{0.008*textValue.split(' ').length} Minutes</p>
            <h2>Preview</h2>
            <div>{textValue}</div>
            </div>
        </>
    )
}
