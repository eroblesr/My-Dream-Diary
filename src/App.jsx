import React, { useState, useEffect } from 'react'
import "./App.css";
import DreamForm from "./components/DreamForm";
import DreamList from "./components/DreamList";
import DreamEntry from "./components/DreamEntry";
import Header from './components/Header';
const App = () => {
  const [dreams, setDreams] = useState(() => {
  const stored = localStorage.getItem("savedDreams");
  return stored ? JSON.parse(stored) : [];
});
  const [selectedDream,setSelectedDream] = useState(null);
  function handleDeleteDream(dreamToDelete){
    setDreams(prevDreams => prevDreams.filter(d =>d !== dreamToDelete));
    setSelectedDream(null);
  }
  function handleCloseDream(){
    setSelectedDream(null);
  }
  function handleSelectedDream(dream){
    setSelectedDream(dream);
  }
  function handleSavedDream(newDream){
    setDreams([...dreams,newDream]);
  }
  useEffect(()=>{
    localStorage.setItem("savedDreams",JSON.stringify(dreams));
  },[dreams]);

  return (
    <>
    <Header/>
    <div className="App">
      {selectedDream != null ? (
      <DreamEntry selected={selectedDream} onClose={handleCloseDream} onDelete={handleDeleteDream}/>
    ) : (
    <>
      <DreamForm onSave={handleSavedDream} />
      <DreamList dreams={dreams} onSelect={handleSelectedDream} />
    </>
)}
      
      

    </div>
    </>
  )
}

export default App