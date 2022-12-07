import React, { useState } from 'react'
import Todolist from './Todolist'


const Funcrions = () => {
  let list = [
    {head:'To Do',arr:[ 'Helpdesk Call BB999','Helpdesk Call AA999' ] , id:1, check: false },
    {head:'Development',arr:['Helpdesk Call CC999','Helpdesk Call EE999'], id:2, check: true},
    {head:'Testing',arr:['Helpdesk Call DD999'],id:3, check: false},
    {head:'Done',arr:['Helpdesk Call GG999','Helpdesk Call FF999'],id:4, check: false}
  ]

  const changestate=(id)=>{

  }

  const weclicked=()=>{
    let x =list ;
  }

  return (
    <Todolist weclicked={weclicked} list={list} />
  )
}

export default Funcrions
