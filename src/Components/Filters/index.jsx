import React from 'react';
import ClientName from './ClientName';
import DocDate from './DocDate';
import DocNumber from './DocNumber';
import DocStatus from './DocStatus';
import DocType from './DocType';
import TotalInput from './TotalInput';

function Filters() {
  return (
    <div>
      <DocNumber />
      <ClientName />
      <DocStatus />
      <DocType />
      <DocDate />
      <TotalInput />
    </div>
  );
}

export default Filters;