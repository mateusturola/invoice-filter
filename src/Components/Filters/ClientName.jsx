import { TextField } from '@mui/material';
import React, { useContext } from 'react';
import InvoicesContext from '../../Context/InvoicesContext';

function ClientName() {
  const { clientName, setClientName } = useContext(InvoicesContext);

  const handleChange = ({ target: { value } }) => {
    setClientName(value);
  };
  return (
    <div>
      <TextField
        id="outlined-required"
        label="Client name"
        sx={{ width: 300 }}
        defaultValue={clientName}
        onChange={handleChange}
        margin="dense"
      />
    </div>
  );
}

export default ClientName;
