import "./signUp.scss";

export default function SignUp() {
  const borderStyle = '';

  return (
    <div className="signup" id="signup">
      <div className="left">
        <h1>SIGN UP!</h1>
        <br />
        <p>Lorem ipsum dolor ipsum dolor lorem ipsum dolor nintendo sega mastersystem geronimo pincnics fidelity dignity forsooth grain silo twenty.</p>
        <br />
        <h5>ENTER DATE OF BIRTH</h5>
        <br />
        <div className="date-container">
          <div>
            <h5>MONTH</h5>
            <input type="number" style={{borderLeft: "none", borderTop: "none", borderRight: "none", padding:"12.5px"}} id="fname1" className=".input-fields" name="fname"></input>
          </div>
          <div>
            <h5>DAY</h5>
            <input type="number" style={{borderLeft: "none", borderTop: "none", borderRight: "none", padding:"12.5px"}} id="fname1" className=".input-fields" name="fname"></input>
          </div>
          <div>
            <h5>YEAR</h5>
            <input type="number" style={{borderLeft: "none", borderTop: "none", borderRight: "none", padding:"12.5px"}} id="fname1" className=".input-fields" name="fname"></input>
          </div>
        </div>
        <br />
        <button>NEXT</button>
      </div>
      <div className="right">
        <img src="/assets/warnerbros.png" className="logos" id="icon1" alt="warnerbros" />
      </div>
    </div>
  );
}