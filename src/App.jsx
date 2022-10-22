import { useEffect, useState } from "react";
import Clolck from "./components/Clolck";
import Form from "./components/Form";
import {
  compareDate,
  getLocalDateTime,
  getUtcFromLocal,
  getUtcFromZone,
  getZoneTimeFromUtc,
} from "./utils/func";
import timeZones from "./utils/timezones.json";

export default function App() {
  const [localDate, setLocalDate] = useState(new Date());
  const [inputFieldDate, setInputFieldDate] = useState(getLocalDateTime());
  const [utc, setUtc] = useState(getUtcFromLocal(new Date()));
  const [state, setState] = useState({
    inputDateObj: "",
    inputCountry: "Afghanistan",
    outputDateObj: "",
    outputCountry: "Albania",
  });
  let coutry = Intl.DateTimeFormat().resolvedOptions().timeZone;

  useEffect(() => {
    let interval = setInterval(() => {
      setLocalDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    setUtc(getUtcFromZone(inputFieldDate, timeZones[state.inputCountry]));
    let inputDateObj = getZoneTimeFromUtc(utc, timeZones[state.inputCountry]);
    let outputDateObj = getZoneTimeFromUtc(utc, timeZones[state.outputCountry]);
    setState({
      ...state,
      inputDateObj,
      outputDateObj,
    });
  };

  const changeHandler = (e) => {
    if (e.target.name === "inputDate") {
      setInputFieldDate(e.target.value);
    } else {
      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div className="wrapper">
      <div className="top">
        <div className="header">
          <h1 style={{ fontSize: "3rem" }}>
            Welcome to Time Converter Project
          </h1>
        </div>
        <div className="local-clock">
          <Clolck coutry={coutry} date={localDate} />
        </div>
      </div>
      <div className="main">
        <div className="form">
          <br />
          <Form
            defaultDateTime={inputFieldDate}
            changeHandler={changeHandler}
            submitHandler={submitHandler}
            inputCountry={state.inputCountry}
            outputCountry={state.outputCountry}
          />
          <br />
        </div>
      </div>
      {state.outputDateObj && (
        <div className="bottom">
          <div className="from-clock">
            <Clolck coutry={state.inputCountry} date={state.inputDateObj} />
          </div>
          <div
            className="d"
            style={{ margin: "0 50px", fontSize: "2.5rem", paddingTop: "50px" }}
          >
            {compareDate(state.inputDateObj, state.outputDateObj)}
          </div>
          <div className="to-clock">
            <Clolck coutry={state.outputCountry} date={state.outputDateObj} />
          </div>
        </div>
      )}
    </div>
  );
}
