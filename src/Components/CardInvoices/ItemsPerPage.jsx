import React, { useContext } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Select } from '@mui/material';
import InvoicesContext from '../../Context/InvoicesContext';

function ItemsPerPage() {
  const { itensPerPage, setItensPerPage } = useContext(InvoicesContext);

  const handleChange = (event) => {
    setItensPerPage(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="itemsPerPage">Items Per Page</InputLabel>
        <Select
          value={itensPerPage}
          onChange={handleChange}
          label="Items Per Page"
          aria-labelledby="itemsPerPage"
        >
          <MenuItem value={7} data-testid="7-filter">
            7
          </MenuItem>
          <MenuItem value={14} data-testid="14-filter">
            14
          </MenuItem>
          <MenuItem value={30} data-testid="30-filter">
            30
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default ItemsPerPage;
