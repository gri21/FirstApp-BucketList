import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { readAll, writeAll } from './localStorage';

jest.mock('./localStorage');

describe('App', () => {
  beforeEach(() => {
    readAll.mockReturnValue([]); //regardless of actual content, return empty before each test
  });

  it('should render header on screen', () => {
    render(<App />);

    const headerElement = screen.getByText('Bucket List - Interactive');
    expect(headerElement).toBeVisible();
  });

  it('should not show new country section when add country clicked with invalid country', () => {
    render(<App />);

    userEvent.type(screen.getByPlaceholderText('Enter Next Bucket-List Destination'), 'England');
    userEvent.click(screen.getByRole('button', { name: 'Add Country' }));

    const sectionInvalidElement = screen.queryByTestId('England-section');
    expect(sectionInvalidElement).toBeNull();
  });

  it('should show new country section when add country clicked with valid country', () => {
    render(<App />);

    userEvent.type(screen.getByPlaceholderText('Enter Next Bucket-List Destination'), 'UK');
    userEvent.click(screen.getByRole('button', { name: 'Add Country' }));

    const sectionElement = screen.getByTestId('UK-section');
    expect(sectionElement).toBeVisible();
  });

  it('should remove country section when X clicked on section', () => {
    render(<App />);

    userEvent.type(screen.getByPlaceholderText('Enter Next Bucket-List Destination'), 'UK');
    userEvent.click(screen.getByRole('button', { name: 'Add Country' }));

    const sectionElement = screen.getByTestId('UK-section');
    expect(sectionElement).toBeVisible();

    userEvent.click(screen.getByRole('button', { name: 'X' }));

    const testSection = screen.queryByTestId('UK-section');
    expect(testSection).toBeNull();
  }); //failing because of test leaking - need to change to make all tests atomic

  it('should save to local storage when Save clicked on section', () => {
    render(<App />);

    userEvent.type(screen.getByPlaceholderText('Enter Next Bucket-List Destination'), 'UK');
    userEvent.click(screen.getByRole('button', { name: 'Add Country' }));

    const sectionElement = screen.getByTestId('UK-section');
    expect(sectionElement).toBeVisible();
    expect(writeAll).toHaveBeenCalledTimes(1);
    expect(writeAll).toHaveBeenCalledWith([{ name: 'UK' }]);

    userEvent.type(screen.getByPlaceholderText('Notes'), 'UK Notes');
    const usefulLinks = screen.getAllByPlaceholderText('Useful link');
    userEvent.type(usefulLinks[0], 'link test 1');
    userEvent.type(usefulLinks[1], 'link test 2');
    userEvent.type(usefulLinks[2], 'link test 3');
    userEvent.click(screen.getByRole('button', { name: 'Save' }));

    const expectedCountryList = [{
      name: 'UK',
      notes: 'UK Notes',
      link1: 'link test 1',
      link2: 'link test 2',
      link3: 'link test 3'
    }];
    expect(writeAll).toHaveBeenCalledTimes(2);
    expect(writeAll).toHaveBeenCalledWith(expectedCountryList);
  });
});
