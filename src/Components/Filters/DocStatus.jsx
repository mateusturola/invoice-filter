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
    <Autocomplete
      options={status}
      inputValue={docStatus == null ? '' : docStatus}
      value={docStatus == null ? '' : docStatus}
      renderInput={(param) => <TextField {...param} label="Document status" />}
      onChange={handleChange}
      onInputChange={handleChange}
    />
  );
}

export default DocStatus;
