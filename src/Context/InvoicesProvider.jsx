/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import InvoicesContext from './InvoicesContext';

function InvoicesProvider({ children }) {
  const [docNumber, setDocNumber] = useState('');
  const [clientName, setClientName] = useState('');
  const [docStatus, setDocStatus] = useState('');
  const [docType, setDocType] = useState('');
  const [docDate, setDocDate] = useState(null);
  const [totalInput, setTotalInput] = useState('');

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
