import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('1 - test filter fields', () => {
  describe('1.1 - test filter by Document Number', () => {
    it('The field to enter the Document Number', () => {
      render(<App />);
      const inputDocNumber = screen.getByRole('textbox', {
        name: 'Document Number',
      });
      expect(inputDocNumber).toBeInTheDocument();
    });
  });
  describe('1.1 - test filter by Client name', () => {
    it('The field to enter the Client name', () => {
      render(<App />);
      const inputClientName = screen.getByRole('textbox', {
        name: 'Client name',
      });
      expect(inputClientName).toBeInTheDocument();
    });
  });
  describe('1.1 - test filter by Document status', () => {
    it('The field to enter the Document status', () => {
      render(<App />);
      const inputDocStatus = screen.getByRole('combobox', {
        name: 'Document status',
      });
      expect(inputDocStatus).toBeInTheDocument();
    });
  });
  describe('1.1 - test filter by Document type', () => {
    it('The field to enter the Document type', () => {
      render(<App />);
      const inputDocType = screen.getByRole('combobox', {
        name: 'Document type',
      });
      expect(inputDocType).toBeInTheDocument();
    });
  });
  describe('1.1 - test filter by Date', () => {
    it('The field to enter the Date', () => {
      render(<App />);
      const inputDate = screen.getByRole('textbox', {
        name: 'Choose date',
      });
      expect(inputDate).toBeInTheDocument();
    });
  });
  describe('1.1 - test filter by Total without VAT', () => {
    it('The field to enter the Total without VAT', () => {
      render(<App />);
      const inputTotal = screen.getByRole('textbox', {
        name: 'Total without VAT',
      });
      expect(inputTotal).toBeInTheDocument();
    });
  });
});
