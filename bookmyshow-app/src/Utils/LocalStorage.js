// src/Utils/LocalStorage.js

export const saveData = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.log(error);
    }
};

export const loadData = (key) => {
    try {
        const data = localStorage.getItem(key);
        return JSON.parse(data);
    } catch (error) {
        console.log(error);
        return null;
    }
};
