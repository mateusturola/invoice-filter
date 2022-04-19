import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('3 - Test the card filter', () => {
  it('should be possible to filter by document number', async () => {
    render(<App />);
    const inputDocNumber = screen.getByRole('textbox', {
      name: /document number/i,
    });

    const buttonFilter = screen.getByRole('button', { name: /filter/i });

    expect(inputDocNumber).toBeInTheDocument();
    await userEvent.type(inputDocNumber, '17');
    await userEvent.click(buttonFilter);

    const cards = screen.getAllByRole('heading', { name: /17/i });
    expect(cards).toHaveLength(2);
  });
  it('should be possible to filter by document name', async () => {
    render(<App />);
    const inputDocName = screen.getByRole('textbox', {
      name: /client name/i,
    });

    const buttonFilter = screen.getByRole('button', { name: /filter/i });

    expect(inputDocName).toBeInTheDocument();
    await userEvent.type(inputDocName, 'Elon tusk');
    await userEvent.click(buttonFilter);

    const cards = screen.getAllByText(/Elon Tusk/i);
    expect(cards).toHaveLength(5);
  });
  it('should be possible to filter by document status', async () => {
    render(<App />);
    const inputDocStatus = screen.getByRole('combobox', {
      name: /document status/i,
    });
    expect(inputDocStatus).toBeInTheDocument();

    const buttonFilter = screen.getByRole('button', { name: /filter/i });
    expect(buttonFilter).toBeInTheDocument();

    const inputDocName = screen.getByRole('textbox', {
      name: /client name/i,
    });
    expect(inputDocName).toBeInTheDocument();

    await userEvent.type(inputDocName, 'Elon tusk');
    await userEvent.click(inputDocStatus);
    const final = screen.getByRole('option', { name: /Final/i });
    await userEvent.click(final);
    await userEvent.click(buttonFilter);

    const cards = screen.getAllByText(/Elon Tusk/i);
    expect(cards).toHaveLength(3);
  });
  it('should be possible to filter by document type', async () => {
    render(<App />);
    const inputDocType = screen.getByRole('combobox', {
      name: /document type/i,
    });
    expect(inputDocType).toBeInTheDocument();

    const buttonFilter = screen.getByRole('button', { name: /filter/i });
    expect(buttonFilter).toBeInTheDocument();

    const inputDocName = screen.getByRole('textbox', {
      name: /client name/i,
    });
    expect(inputDocName).toBeInTheDocument();

    await userEvent.type(inputDocName, 'Elon tusk');
    await userEvent.click(inputDocType);
    const invoiceRecept = screen.getByRole('option', { name: /Invoice-Receipt/i });
    await userEvent.click(invoiceRecept);
    await userEvent.click(buttonFilter);

    const cards = screen.getAllByText(/Elon Tusk/i);
    expect(cards).toHaveLength(1);
  });
  it('should be possible to filter by document date', async () => {
    render(<App />);
    const inputDocDate = screen.getByRole('textbox', {
      name: /date/i,
    });
    expect(inputDocDate).toBeInTheDocument();

    const buttonFilter = screen.getByRole('button', { name: /filter/i });
    expect(buttonFilter).toBeInTheDocument();

    await userEvent.type(inputDocDate, '2019-02-21');
    await userEvent.click(buttonFilter);

    const cards = screen.getAllByText('2019/14');
    expect(cards).toHaveLength(1);
  });
  it('should be possible to filter by Total without VAT', async () => {
    render(<App />);
    const inputTotal = screen.getByRole('textbox', {
      name: /total without vat/i,
    });
    expect(inputTotal).toBeInTheDocument();

    const buttonFilter = screen.getByRole('button', { name: /filter/i });
    expect(buttonFilter).toBeInTheDocument();

    await userEvent.type(inputTotal, '123.42');
    await userEvent.click(buttonFilter);

    const cards = screen.getAllByText('123.42');
    expect(cards).toHaveLength(3);
  });
});
