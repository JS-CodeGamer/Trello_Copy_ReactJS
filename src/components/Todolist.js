import React, { useState } from 'react'
import './Todolist.css'
import { DragDropContext,Draggable,Droppable } from 'react-beautiful-dnd'
import DraggableElement from './Dnd/DraggableElement'

const Todolist = ({list,addlist,called,weclicked}) => {

    const [showlist , setshowlist] = useState(false)
    const [textname , setTextname] = useState('');

    const onDragEnd = (result)=>{
        if(!result.destination){
            return;
        }
    }


  return (
    <div className='listing' >
        <DragDropContext onDragEnd={onDragEnd} >
        {
            list.map((elem)=>{
                const a = '' + elem.id;
                    return(
                    <DraggableElement key={a} a={a} elem={elem} list={list} called={called} weclicked={weclicked} />
                )})
        }
        </DragDropContext>
      {!showlist?<div className="newlist"  >
        <div className="addlist" onClick={ ()=> setshowlist(!showlist) } >
            <span className="material-icons"></span>
            <p>Add another list</p>
        </div>
      </div>:null }
        {showlist?<div className="newlist" style={{background:'#fff'}} >
            <div className='cardname' >
                <input type="text" placeholder='Add list title...' value={textname} onChange={(text)=>setTextname(text.target.value)} />
                <div className='addcardinput' >
                    <button onClick={()=>addlist(textname,setTextname,showlist,setshowlist) } >
                        <p>Add list</p>
                    </button>
                    <span onClick={ ()=> setshowlist(!showlist) } className="material-icons"></span>
                </div>
            </div>
        </div>:null}
    
    </div>
  )
}

export default Todolist
