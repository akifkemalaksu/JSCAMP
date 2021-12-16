import { BaseLogger, MongoLogger } from "../core/logging/logger.js";
import User from "../models/user.js";
import UserRepository from "../repositories/userRepository.js";
import UserService from "../services/userService.js";
import UserValidation from "../validations/UserValidation.js";

console.log("User component loaded.");

let logger1 = new BaseLogger(); 
let logger2 = new MongoLogger(); 
let userRepo = new UserRepository();
let userValid = new UserValidation();
let userSevice = new UserService(userRepo,userValid,logger2);

// let user1 = new User(1,"Akif Kemal","Aksu","İstanbul");
// let user2 = new User(2,"Emirhan","Aksu","İstanbul");


userSevice.load();
console.log(userSevice.customers);
console.log(userSevice.employees);
console.log(userSevice.errors);
// userSevice.add(user1);
// userSevice.add(user2);
// console.log(userSevice.getById(1));
// console.log(userSevice.list());