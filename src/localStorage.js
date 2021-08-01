const KEY = 'StoredCountryList';

export const writeAll = (value) => {
    localStorage.setItem(KEY, JSON.stringify(value));
};

export const readAll = () => {
    const output = localStorage.getItem(KEY);
    if (!output) { //any falsey value, better than doing === undefined 
        return [];
    }
    return JSON.parse(output);
};