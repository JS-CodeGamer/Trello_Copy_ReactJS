import React from 'react'
import { CgMenuGridR } from "react-icons/cg";
import {ImTrello} from "react-icons/im"
import {GoChevronDown} from "react-icons/go"
import {AiOutlineInfoCircle , AiOutlineBell} from "react-icons/ai"


const Header = () => {
  return (
    <header className='header'>
      <div className='leftnav' >
        <button className='hove' >
            <CgMenuGridR className='icon'  />
        </button>
        <div className='hove' >
        <div className="left"  >
            <ImTrello className='trello'  />
            <h2>Trello</h2>
        </div>
        </div>
        <div className='hove' >
        <div className="left">
            Workspaces
            <GoChevronDown className='icons'/>
        </div>
        </div>
        <div className='hove' >
        <div className="left">
            Recent
            <GoChevronDown className='icons'/>
        </div>
        </div>
        <div className='hove' >
        <div className="left">
            Starred
            <GoChevronDown className='icons'/>
        </div>
        </div>
        <div className='hove' >
        <div className="left">
            Templates
            <GoChevronDown className='icons'/>
        </div>
        </div>
        <div className="left create hove">
            Create
        </div>

      </div>
      <div className="rightnav">
        <div className="search">
            <input type="search" placeholder='Search' />
            <span className="material-icons"></span>
        </div>
        <button  >
          <AiOutlineInfoCircle className='icon' />
        </button>
        <button  >
          <AiOutlineBell className='icon' />
        </button>
        <div className='qk' >
          <p>QK</p>
        </div>
      </div>

    </header>
  )
}

export default Header
