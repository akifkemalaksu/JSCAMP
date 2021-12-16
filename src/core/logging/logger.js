export class BaseLogger{
    constructor(){
        this.logs = [];
        this.errorLogs = [];
    }
    log(log){
        this.logs.push(log);
        console.log("Default logger: "  + log);
    }
    errorLog(log){
        this.errorLogs.push(log);
        console.error("Default logger: "  + log);
    }
}

export class ElasticLogger extends BaseLogger{
    constructor(){
        super();
    }
    log(log){
        this.logs.push(log);
        console.log("Logged to Elastic: "  + log);
    }
    errorLog(log){
        this.errorLogs.push(log);
        console.error("Logged to Elastic: "  + log);
    }
}

export class MongoLogger extends BaseLogger{
    constructor(){
        super();
    }
    log(log){
        this.logs.push(log);
        console.log("Logged to Mongo: "  + log);
    }
    errorLog(log){
        this.errorLogs.push(log);
        console.error("Logged to Mongo: "  + log);
    }
}