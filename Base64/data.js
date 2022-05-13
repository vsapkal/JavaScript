import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState("");
  const [state, setState] = useState([]);
  const [details, setDetails] = useState([]);
  const [display, setDsiplay] = useState({
    displayBank: false,
    displayUpi: false
  });
  const [accountData, setAccountData] = useState({
    accountName: "",
    accountNumber: "",
    ifscCode: "",
    isChecked: false
  });
  const { displayBank, displayUpi } = display;
  const { accountName, accountNumber, ifscCode, isChecked } = accountData;
  // single state
  function handleChange(event) {
    setData(event.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    setState([
      ...state,
      {
        id: state.length,
        name: data
      }
    ]);
  }
  // mulitple state
  const accountHandle = (e) => {
    setAccountData({ ...accountData, [e.target.name]: e.target.value });
  };
  const submitDetails = (e) => {
    e.preventDefault();
    // setDetails(accountData);
    setDetails((prevState) => [...prevState, accountData]);
  };
  // checkbox
  const handleCheckBox = () => {
    setAccountData({ ...accountData, isChecked: !isChecked });
  };
  const displayHandleBank = () => {
    setDsiplay({ displayBank: !displayBank });
  };
  const displayHandleUpi = () => {
    setDsiplay({ displayUpi: !displayUpi });
  };

  return (
    <>
      <h1>
        <input
          type="checkbox"
          checked={displayBank}
          onChange={displayHandleBank}
        />
        Add New Bank Account Details
      </h1>
      {displayBank && (
        <>
          <label>
            Name :{" "}
            <input
              value={accountName}
              name="accountName"
              placeholder="Name"
              onChange={accountHandle}
            />
          </label>
          <br />
          <br />
          <label>
            Account Number :
            <input
              value={accountNumber}
              name="accountNumber"
              onChange={accountHandle}
              placeholder="account Number"
            />
          </label>
          <br />
          <br />
          <label>
            {" "}
            Ifsc Code
            <input
              value={ifscCode}
              name="ifscCode"
              placeholder="ifsc code"
              onChange={accountHandle}
            />
          </label>
          <br />
          <br />
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckBox}
            />
            set it's as default account
          </label>
          <br />
          <br />
          <button onClick={submitDetails}>Submit</button>
        </>
      )}
      <br />
      <h1>
        <input
          type="checkbox"
          checked={displayUpi}
          onChange={displayHandleUpi}
        />
        Enter the Upi Id
      </h1>
      {displayUpi && (
        <>
          <label>
            Upi Id :
            <input
              name="firstName"
              placeholder="akhani@upi"
              value={data}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <button onClick={submitHandler}>Submit</button>
        </>
      )}
      <br />
      <br />
      <h1>Bank Account Details</h1>
      {details.map((item, index) => {
        return (
          <div key={index}>
            {item.isChecked && (
              <h2>
                <label>
                  Primay Account: {item.isChecked === true && "yes"}
                </label>
              </h2>
            )}
            <h2>
              <label>Name : {item.accountName}</label>
            </h2>
            <h2>
              <label>Account Number : {item.accountNumber}</label>
            </h2>
            <h2>
              <label>Ifsc Code : {item.ifscCode}</label>
            </h2>
          </div>
        );
      })}
      <br />
      <br />
      <h1>Names</h1>
      {state.map((item, index) => {
        return (
          <label key={index}>
            UPI ID :<h2>{item.name}</h2>
          </label>
        );
      })}
    </>
  );
}
