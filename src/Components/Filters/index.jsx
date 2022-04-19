import React from 'react';
import ButtonsFilter from './ButtonsFilter';
import ClientName from './ClientName';
import DocDate from './DocDate';
import DocNumber from './DocNumber';
import DocStatus from './DocStatus';
import DocType from './DocType';
import TotalInput from './TotalInput';

function Filters() {
  return (
    <div className="filter-inputs">
      <DocNumber />
      <ClientName />
      <DocStatus />
      <DocType />
      <DocDate />
      <TotalInput />
      <ButtonsFilter />
    </div>
  );
}

export default Filters;
