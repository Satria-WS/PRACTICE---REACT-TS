import React, { useContext, useEffect, useState } from "react";

const GuestList: React.FC = () => {
  const [SuperName, setName] = useState("");
  const [guest, setGuest] = useState<string[]>([]);

  const onclick = () => {
    setName("");
    setGuest([...guest, SuperName]);
  };
  const onclear = () => {
    setName("");
    setGuest([]);
  };

  return (
    <>
      <div>
        <h1>Guest List:</h1>
        <ul>
          {guest.map((guest) => {
            return <li key={guest}>{guest}</li>;
          })}
        </ul>
        <input
          value={SuperName}
          onChange={(event) => {
            setName(event.target.value);
            console.log(event.target.value);
          }}
        />
        <button onClick={onclick}>Add Guest</button>
        <button onClick={onclear}>Clear</button>

        <p>Text SuperName: {SuperName}</p>
        <p>what is the guest: {guest}</p>
      </div>
    </>
  );
};

export default GuestList;
