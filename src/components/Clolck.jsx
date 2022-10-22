export default function Clolck({ coutry, date }) {
  return (
    <div>
      <h2>{coutry} Time</h2>
      <div style={{ fontSize: "1.5rem", paddingTop: "20px" }}>
        {date.toDateString()}
      </div>
      <div style={{ fontSize: "3rem", paddingTop: "10px" }}>
        {date.toTimeString().split(" ")[0]}
      </div>
    </div>
  );
}
