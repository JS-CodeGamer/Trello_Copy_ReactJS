import React from 'react'
import {Draggable } from 'react-beautiful-dnd'

const ListItem = ({index,a,val}) => {
  return (
    <Draggable  index={index} draggableId={a} >
        {provided =>(
            <p 
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            >{val.name}</p>
        )}
    </Draggable>
  )
}

export default ListItem
