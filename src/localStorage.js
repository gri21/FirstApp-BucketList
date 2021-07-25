const KEY = 'StoredCountryList';

export const writeAll = (value) => {
    localStorage.setItem(KEY, JSON.stringify(value));
};

export const readAll = () => {
    const output = localStorage.getItem(KEY);
    return JSON.parse(output);

};