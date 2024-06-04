import React, { useMemo, useState } from "react";
import './App.css'

const App = () => {

  const [weight,setWeight]=useState(70);
  const [height,setHeight]=useState(180);

  function onWeightChange(event){
    setWeight(event.target.value)
  }

  function onHeightChange(event){
    setHeight(event.target.value)
  }

  const output=useMemo(()=>{
    const calculateHeight=height/100;
    const bmi=weight/(calculateHeight*calculateHeight);
    let color;
    let text;
    if(bmi<18.5){
      color="red";
      text="Underweight / Malnourished"
    }
    else if(bmi<25){
      color="green";
      text="Good Shape / Fit"
    }
    else{
      color="orange";
      text="OverWeight / Obese"
    }

    return{bmi:bmi.toFixed(1),color,text};

  },[weight,height]);

  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className="input-section">
        <p className="slider-output">Weight: {weight}kg</p>
        <input className="slider-input" type='range' step="1" min="40" max="200" onChange={onWeightChange}/>
        <p className="slider-output">Height: {height}cm</p>
        <input className="slider-input" type="range" step="1" min="140" max="220" onChange={onHeightChange}/>
      </div>

      <div className="output-section">
          <p>Your BMI is </p>
          <p className="output" style={{backgroundColor:output.color,color:"white", border:1, padding:"2px 8px", borderRadius:"20px",margin:"20px 5px"}}>{output.bmi} {output.text}</p>
      </div>

    </main>
  );
};

export default App;
