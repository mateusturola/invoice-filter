/* eslint-disable react/jsx-props-no-spreading */
import { Autocomplete, TextField } from '@mui/material';
import React, { useContext } from 'react';
import InvoicesContext from '../../Context/InvoicesContext';

function DocStatus() {
  const status = ['Draft', 'Final', 'Paid', 'Cancelled'];
  const { docStatus, setDocStatus } = useContext(InvoicesContext);

  const handleChange = (_event, newValue) => {
    setDocStatus(newValue);
  };
  return (
    <div>
      <Autocomplete
        options={status}
        sx={{ width: 300 }}
        inputValue={docStatus}
        renderInput={(param) => (
          <TextField {...param} label="Document status" margin="dense" />
        )}
        onChange={handleChange}
        onInputChange={handleChange}
      />
    </div>
  );
}

export default DocStatus;
