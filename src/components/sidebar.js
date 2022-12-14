import React from 'react'

const Sidebar = ({imgsrc}) => {
  return (
    <div >
      <nav className="side">
        <button className='double' >
            <img src="https://trello-replica.web.app/static/media/user-blue.022f390c.png" alt="" className="icon " />
        </button>
        <button className='arr' >
            <img src={imgsrc} alt="" className="icon" />
        </button>
      </nav>
    </div>
  )
}

export default Sidebar
