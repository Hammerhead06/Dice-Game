import React, { useState } from 'react'
import styled from 'styled-components'
import moduleName from 'module'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import Rolldice from './Rolldice'

const Header=styled.div`
    width:90%;
    display:flex;
    justify-content:space-between;
    margin:0 auto;
`;

const Gameplay = () => {

    const [Num,setNum]=useState();
    const [Currentdice, setCurrentdice]=useState(1);
    const [Score, setScore]=useState(0);
    const [Error, setErorr] =useState("");

    const generateRandomNumber=()=>{
        return Math.floor(Math.random() * 6) + 1;
    }

    const Change=()=>{

        if(!Num){
            setErorr("You have not selected any number");
            return;
        }
        else setErorr("");

        const randomNumber=generateRandomNumber();
        setCurrentdice((prev)=>randomNumber);

        if(randomNumber===Num){
            setScore((prev)=>prev+100);
        }
        else{
            setScore((prev)=>prev-10);
        }
    }


  return (
    <div>
        <Header>
            <TotalScore Score={Score}/>
            <NumberSelector Num={Num} setNum={setNum} Error={Error} setErorr={setErorr} />
       </Header>
        <Rolldice Currentdice={Currentdice} Change={Change} setScore={setScore}  />


    </div>
  )
}

export default Gameplay
