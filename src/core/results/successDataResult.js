import DataResult from "./dataResult.js";

export default class SuccessDataResult extends DataResult{
    constructor(data){
        super(true);
        this.data = data;
    }
    constructor(data,message){
        super(true,message);
        this.data = data;
    }
}