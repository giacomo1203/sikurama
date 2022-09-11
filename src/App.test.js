import { render, screen } from '@testing-library/react';
import App from './App';

describe('Demo app', () => {

  it('Should destroy', () => {
    render(<App />);
    expect(screen.getByText('merde')).toBeInTheDocument();
  });
});
