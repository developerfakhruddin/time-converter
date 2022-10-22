import timeZones from "../utils/timezones.json";
export default function Select({ customStyle, handler, name, value }) {
  return (
    <select
      name={name}
      onChange={handler}
      value={value}
      style={{ ...customStyle, width: "200px" }}
    >
      {Object.keys(timeZones).map((item) => (
        <option key={item}>{item}</option>
      ))}
    </select>
  );
}
