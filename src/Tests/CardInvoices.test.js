import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';

describe('2 - test card invoices', () => {
  it('Should initially render 7 cards', async () => {
    render(<App />);

    const cards = document.querySelectorAll('.card-invoice');
    expect(cards.length).toBe(7);
  });
  it('Should render the correct data', async () => {
    render(<App />);

    const cards = document.querySelectorAll('.card-invoice');
    expect(cards[0].innerHTML).toContain('2019/11');
    expect(cards[0].innerHTML).toContain('Elon Tusk');
    expect(cards[0].innerHTML).toContain('Final');
    expect(cards[0].innerHTML).toContain('2019-02-31');
    expect(cards[0].innerHTML).toContain('123.42');
  });
  it('should be possible to inform the number of items per page', async () => {
    render(<App />);
    const selectItemsPerPage = screen.getByRole('button', { name: '7' });
    expect(selectItemsPerPage).toBeInTheDocument();

    userEvent.click(selectItemsPerPage);

    await waitFor(() => {
      const filter = screen.getByTestId('14-filter');
      userEvent.click(filter);

      const cards = document.querySelectorAll('.card-invoice');
      expect(cards.length).toBe(14);
    });
  });
  it('should be 7 cards on second page', async () => {
    render(<App />);
    const page = screen.getByRole('button', { name: /2/i, hidden: true });
    expect(page).toBeInTheDocument();

    await userEvent.click(page);

    const cards = document.querySelectorAll('.card-invoice');
    expect(cards.length).toBe(7);
    render(<App />);
  });
});
