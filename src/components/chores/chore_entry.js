import React from 'react'
import choreIcons from '../../assets/chore_icons'
import h from '../../helpers'

const ChoreEntry = ({
  chore,
  completeTodo
}) => (
  <section className="chore-entry list-entry col-sm-12">
    <div className="col-xs-8">
      <div>
        <div className="caption">
          <h4 className="chore-name">{chore.chorename}</h4> 
          <p>{chore.name} <span> {chore.details} </span> {chore.due_date ? h.getPaymentDate(chore.due_date) : ''} </p>
        </div>
      </div>
    </div>
    <div className="col-xs-4 flex-end-button">
      <button className="btn btn-success-outline pull-right" onClick={() => completeTodo(chore.id)}><i className="fa fa-check" aria-hidden="true"></i></button>
    </div>
  </section>
)

export default ChoreEntry
