export default function Input({ label, onChange, value }) {
  return (
    <div>
      <label>{label}</label>
      <input type="number" value={value} onChange={onChange}></input>
    </div>
  );
}
