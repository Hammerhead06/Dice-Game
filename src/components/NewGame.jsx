import React from 'react'
import styled from "styled-components";


const Container=styled.div`
  max-width:1180px;
  display:flex;
  margin:0 auto;
  align-items:center;

   .content{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  h1{
   font-size:96px;
  line-height:144px;
  }
  }
`;
const Button=styled.button`
  font-size:24px;
  background-color:black;
  color:white;
  min-width: 220px;
  height: 44px;
  padding 10px 18px;
  border-radius: 5px;
  transition:0.3s background ease-in;
  font-weight:700;

  &:hover{
  background-color:white;
  color:black;
  transition:0.3s background ease-in;
  }
`;

const NewGame = ({toggle}) => {
  return (
    <Container>
      <img src="images/dices 1.png" alt="img" />
      <div className='content'>
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default NewGame
