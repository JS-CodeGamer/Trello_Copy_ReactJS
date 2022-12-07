import React, { useState } from 'react'
import Todolist from './Todolist'

const Fuctions = () => {


    const [list,setlist] = useState([
        {head:'To Do',arr:[ {name:'Helpdesk Call BB999',id:'arr10'},{name:'Helpdesk Call AA999',id:'arr11'} ] , id:1, check: false },
        {head:'Development',arr:[{name:'Helpdesk Call CC999',id:'arr20'},{name:'Helpdesk Call EE999',id:'arr21'}], id:2, check: false},
        {head:'Testing',arr:[{name:'Helpdesk Call DD999',id:'arr30'}],id:3, check: false},
        {head:'Done',arr:[{name:'Helpdesk Call GG999',id:'arr40'},{name:'Helpdesk Call FF999',id:'arr41'}],id:4, check: false}
    ])

    const addlist =(textname,setTextname,showlist,setshowlist)=>{
        const newlist = {
            head:textname,arr:[],id:list.length + 1,check:false
        }
        setlist([...list,newlist])
        setTextname('')
        console.log('list added')
        setshowlist(!showlist)
    }
    
    const called=(k,id,setTextname)=>{
        let z = []
        z = [...z,...k]
        z[id-1].check = !(z[id-1].check); 
        setlist(z)
        console.log('called')
        console.log(list)
        setTextname('')
    }

    const weclicked=(id,setTextname,textname)=>{
        let k = []
        k = [...k,...list]
        const obj = {name:textname,id:('arr'+(''+id)+(''+k[id-1].arr.length))}
        k[id-1].arr = [...k[id-1].arr,obj]
        called(k,id,setTextname)
        setTextname('')
        console.log('card added')
    }  


  return (
    <Todolist key={'todolist'} list={list} addlist={addlist} called={called} weclicked={weclicked} />
  )
}

export default Fuctions
