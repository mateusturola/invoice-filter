import { TextField } from '@mui/material';
import React, { useContext } from 'react';
import InvoicesContext from '../../Context/InvoicesContext';

function DocNumber() {
  const { docNumber, setDocNumber } = useContext(InvoicesContext);

  const handleChange = ({ target: { value } }) => {
    setDocNumber(value);
  };

  return (
    <TextField
      label="Document Number"
      value={docNumber}
      onChange={handleChange}
      name="Document Number"
    />
  );
}

export default DocNumber;
