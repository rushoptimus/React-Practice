import styled from "styled-components";
import React, { useState } from "react";
import "./Secound.css";
import Rolldice from "./Rolldice";

function Secound() {
  const List = [1, 2, 3, 4, 5, 6];
  const [selected, SetSelected] = useState();
  const [random, setrandom] = useState(1);
  const [score, Setscore] = useState(0);
  const [error, Seterror] = useState("");
  const [showrules,SetShowrules] = useState(false);

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  function GetNumber() {
    if (!selected) {
      return Seterror("You have not selected any number");
    }
   
  
    console.log("Dice roll is :- "+ random);
    setrandom(getRandomArbitrary(1, 7));
    const Number = random;
    SetSelected("");

    if (selected == Number) {
      Setscore((prev) => prev + Number);
    } else {
      Setscore((prev) => prev - 2);
    }
  }
  function Abc(value){
    SetSelected(value)
    Seterror("");
    console.log("Selected value is " + value)
  }
  return (
    <div className="Secound">
      <div className="Secound-nav">
        <div className="Score">
          <h1>{score}</h1>
          <h3>Total Score</h3>
        </div>

        <Dice_List>
          <p className="error">{error}</p>
          <Lists>
            {List.map((value, i) => (
              <Box
                isselected={value == selected}
                key={i}
                onClick={() => Abc(value)}
              >
                {value}
              </Box>
            ))}
          </Lists>
          <h3 className="select_number">Select Number</h3>
        </Dice_List>
      </div>
      <Rolldice showrules={showrules} SetShowrules={SetShowrules} Setscore={Setscore} random={random} GetNumber={GetNumber} />
     
    </div>
  );
}
export default Secound;

const Box = styled.div`
  border: 1px solid #000000;
  padding: 10px 31px;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (props.isselected ? "white" : "black")};
`;

const Dice_List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 30px;

  .error {
    color: red;
    font-size: 24px;
    font-weight: 400;
  }
`;
const Lists = styled.div`
  display: flex;
  gap: 24px;
`;
