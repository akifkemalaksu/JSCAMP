import Result from "./result.js";

export default class DataResult extends Result{
    constructor(success,data){
        super(success);
        this.data = data;
    }
    constructor(success,message,data){
        super(success,message);
        this.data = data;
    }
}