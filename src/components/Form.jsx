import Select from "./Select";

let inputStyle = {
  padding: "4px",
  fontSize: "1.2rem",
  margin: "0 10px",
};

export default function Form({
  defaultDateTime,
  submitHandler,
  changeHandler,
  inputCountry,
  outputCountry,
}) {
  return (
    <form onSubmit={submitHandler}>
      <input
        onChange={changeHandler}
        name={"inputDate"}
        value={defaultDateTime}
        style={inputStyle}
        type="datetime-local"
      />
      <Select
        name={"inputCountry"}
        handler={changeHandler}
        customStyle={inputStyle}
        value={inputCountry}
      />
      <i className="fa-solid fa-arrow-right"></i>
      <Select
        name={"outputCountry"}
        handler={changeHandler}
        customStyle={inputStyle}
        value={outputCountry}
      />
      <input style={inputStyle} type="submit" value="Convert" />
    </form>
  );
}
