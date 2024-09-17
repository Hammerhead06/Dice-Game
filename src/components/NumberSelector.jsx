import React, { useState } from 'react'
import styled from 'styled-components'


const Container=styled.div`
    height:72px;
    width:72px;
    font-size:24px;
    font-weight:700;
    border:1px solid black;
    display:grid;
    place-items:center;
    background-color: ${(props)=>props.isSelected?"black":"white"};
    color: ${(props)=>props.isSelected?"white":"black"};
`;


const Parent=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:end;
    align-items:end;
    .flex{
        display:flex;
        gap:24px;
    }
    .para{
        font-size:24px;
        font-weight:700;
    }
    .err{
        color:red;
    }
`;
const NumberSelector = ({Num,setNum,Error,setErorr}) => {
    const arr=[1,2,3,4,5,6];
  
    console.log(Num);
  return (
    <Parent>

        <p className="err">{Error}</p>
        <div className='flex'>
            {arr.map((val,i)=>(
                <Container isSelected={val===Num}
                key={i} onClick={()=>{setNum(val);setErorr("");}}>{val}</Container>
            ))}
        </div>
        <p className="para">Select Number</p>


    </Parent>
  )
}

export default NumberSelector
