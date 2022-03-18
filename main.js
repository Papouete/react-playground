const App = () => {
    const [decimal, setDecimal] = React.useState("");
    const [convertedNumber, setConvertedNumber] = React.useState("");
    const [base, setBase] = React.useState("none");
  
    React.useEffect(() => {
      if (base !== "none")
        setConvertedNumber(parseInt(decimal, 10).toString(base));
    }, [base]);
  
    const handleChange = (e) => {
      if (isNaN(e.target.value)) return;
      setDecimal(e.target.value);
  
      if (base !== "none")
        setConvertedNumber(parseInt(e.target.value, 10).toString(base));
    };
  
    const handleBaseSelect = (e) => {
      setBase(e.target.value);
    };
    return (
      <React.Fragment>
        <BaseNumberInput
          number={decimal}
          handleChange={handleChange}
          disabled={false}
        />
  
        <SelectBaseInput
          selectedBase={base}
          handleBaseSelect={handleBaseSelect}
        />
        {base !== "none" && !isNaN(parseInt(convertedNumber, base)) && (
          <BaseNumberInput number={convertedNumber} disabled={true} />
        )}
      </React.Fragment>
    );
  };
  
  const BaseNumberInput = ({ number, handleChange, disabled }) => {
    return (
      <React.Fragment>
        <input
          type="text"
          value={number}
          onChange={handleChange}
          disabled={disabled}
        />
      </React.Fragment>
    );
  };
  
  const SelectBaseInput = ({ selectedBase, handleBaseSelect }) => {
    return (
      <div>
        <select value={selectedBase} onChange={handleBaseSelect}>
          <option value="none" disabled>
            Choissisez une base
          </option>
          <option value="2">Binaire</option>
          <option value="3">Ternaire</option>
          <option value="7">Septénaire</option>
          <option value="16">Hexadecimal</option>
        </select>
      </div>
    );
  };
  
  ReactDOM.render(<App />, document.querySelector("#app"));