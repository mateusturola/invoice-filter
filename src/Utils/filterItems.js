/* eslint-disable prettier/prettier */
/* eslint-disable object-curly-newline */
const filterData = ({ data, dataFilter }) => {
  const { docStatus, docType, docNumber, clientName, docDate, totalInput } = dataFilter;
  let result = data;

  if (docNumber) {
    result = result.filter(({ number }) => number.includes(docNumber));
  }
  if (clientName) {
    result = result.filter(({ clientName: client }) => {
      return client.toLowerCase().includes(clientName.toLowerCase());
    });
  }
  if (docStatus) {
    result = result.filter(({ status }) => {
      return status.includes(docStatus);
    });
  }
  if (docType) {
    result = result.filter(({ type }) => type === docType);
  }
  if (docDate) {
    const day = String(docDate.getDate()).padStart(2, '0');
    const month = String(docDate.getMonth() + 1).padStart(2, '0');
    const year = docDate.getFullYear();
    const dateFormat = `${year}-${month}-${day}`;

    result = result.filter(({ date }) => date.includes(dateFormat));
  }

  if (totalInput) {
    result = result.filter(({ totalWVat }) => +totalWVat === +totalInput);
  }
  return result;
};

export default filterData;
