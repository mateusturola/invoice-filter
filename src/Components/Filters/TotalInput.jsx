import { TextField } from '@mui/material';
import React, { useContext } from 'react';
import InvoicesContext from '../../Context/InvoicesContext';

function TotalInput() {
  const { totalInput, setTotalInput } = useContext(InvoicesContext);

  const handleChange = ({ target: { value } }) => {
    setTotalInput(value);
  };
  return (
    <TextField
      label="Total without VAT"
      defaultValue={totalInput}
      onChange={handleChange}
    />
  );
}

export default TotalInput;
