import React, { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import './Todolist.css'

const Listing = () => {

    const [lists,setLists] = useState({
        '1671039895436': {title:'To Do',
                    items:{'1671039895442':'Helpdesk Call BB999',
                            '1671039895443':'Helpdesk Call AA999'},
                    check: false
                } ,
        '1671039895438': {title:'Development',
                    items:{'1671039895444':'Helpdesk Call CC999',
                            '1671039895445':'Helpdesk Call EE999'},
                    check: false
                } ,
        '1671039895440': {title:'Testing',
                    items:{'1671039895446':'Helpdesk Call DD999'},
                    check: false
                } ,
        '1671039895441': {title:'Done',
                    items:{'1671039895447':'Helpdesk Call GG999',
                            '1671039895448':'Helpdesk Call FF999'},
                    check: false
                }
        })

        // Add New List
        const [showNewListForm, setshowNewListForm] = useState(false)
        const [newListTitle, setnewListTitle] = useState('')
        const toggleNewListForm = () => {
            setshowNewListForm(!showNewListForm);
            setnewListTitle('');
        }
        const addNewList = (e) => {
            e.preventDefault()
            let newLists = {...lists};
            newLists[`${Date.now()}`] = {
                title: newListTitle,
                items:{},
                check:false
            };
            setLists(newLists);
            toggleNewListForm();
        }

        // Add New Item to a list
        const [newItemContent, setNewItemContent] = useState("");
        const toggleNewItemForm = (listID) => {
            let newLists = {...lists};
            newLists[listID].check=!lists[listID].check;
            setLists(newLists);
            setNewItemContent('');
        }

        const addItemToList = (e, listID) => {
            e.preventDefault()
            let newLists = {...lists};
            newLists[listID].items[`${Date.now()}`] = newItemContent;
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

    return (
    <div className='listing'>
        <DragDropContext onDragEnd={onDragEnd}>
        {Object.entries(lists).map(
            ([listID,list])=>
                <Droppable droppableId={listID}>
                    { provided =>
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
                                        ([itemID, itemContent], index) =>
                                            <Draggable
                                                key={itemID}
                                                index={index}
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
                                <form className='cardname' onSubmit={e => addItemToList(e, listID)}>
                                    <input
                                        type="text"
                                        autoFocus
                                        placeholder='Enter a title for this card...'
                                        onChange={(e)=>setNewItemContent(e.target.value)}
                                    />
                                    <div className='addcardinput'>
                                        <button>
                                            <p>Add card</p>
                                        </button>
                                        <span onClick={()=>toggleNewItemForm(listID)} className="material-icons"></span>
                                    </div>
                                </form>
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

        {showNewListForm?
            <div className="newlist" style={{background:'#fff'}}>
            <form className='cardname' onSubmit={e => addNewList(e)}>
                <input
                    type="text"
                    autoFocus
                    placeholder='Add list title...'
                    onChange={(e)=>setnewListTitle(e.target.value)}
                />
                <div className='addcardinput'>
                    <button type='submit'>
                        <p>Add list</p>
                    </button>
                    <span onClick={() => toggleNewListForm()} className="material-icons"></span>
                </div>
            </form>
            </div>
            :
            <div className="newlist">
            <div className="addlist" onClick={() => toggleNewListForm()}>
                <span className="material-icons"></span>
                <p>Add another list</p>
            </div>
            </div>
        }
    </div>
    )
}

export default Listing
