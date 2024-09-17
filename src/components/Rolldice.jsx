import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import Rules from './Rules';

const Container=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:44px;
    p{
    font-size:24px;
    font-weight:500;
    }

    button{
        cursor:pointer;
        background-color:black;
        margin:12px auto;
        color:white;
        height:44px;
        width:220px;
        border-radius:8px;
        font-size:16px;
        font-weight:600;

        &:hover{
        background-color:white;
        color:black;
        transition:0.3s
        }

    }
    
    .dice{
        cursor:pointer;
    }
`;
const Rolldice = ({Currentdice,Change,setScore}) => {

    const [rule,setrule]=useState(false);
  
  return (
    <div>
      <Container>
        <div onClick={()=>Change()}>
        <img className="dice" src={`images/dice_${Currentdice}.png`} alt="img" />
        </div>
        <p>Click on Dice to roll</p>
        <button onClick={()=>{setScore(0)}} >Reset Score</button>
        <button onClick={()=>setrule((prev)=>!prev)}>
            {rule?"Hide Rules":"Show Rules"}</button>
       </Container>
       <Rules rule={rule}/>

    </div>
  )
}

export default Rolldice
