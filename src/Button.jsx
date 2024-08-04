import React from 'react'
import { getErrorMap } from 'zod'

function Button(props)  {

 const[selected, setSelected] = React.useState(false)

 const[current, setCurrent] = React.useState({})

  let convo = ""

  let curo = ""

  


  


  
   

  

  for(let objo in props.content){
    convo = props.content[objo]
  }

  //console.log(convo)

  return (
    <button className="" >COOL {convo}</button>
  )
}

export default Button