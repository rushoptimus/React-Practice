import React from 'react'
import styled from 'styled-components';

function Rules() {
  return (
    <Rulesy>
      <h3>
      How to play dice game
      </h3>
      <div className='rules_list'>
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
      <p>if you get wrong guess then  2 point will be dedcuted </p>
      </div>
    </Rulesy>
  )
}

export default Rules;

const Rulesy = styled.div`
max-width: 800px;
display: flex;
flex-direction: column;
background-color:#FBF1F1 ;
padding: 20px;
gap: 24px;
border-radius: 10px;
margin-top: 36px;

.rules_list p{
font-size: 16px;
font-weight: 500;
line-height: 24px;
}
h3{
font-size: 24px;
font-weight: 700;

}
`
