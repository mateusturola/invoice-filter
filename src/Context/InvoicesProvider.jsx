/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import filterData from '../Utils/filterItems';
import getInvoices from '../Utils/getInvoices';
import InvoicesContext from './InvoicesContext';

function InvoicesProvider({ children }) {
  const [docNumber, setDocNumber] = useState('');
  const [clientName, setClientName] = useState('');
  const [docStatus, setDocStatus] = useState('');
  const [docType, setDocType] = useState('');
  const [docDate, setDocDate] = useState(null);
  const [totalInput, setTotalInput] = useState('');

  const [invoices, setInvoices] = useState([]);
  const [invoicesFiltered, setInvoicesFiltered] = useState([]);

  const [itensPerPage, setItensPerPage] = useState(7);
  const [buttonGo, setButtonGo] = useState(false);
  const [buttonClear, setButtonClear] = useState(false);

  useEffect(() => {
    setInvoices(getInvoices());
  }, []);

  useEffect(() => {
    setInvoicesFiltered(invoices);
  }, [invoices]);

  useEffect(() => {
    setInvoicesFiltered(invoices);
    setDocNumber('');
    setClientName('');
    setDocStatus('');
    setDocType('');
    setDocDate(null);
    setTotalInput('');
  }, [buttonClear]);

  useEffect(() => {
    const data = invoices;
    const dataFilter = {
      docNumber,
      clientName,
      docStatus,
      docType,
      docDate,
      totalInput,
    };

    const filter = filterData({ data, dataFilter });

    setInvoicesFiltered(filter);
  }, [buttonGo]);

  const contextValue = {
    docNumber,
    setDocNumber,
    clientName,
    setClientName,
    docStatus,
    setDocStatus,
    docType,
    setDocType,
    docDate,
    setDocDate,
    totalInput,
    setTotalInput,
    invoices,
    setInvoices,
    itensPerPage,
    setItensPerPage,
    invoicesFiltered,
    setInvoicesFiltered,
    buttonGo,
    setButtonGo,
    buttonClear,
    setButtonClear,
  };

  return (
    <InvoicesContext.Provider value={contextValue}>
      {children}
    </InvoicesContext.Provider>
  );
}

InvoicesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InvoicesProvider;
