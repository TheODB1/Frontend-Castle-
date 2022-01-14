import React from 'react'

export const MessageBox = (props) => {
    return (
        <div className={`alert alert-${props.variant || 'info'}`}>
          {props.children}       
        </div>
    )
}

//props.children means anything inside <MessageBox> in HomeScreen (in this case is {error})