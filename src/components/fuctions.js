import React, { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import './Todolist.css'

const Fuctions = () => {

    const [lists,setLists] = useState({
        'list1': {title:'To Do',
                    items:{'item0':'Helpdesk Call BB999',
                            'item1':'Helpdesk Call AA999'},
                    check: false
                } ,
        'list2': {title:'Development',
                    items:{'item2':'Helpdesk Call CC999',
                            'item3':'Helpdesk Call EE999'},
                    check: false
                } ,
        'list3': {title:'Testing',
                    items:{'item4':'Helpdesk Call DD999'},
                    check: false
                } ,
        'list4': {title:'Done',
                    items:{'item5':'Helpdesk Call GG999',
                            'item6':'Helpdesk Call FF999'},
                    check: false
                }
        })

        // Add New Item to a list
        const [newItemContent, setNewItemContent] = useState("");
        const toggleNewItemForm = (listID) =>{
            let newLists = {...lists};
            newLists[listID].check=!lists[listID].check;
            setLists(newLists);
            setNewItemContent('');
        }

        const addItemToList = (listID) => {
            let newLists = {...lists};
            let itemC=0;
            for (let [_, list] of Object.entries(newLists) ) {
                itemC+=Object.entries(newLists[listID].items).length
            }
            newLists[listID].items[`item${itemC}`] = newItemContent;
            setLists(newLists);
            toggleNewItemForm(listID);
        }

        // Handle Drag
        const onDragEnd = (results) => {
            if (!results.destination || results.destination.droppableId === results.source.droppableId)
                return;
            const {draggableId, destination, source} = results;
            if (results.destination !== results.source) {
                let sourceList = lists[source.droppableId]
                let destinationList = lists[destination.droppableId]
                destinationList.items[draggableId] = sourceList.items[draggableId]
                delete sourceList.items[draggableId]
                let newLists = {...lists}
                newLists[source.droppableId] = sourceList
                newLists[destination.droppableId] = destinationList
                setLists(newLists)
            }
        }
        const dummy = () => {}

    return (
    <div className='listing'>
        <DragDropContext onDragEnd={onDragEnd}>
        {Object.entries(lists).map(
            ([listID,list])=>
                <Droppable droppableId={listID}>
                    { provided=>
                        <div
                            className="maincontent"
                            key={listID}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <div className="listitle">
                                <h3>{list.title}</h3>
                                <span className="material-icons"></span>
                            </div>

                                <div className="listname" >
                                    {Object.entries(list.items).map(
                                        ([itemID, itemContent]) =>
                                            <Draggable
                                                key={itemID}
                                                index={parseInt(itemID.slice(-1))}
                                                draggableId={itemID}
                                            >
                                            {provided =>
                                                <p
                                                    key={itemID}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    ref={provided.innerRef}
                                                >
                                                    {itemContent}
                                                </p>
                                            }
                                            </Draggable>
                                    )}
                                    {provided.placeholder}
                                </div>

                            {list.check? 
                                <div className='cardname' >
                                    <input
                                        type="text" placeholder='Enter a title for this card...'
                                        onChange={(e)=>setNewItemContent(e.target.value)}
                                    />
                                    <div className='addcardinput'>
                                        <button onClick={()=>addItemToList(listID) }>
                                            <p>Add card</p>
                                        </button>
                                        <span onClick={()=>toggleNewItemForm(listID)} className="material-icons"></span>
                                    </div>
                                </div>
                                :
                                <div className='addcard' onClick={()=>toggleNewItemForm(listID)}>
                                    <span className="material-icons"></span>
                                    <p>Add a card</p>
                                </div>
                            }
                        </div>
                    }
                </Droppable>
            )
        }
        </DragDropContext>

        {false?
            <div className="newlist" style={{background:'#fff'}}>
            <div className='cardname'>
                <input type="text" placeholder='Add list title...' onChange={(e)=>dummy()} />
                <div className='addcardinput'>
                    <button onClick={()=>dummy() }>
                        <p>Add list</p>
                    </button>
                    <span onClick={ ()=> dummy() } className="material-icons"></span>
                </div>
            </div>
            </div>
            :
            <div className="newlist">
            <div className="addlist" onClick={ ()=> dummy() }>
                <span className="material-icons"></span>
                <p>Add another list</p>
            </div>
            </div>
        }
    </div>
    )
}

export default Fuctions
