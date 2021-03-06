import React, { useContext, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import InvoicesContext from '../../Context/InvoicesContext';
import CardInvoices from './CardInvoices';
import ItemsPerPage from './ItemsPerPage';

function Cards() {
  const { invoicesFiltered, itensPerPage } = useContext(InvoicesContext);
  const [currentPage, setCurrentPage] = useState(1);

  const NumberPages = Math.ceil(invoicesFiltered.length / itensPerPage);
  const startIndex = (currentPage - 1) * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentInvoices = invoicesFiltered.slice(startIndex, endIndex);

  const handleChange = (_event, value) => {
    setCurrentPage(value);
  };

  return (
    <div>
      <ItemsPerPage />
      <div className="invoices">
        {currentInvoices.map((invoice) => (
          <CardInvoices key={invoice.number} invoice={invoice} />
        ))}
      </div>
      <Pagination
        count={NumberPages}
        page={currentPage}
        onChange={handleChange}
      />
    </div>
  );
}

export default Cards;
