const getValueFromLocalStorage = (key, defaultValue) => {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null || undefined) {
        return JSON.parse(storedValue);
    } else return defaultValue;
}


const setValueInLocalStorage = (key, objectValues) => {
    return localStorage.setItem(key, JSON.stringify(objectValues));
}

const handleWhitespaceAndUppercase = (updatingString) => {
    return (updatingString?.replace(/\s+/g, '-')).toLowerCase();
}

export {getValueFromLocalStorage, setValueInLocalStorage, handleWhitespaceAndUppercase};