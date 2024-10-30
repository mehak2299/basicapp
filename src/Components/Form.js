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
    const clearText=()=>{
        setValue('')
    }
    const handleCopy=()=>{
        var text=document.getElementById('exampleFormControlTextarea1')
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    const removeSpace=()=>{
        let text=textValue.split(/[]+/);
        setValue(text.join(''))
    }
    const[textValue,setValue]=useState('')
    return (
        <div className={props.mode ? 'form_color_black outer_form' : 'form_color_white outer_form'}>
        <div className='form_text_to_analyze'>
            <div>
                <h5>{props.label}</h5>
                <textarea className="form-control text_area" id="exampleFormControlTextarea1" rows="5" value={textValue} onChange={(e)=>handleValue(e)}></textarea>
            </div>
            <div className='buttons'>
            <button className='btn btn-primary'style={{marginRight:'5px'}}onClick={()=>upperCase()}>UpperCase</button>
            <button className='btn btn-primary'onClick={()=>lowerCase()} style={{marginRight:'5px'}}>LowerCase</button>
            <button className='btn btn-primary'onClick={()=>clearText()} style={{marginRight:'5px'}}>clear Text</button>
            <button className='btn btn-primary'onClick={()=>handleCopy()} style={{marginRight:'5px'}}>copy Text</button>
            <button className='btn btn-primary'onClick={()=>removeSpace()} style={{marginRight:'5px'}}>remove extra space</button>


            </div>
            

        </div>
        <div >
            <h6>Your text summary</h6>
            <p>No of Lines{textValue.length>0?textValue.split('\n').length:''},Characters{textValue.length}</p>
            <p>Words{textValue.trim().split(/\s+/).length}</p>
            <p>{0.008*textValue.split(' ').length} Minutes</p>
            <h6>Preview</h6>
            {textValue.length>0?textValue:'Enter something for preview'}
            </div>
        </div>
    )
}
