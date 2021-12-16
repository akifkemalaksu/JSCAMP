export default class Log{
    constructor(process){
        this.process = process;
    }

    constructor(process,data){
        this.process = process;
        this.data = data;
    }
}