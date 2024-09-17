import { useState } from 'react'
import NewGame from './components/NewGame';
import Gameplay from './components/Gameplay';

function App() {

  const [Start, setStart]=useState(false);
  const toggle=()=>{
    setStart((prev)=>!prev);
  }

  return (
    <>
    {Start? <Gameplay/>:<NewGame toggle={toggle}/>}
    </>
  )
}

export default App
