/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import React from 'react';
import CvContext from './CvContext';

function InvoicesProvider({ children }) {

  const contextValue = {  };

  return (
    <CvContext.Provider value={contextValue}>{children}</CvContext.Provider>
  );
}

InvoicesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InvoicesProvider;
