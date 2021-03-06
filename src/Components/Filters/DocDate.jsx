import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React, { useContext } from 'react';
import InvoicesContext from '../../Context/InvoicesContext';

export default function DocDate() {
  const { docDate, setDocDate } = useContext(InvoicesContext);

  const handleChange = (newValue) => {
    setDocDate(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Date"
        inputFormat="yyyy-MM-dd"
        mask="____-__-__"
        views={['year', 'month', 'day']}
        value={docDate}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
