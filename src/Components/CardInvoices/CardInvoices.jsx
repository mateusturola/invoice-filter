import React from 'react';
import Chip from '@mui/material/Chip';
import PropTypes from 'prop-types';

function CardInvoices({ invoice }) {
  const {
    client_name: clientName,
    date,
    number,
    status,
    total_w_vat: total,
    type,
  } = invoice;

  return (
    <div className="card-invoice">
      <div>
        <h2>{number}</h2>
        <Chip label={type} color="success" variant="outlined" />
      </div>
      <ul>
        <li>
          <span>Client name:</span>
          {clientName}
        </li>
        <li>
          <span>Document status:</span>
          {status}
        </li>
        <li>
          <span>Date:</span>
          {date}
        </li>
      </ul>
      <h3>
        <span>Total without VAT: </span>
        {total}
      </h3>
    </div>
  );
}

CardInvoices.propTypes = {
  invoice: PropTypes.shape({
    client_name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    total_w_vat: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardInvoices;
