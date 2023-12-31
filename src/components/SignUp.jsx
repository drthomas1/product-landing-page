import "./signUp.scss";
import '../animations.scss';
import { useState, useEffect } from "react";

export default function SignUp( {menuOpen, setMenuOpen} ) {

  const [dayNum, setDayNum] = useState(0);
  const [monthNum, setMonthNum] = useState(0);
  const [yearNum, setYearNum] = useState(0);
  
  useEffect(() => {
    validDate();
  }, [dayNum, monthNum, yearNum]);
  
  function maxLengthCheck(object) {
      if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
          }
    }
  
    function assignNum(){
      let num;
      let inputVal = document.getElementById("day").value;
      if (inputVal){
          num = inputVal;
          setDayNum(num);
      }
      else{
          num = 0;
          setDayNum(num);
      }
  }

  function assignNumMonth(){
    let num;
    let inputVal = document.getElementById("month").value;
    if (inputVal){
        num = inputVal;
        setMonthNum(num);
    }
    else{
        num = 0;
        setMonthNum(num);
    }
}

function assignNumYear(){
  let num;
  let inputVal = document.getElementById("year").value;
  if (inputVal){
      num = inputVal;
      setYearNum(num);    
  }
  else{
      num = 0;
      setYearNum(num);
  }
}

function validDate() {
  const button = document.querySelector('.the-button');

  if((dayNum > 0 && dayNum < 32 ) && (monthNum > 0 && monthNum < 13) && (yearNum >  1900 && yearNum < 2023 )){
          button.style.color = 'black';
          button.style.border = '2px solid black';
          button.style.cursor = 'pointer';
          button.classList.add("button-anim-3");
      }else{
        button.style.color = 'lightgray';
        button.style.border = '2px solid lightgray';
        button.style.cursor = 'default';
        button.classList.remove("button-anim-3");
      }

    }
  
  function handleChange(obj){
    maxLengthCheck(obj);
    assignNum();
    
  }

  function handleChangeMonth(obj){
    maxLengthCheck(obj);
    assignNumMonth();
    
  }

  function handleChangeYear(obj){
    maxLengthCheck(obj);
    assignNumYear();
    
  }

  return (
    <div className="signup" id="signup" onClick={ (menuOpen)=>setMenuOpen(!menuOpen) }>
      <div className="left">
        <h1>SIGN UP!</h1>
        <br />
        <p>Lorem ipsum dolor ipsum dolor lorem ipsum dolor nintendo sega mastersystem geronimo picnics emperor penguin grain silo twenty three.</p>
        <br />
        <h5>ENTER DATE OF BIRTH</h5>
        <br />
        <div className="date-container">
          <div>
            <h5>DAY</h5>
            <input 
              type="number"
              maxLength = "2"
              onInput={handleChange}
              style={{borderLeft: "none", borderTop: "none", borderRight: "none", padding:"12.5px"}} 
              id="day" 
              className=".input-fields" 
              name="fname"
            >
            </input>
          </div>
          <div>
            <h5>MONTH</h5>
            <input 
              type="number"
              maxLength = "2"
              onInput={handleChangeMonth}
              style={{borderLeft: "none", borderTop: "none", borderRight: "none", padding:"12.5px"}} 
              id="month" 
              className=".input-fields" 
              name="fname"
            >
            </input>
          </div>
          <div>
            <h5>YEAR</h5>
            <input 
              type="number"
              maxLength = "4"
              onInput={handleChangeYear}
              style={{borderLeft: "none", borderTop: "none", borderRight: "none", padding:"12.5px"}} 
              id="year" 
              className=".input-fields" 
              name="fname"
            >
            </input>
          </div>
        </div>
        <br />
        <button className="the-button" ><span>NEXT</span></button>
      </div>
      <div className="right">
        <img src="/assets/excalibur logo2.webp" className="logos" id="icon1" alt="warnerbros" />
      </div>
    </div>
  );
}