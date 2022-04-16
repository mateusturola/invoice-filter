import { TextField } from '@mui/material';
import React, { useContext } from 'react';
import InvoicesContext from '../../Context/InvoicesContext';

function DocNumber() {
  const { docNumber, setDocNumber } = useContext(InvoicesContext);

  const handleChange = ({ target: { value } }) => {
    setDocNumber(value);
  };
  return (
    <div>
      <TextField
        label="Document Number"
        defaultValue={docNumber}
        onChange={handleChange}
        sx={{ width: 300 }}
        margin="dense"
        name="Document Number"
      />
    </div>
  );
}

export default DocNumber;
