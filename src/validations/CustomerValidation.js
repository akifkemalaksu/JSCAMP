import UserValidation from "./UserValidation.js";

export default class CustomerValidation extends UserValidation{
    constructor(){
        super();
        this.keys.push('creditCardNumber');
    }
}