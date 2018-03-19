///Contains logic to render single label and text input
import React from 'react'
export default ({ input, label, meta: {error, touched} }) =>{
  return(
    <div>
      <label>{label}</label>
      <input  style={{marginBottom:5}} {...input}/>
      <div className="red-text" style={{marginBottom:20,marginTop:5}}>
      {touched && error}
      </div>
    </div>
  )
}
