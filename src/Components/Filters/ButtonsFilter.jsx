/* eslint-disable object-curly-newline */
/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import InvoicesContext from '../../Context/InvoicesContext';

function ButtonsFilter() {
  const { buttonGo, setButtonGo, buttonClear, setButtonClear } = useContext(InvoicesContext);

  return (
    <ButtonGroup variant="outlined" size="large">
      <Button
        onClick={() => setButtonGo(!buttonGo)}
        sx={{ color: '#00bb80', borderColor: '#00bb80' }}
      >
        {' '}
        Filter
      </Button>
      <Button
        onClick={() => setButtonClear(!buttonClear)}
        sx={{ color: '#00bb80', borderColor: '#00bb80' }}
      >
        Clean
      </Button>
    </ButtonGroup>
  );
}

export default ButtonsFilter;
