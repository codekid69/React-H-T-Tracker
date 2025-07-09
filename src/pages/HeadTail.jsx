import { useState } from "react";

export default function HeadTail() {
  const [value, setValue] = useState("");
  const [columns, setColumns] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!value) return setError("Please select value from dropdown");

    setError("");
    let updated = [...columns];

    if (!updated.length || updated[updated.length - 1][0] !== value) {
      updated.push([value]);
    } else {
      updated[updated.length - 1].push(value);
    }

    setColumns(updated);
    setValue(""); 
  };

  return (
  <div className="container">
  <h2>Head & Tail</h2>

  <select value={value} onChange={(e) => setValue(e.target.value)}>
    <option value="">Select Value</option>
    <option value="H">H</option>
    <option value="T">T</option>
  </select>

  <button onClick={handleSubmit}>Submit</button>

  {error && <p className="error">{error}</p>}

  <div className="ht-grid">
    {columns.map((col, i) => (
      <div key={i} className="ht-grid-column">
        {col.map((item, j) => (
          <div key={j}>{item}</div>
        ))}
      </div>
    ))}
  </div>
</div>

  );
}
