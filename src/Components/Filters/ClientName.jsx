import { TextField } from '@mui/material';
import React, { useContext } from 'react';
import InvoicesContext from '../../Context/InvoicesContext';

function ClientName() {
  const { clientName, setClientName } = useContext(InvoicesContext);

  const handleChange = ({ target: { value } }) => {
    setClientName(value);
  };
  return (
    <TextField
      id="outlined-required"
      label="Client name"
      defaultValue={clientName}
      onChange={handleChange}
    />
  );
}

export default ClientName;
