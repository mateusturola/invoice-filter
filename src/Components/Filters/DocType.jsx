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
    <div>
      <Autocomplete
        options={type}
        sx={{ width: 300 }}
        inputValue={docType}
        renderInput={(param) => (
          <TextField
            {...param}
            label="Document type"
            margin="dense"
            name="Document type"
          />
        )}
        onChange={handleChange}
        onInputChange={handleChange}
      />
    </div>
  );
}

export default DocType;
