export const API_KEY = 'AIzaSyAnMM-lJk0JMLu2cOayI_y_8R465M6KilY';

export const value_converter = (value) => {
    if(value>=1000000) {
        return Math.floor(value/1000000) + 'M';
    }
    else if(value>=1000) {
        return Math.floor(value/1000) + 'K';
    }
    else return value;
}