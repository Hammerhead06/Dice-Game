import React from 'react'
import styled from 'styled-components';


const Container=styled.div`
max-width:200px;
text-align:center;
    h1{
        margin:auto;
        font-size:100px;
        line-height:100px;
    }
    p{
        font-size:24px;
        font-weight:500;
    }
   
`;

const TotalScore = ({Score}) => {
  return (
       <Container>
        <h1>{Score}</h1>
        <p>Total Score</p>
      </Container> 
  )
}

export default TotalScore
