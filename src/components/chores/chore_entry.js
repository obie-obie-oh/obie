import React from 'react'
import choreIcons from '../../assets/chore_icons'

const ChoreEntry = ({
  chore
}) => (
  <section className="chore-entry col-sm-12">
    <div className="col-xs-6">
      <div>
        <div className="caption">
          <h4 className="chore-name">{chore.chorename}</h4> 
          <p>{chore.name} <span> {chore.dueDate} </span> </p>
        </div>
      </div>
    </div>
    <div className="col-xs-2">
      <img className="chore-image" src={choreIcons[chore.category]}></img>
    </div>
    <div className="col-sm-4">
      Button Placeholder
    </div>
  </section>
)

export default ChoreEntry