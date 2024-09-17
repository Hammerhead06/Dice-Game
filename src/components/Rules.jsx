import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
  background-color:pink;
  padding:0 20px;
  width:786px;
  border-radius:10px;
`;

const Parent=styled.div`
  display:flex;
  justify-content:center;
`;


const Rules = ({rule}) => {
    console.log(rule);
    if(rule){
  return (

    <Parent>
    <Container>
      <h2>How to play dice game</h2>
        <p>Select any number.</p>
        <p>Click on dice to roll.</p>
        <p>After click on  dice  if selected number is equal to dice number you will get 100 points.</p>
        <p>If you get wrong guess then  10 point will be dedcuted. </p>
    </Container>
    </Parent>
  )
}
}

export default Rules
