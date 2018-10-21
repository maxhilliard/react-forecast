// TODO: Replace with alias
import apiFetch from '../services/api/apiService';

export const selectValueFromConfig = (key = '', objectToSearch = window.config) => {
    if (typeof key !== 'string') throw new TypeError('Parameter is of incorrect type');

    return Object
        .keys(objectToSearch)
        .reduce((foundValue, currentKey) => {
            if (foundValue) return foundValue;

            if (currentKey === key) {
                return objectToSearch[key];
            }

            if (objectToSearch[currentKey].constructor === Object) {
                return selectValueFromConfig(key, objectToSearch[currentKey]);
            }

            return foundValue;
        }, null);
};

export const selectValuesFromConfig = (searchKeysArr) => {
    if (!Array.isArray(searchKeysArr)) throw new TypeError('Parameter is of incorrect type');

    return searchKeysArr
        .reduce((valuesObj, currentKey) => {
            const foundValue = selectValueFromConfig(currentKey);

            if (foundValue) {
                return {
                    ...valuesObj,
                    [currentKey]: foundValue,
                };
            }

            return valuesObj;
        }, {});
};

export const getConfig = () => apiFetch('/config.json');

export const loadConfig = async () => {
    const config = await getConfig();

    window.config = config;
};
