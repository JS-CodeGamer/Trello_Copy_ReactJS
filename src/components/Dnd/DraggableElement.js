import React, { useState } from 'react'
import {Droppable } from 'react-beautiful-dnd'
import ListItem from './ListItem'

const DraggableElement = ({a,elem,list,called,weclicked}) => {
    const [textname , setTextname] = useState('')
    return(
        <div className="maincontent"  >
            <div className="listitle">
                <h3>{elem.head}</h3>
                <span className="material-icons"></span>
            </div>
            <Droppable droppableId={a} >
                {
                    (provided)=>(
                        <div className="listname" ref={provided.innerRef}  {...provided.droppableProps} >
                            {elem.arr.map((val,index)=>{
                                const a = ''+ val.id
                            return(
                                <ListItem index={index} a={a} val={val} />
                            )})}
                        </div>
                    )
                }
            </Droppable>
            {!elem.check ?
                <div className='addcard' onClick={()=>called(list,elem.id,setTextname) } >
                    <span className="material-icons"></span>
                    <p>Add a card</p>
                </div>:null
            }
            {elem.check? 
                <div className='cardname'  >
                    <input type="text" placeholder='Enter a title for this card...' value={textname} onChange={(text)=>setTextname(text.target.value)} />
                    <div className='addcardinput' >
                        <button onClick={()=>weclicked(elem.id,setTextname,textname) } >
                            <p>Add card</p>
                        </button>
                        <span onClick={()=>called(list,elem.id,setTextname)} className="material-icons"></span>
                    </div>
                </div>:null
            }
        </div>
    
)
}

export default DraggableElement
