// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AptosMove title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AptosMove/i);
    expect(titleElement).toBeInTheDocument();
});
