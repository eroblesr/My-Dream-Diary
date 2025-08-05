import React from 'react'
import "./DreamEntry.css"
function DreamEntry({selected,onClose,onDelete}) {
  return (
    <div className="dream-entry">
        <ul>
            <li>
                <h3>{selected.title}</h3>
                    <p><strong>Date:</strong>{selected.date}</p>
                    <p><strong>Description:</strong>{selected.description}</p>
                    <p><strong>Emotion:</strong>{selected.emotion}</p>
            </li>
        </ul>
        <div className="entry-actions">
          <button className="close-btn" onClick={onClose}>❌</button>
          <button className="delete-btn" onClick={() => onDelete(selected)}>🗑️</button>
        </div>


    </div>
  )
}

export default DreamEntry