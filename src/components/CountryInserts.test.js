import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CountryInserts from './CountryInserts';

describe('CountryInserts', () => {
  it('should call handleCountryDelete on click', () => {
    const handleCountryDeleteMock = jest.fn();
    const testCountry = { name: 'testName', notes: 'testNotes', link1: 'testLink' };

    render(<CountryInserts
      key={testCountry.name}
      country={testCountry}
      handleCountryDelete={handleCountryDeleteMock} />);

    expect(handleCountryDeleteMock).not.toHaveBeenCalled();
    userEvent.click(screen.getByRole('button', { name: 'X' }));
    expect(handleCountryDeleteMock).toHaveBeenCalledTimes(1);
    expect(handleCountryDeleteMock).toHaveBeenCalledWith(testCountry.name);
  })

  it('should call handleCountrySave on click', () => {
    const handleCountrySaveMock = jest.fn();
    const testCountry = { name: 'testName', notes: '', link1: '' };

    render(<CountryInserts
      key={testCountry.name}
      country={testCountry}
      handleCountrySave={handleCountrySaveMock} />);

    expect(handleCountrySaveMock).not.toHaveBeenCalled();
    userEvent.type(screen.getByPlaceholderText('Notes'), 'Notes test');
    userEvent.type(screen.getAllByPlaceholderText('Useful link')[0], 'link test');
    userEvent.click(screen.getByRole('button', { name: 'Save' }));
    expect(handleCountrySaveMock).toHaveBeenCalledTimes(1);
    expect(handleCountrySaveMock).toHaveBeenCalledWith(testCountry.name, 'Notes test', 'link test', undefined, undefined);
  })
});