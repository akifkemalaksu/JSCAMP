import DataResult from "./dataResult.js";

export default class ErrorDataResult extends DataResult{
    constructor(data){
        super(false);
        this.data = data;
    }
    constructor(message,data){
        super(false,message);
        this.data = data;
    }
}