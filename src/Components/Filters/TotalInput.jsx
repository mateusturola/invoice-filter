import { TextField } from '@mui/material';
import React, { useContext } from 'react';
import InvoicesContext from '../../Context/InvoicesContext';

function TotalInput() {
  const { totalInput, setTotalInput } = useContext(InvoicesContext);

  const handleChange = ({ target: { value } }) => {
    setTotalInput(value);
  };
  return (
    <div>
      <TextField
        label="Total without VAT"
        defaultValue={totalInput}
        onChange={handleChange}
        sx={{ width: 300 }}
        margin="dense"
      />
    </div>
  );
}

export default TotalInput;
