import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CountrySearch from './CountrySearch';

describe('CountrySearch', () => {
  it('should call handleAddCountry on click', () => { //test case
    const handleAddCountryMock = jest.fn(); //mock function

    render(<CountrySearch addCountry={handleAddCountryMock} />);

    userEvent.type(screen.getByPlaceholderText('Enter Next Bucket-List Destination'), 'England');
    expect(handleAddCountryMock).not.toHaveBeenCalled();
    userEvent.click(screen.getByRole('button', { name: 'Add Country' })); //buttons take name from their _content_ !!
    expect(handleAddCountryMock).toHaveBeenCalled();
    expect(handleAddCountryMock).toHaveBeenCalledWith('England');
  })
}); //Test to ensure it's called with inputted country