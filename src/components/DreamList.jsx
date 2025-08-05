import React from 'react'
import "./DreamList.css"
function DreamList({dreams,onSelect}) {
  return (
    <div className="dream-list">
         <h2 className="title-list">🌙Dream List</h2>
         {dreams.length === 0? (
            <p>There's no dreams yet...</p>
         ):(
            <ul className="dream-card">
            {dreams.map((dream)=>(
                <li key={dream.id} className="dream-item" onClick={()=>onSelect(dream)}>
                    <h3>{dream.title}</h3>
                    <p><strong>Date:</strong>{dream.date}</p>
                    <p><strong>Description:</strong>{dream.description}</p>
                    <p><strong>Emotion:</strong>{dream.emotion}</p>
                    

                </li>
            ))}
         </ul>
         )}
         
    </div>
  )
}

export default DreamList