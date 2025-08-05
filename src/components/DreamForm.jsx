import React, { useState } from 'react'
import "./DreamForm.css";
const DreamForm = ({onSave}) => {
  
    const [dreamText,setDreamText] = useState("");
    const [emotion, setEmotion]= useState("");
    const [dreamTitle, setDreamTitle] = useState("");
    const [dreamDate,SetDreamDate]= useState("");

    function handleClick(){
      if (!dreamTitle || !dreamDate || !dreamText || !emotion) {
          return alert("Please fill in all blank fields 🌙");
        }
        const newDream ={
            id:Date.now(),
            title: dreamTitle,
            date: dreamDate,
            description: dreamText,
            emotion: emotion
        }
        onSave(newDream);
        console.log("Saving dream",newDream);
        setDreamText("");
        setEmotion("");
        setDreamTitle("");
        SetDreamDate("");
        
    }
  return (
    <div className='Formulary'>
      <label className="dream-title">
        Title:
        <input 
        name="title"
        type="text"
        value= {dreamTitle}
        onChange={(e)=> setDreamTitle(e.target.value)}
         />
      </label>
      <br />
      <label className="dream-date">
        Date:
        <input 
        name="date"
        type="date"
        value={dreamDate}
        onChange={(e)=> SetDreamDate(e.target.value)} />
      </label>
      <br />
       <label className="dream-description">
         Description ✩: 
         <textarea 
            name="description"
            value={dreamText}
            onChange={(e)=>setDreamText(e.target.value)}
          />
        </label> 
       <br />
       <label className="dream-emotion">
         Emotion: 
          <select
            name="emotion"
            value={emotion}
            onChange={(e) => setEmotion(e.target.value)}
          >
            <option value="">Select emotion</option>
            <option value="Calm 🧘‍♀️">Calm 🧘‍♀️</option>
            <option value="Weird 🤯">Weird 🤯</option>
            <option value="Mysterious 🌒">Mysterious 🌒</option>
            <option value="Romance 🫶">Romance 🫶</option>
            <option value="Nightmare 😱">Nightmare 😱</option>
          </select>
        </label>
       <br />
       <button className='save-btn' onClick={handleClick}>Save</button>
    </div>
  )
}

export default DreamForm