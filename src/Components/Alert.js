import React from 'react'

export default function Alert(props) {
    const firstletterCaptial=()=>{
        return props.alertValue.type.charAt(0).toUpperCase() + props.alertValue.type.slice(1)
    }
    return (
        props.alertValue &&
        <div className={`alert alert-${props.alertValue.type} alert-dismissible fade show`} role="alert">
            {firstletterCaptial()+" :  "+props.alertValue.msg}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}
