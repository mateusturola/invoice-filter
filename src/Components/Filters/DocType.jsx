/* eslint-disable react/jsx-props-no-spreading */
import { Autocomplete, TextField } from '@mui/material';
import React, { useContext } from 'react';
import InvoicesContext from '../../Context/InvoicesContext';

function DocType() {
  const type = ['Invoice', 'Invoice-Receipt', 'Receipt'];
  const { docType, setDocType } = useContext(InvoicesContext);

  const handleChange = (_event, newValue) => {
    setDocType(newValue);
  };
  return (
    <Autocomplete
      options={type}
      value={docType == null ? '' : docType}
      inputValue={docType == null ? '' : docType}
      renderInput={(param) => (
        <TextField {...param} label="Document type" name="Document type" />
      )}
      onChange={handleChange}
      onInputChange={handleChange}
      isOptionEqualToValue={(option, value) => option.value === value.value}
    />
  );
}

export default DocType;
