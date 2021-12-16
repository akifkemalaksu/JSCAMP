import Validator from '../core/processes/validator.js'
export default class UserValidation{
    constructor(){
        this.errors = [];
        this.keys = [
            'id', 
            'firstName',
            'lastName',
            'city',
            'age'
        ];
    }

    Validate(user){
        this.errors.length = 0;
        this.ValidateObject(user);
        this.ValidateAge(user);
        return this.errors;
    }

    ValidateObject(user){
        this.errors.concat(Validator.validateObject(user,this.keys));
    }

    ValidateAge(user){
        if (Validator.isNumber(user.age)) {
            this.errors.push("Age is must be a number.");
        }
    }
}