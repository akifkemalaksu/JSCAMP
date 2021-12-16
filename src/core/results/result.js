export default class Result{
    constructor(success){
        this.success = success;
    }
    constructor(success,message){
        this.success = success;
        this.message = message;
    }
}