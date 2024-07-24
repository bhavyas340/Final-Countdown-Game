import { useState,useRef } from "react";
export default function Player() {
  const playerName = useRef();
  const [entityName,setEntityName] = useState(null);
  const [submited,setSubmitted] = useState(false);


  function handleSubmit(){
    setEntityName(playerName.current.value);
    playerName.current.value = ''; 
  }
  return (
    <section id="player">
      <h2>Welcome {entityName??"unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName}/>
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
