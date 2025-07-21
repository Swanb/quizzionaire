export default function OptionsColumn({
  title,
  options,
  currentOption,
  toggleSelection,
  formatLabelFunction,
  keyName,
}) {
  const isSelected = (value) => String(value) === String(currentOption);
  return (
    <div className="column">
      <h3>{title}</h3>
      {Object.entries(options).map(([label, value]) => (
        <button
          key={value}
          value={value}
          onClick={(e) => toggleSelection(e.target.value, keyName)}
          className={isSelected(value) ? "selected" : ""}
        >
          {formatLabelFunction ? formatLabelFunction(label) : label}
        </button>
      ))}
    </div>
  );
}
