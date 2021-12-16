export default class Validator{
    static isEmpty(value) {
        return value === undefined || value === null || value === '';
    }
    static isEmptyObject(value) {
        return value === undefined || value === null || Object.keys(value).length === 0;
    }
    static validateObject(object,keys){
        let errors = [];
        Object.keys(object).forEach(key => {
            if (!keys.includes(key)) {
                errors.push(`Object does not contain ${key} data.`);
            }
        });
        keys.forEach(key => {
            if (!keys.includes(Object.keys(object))) {
                errors.push(`The object does not accept this ${key} data.`);
            }
        });
        console.log(errors);
        return errors;
    }
    static isNumber(value){
        return isNaN(Number.parseInt(value));
    }
}