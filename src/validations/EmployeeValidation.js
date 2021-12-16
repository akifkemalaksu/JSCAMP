import UserValidation from "./UserValidation.js";

export default class EmployeeValidation extends UserValidation{
    constructor(){
        super();
        this.keys.push('salary');
    }
    
    
}