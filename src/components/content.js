import React from 'react'
import Listing from './main'

const MainContent = () => {
    return (
        <div>
            <main>
                <section>
                    <div className="thisboard">
                        <div className="tobedec">
                            <img src="https://trello-replica.web.app/static/media/earth_green.f5dba22e.svg" alt="" />
                            <span className="thiswritten">This board is set to public. Board admins can change its visibility setting at any time.</span>
                            <button className="learn">Learn more here</button>
                        </div>
                        <span className="material-icons"></span>
                    </div>

                    <div className="topmain">
                        <div className="kanban">
                            <h1>Kanban Board</h1>
                            <div className="star">
                                <span className="material-icons"></span>
                            </div>
                            <div className="saparator"></div>
                            <button className="public">
                                <img src="https://trello-replica.web.app/static/media/earth_white.b0d834ac.svg" alt="" className="icon" />
                                <span className="publicwritten">Public</span>
                            </button>
                            <div className="saparator"></div>
                            <span className="ah">AH</span>
                        </div>

                        <Listing/>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default MainContent
