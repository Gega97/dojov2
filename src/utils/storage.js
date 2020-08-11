import React, { useState } from "react";

export const StoreContext = React.createContext(null);

export default ({ children }) => {
  const teamMembersNames = ["John", "Mary", "Jason", "David"];

  const [sharing, setSharing] = useState(["1", "2", "3"]);
  const [help, setHelp] = useState([]);
  const [pairing, setPairing] = useState(teamMembersNames);

  const store = {
    sharing: [sharing, setSharing],
    help: [help, setHelp],
    pairing: [pairing, setPairing],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
