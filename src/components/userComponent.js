import { BaseLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("User component loaded.");

let logger1 = new BaseLogger(); 
let logger2 = new MongoLogger(); 
let userSevice = new UserService(logger2);

let user1 = new User(1,"Akif Kemal","Aksu","İstanbul");
let user2 = new User(2,"Emirhan","Aksu","İstanbul");


userSevice.add(user1);
userSevice.add(user2);
console.log(userSevice.getById(1));
console.log(userSevice.list());