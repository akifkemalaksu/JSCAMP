import SuccessDataResult from "../core/results/successDataResult.js";
import ErrorDataResult from "../core/results/errorDataResult.js";
import { users } from "../data/users.js";

export default class UserService {
    constructor(userRepository,validator,logger) {
        this.userRepository = userRepository;
        this.validator = validator;
        this.logger = logger;

        // load();
    }

    load(){
        for (const user of users) {
            console.log(this.add(user));
        }
    }

    add(user){
        const errors = this.validator.Validate(user);
        if (errors.length === 0) {
            this.userRepository.add(user);
            return new SuccessDataResult(user);
        }
        return new ErrorDataResult(user,errors);
    }

    // getById(id){
    //     let user = this.userRepository.getById(user.id);
    //     if (user) {
    //         return new SuccessDataResult(user);
    //     }
    //     return new ErrorDataResult(id,"No user found with this id.");
    // }

    // delete(id){
    //     let user = this.userRepository.getById(id);
    //     if (user) {
    //         this.userRepository.delete(user);
    //         return new SuccessDataResult(user,"User is deleted.");
    //     }
    //     return new ErrorDataResult(id,"No user found with this id.");
    // }

    // update(user){
    //     let user = this.userRepository.getById(user.id);
    //     if (user) {
    //         this.userRepository.update(user);
    //         return new SuccessDataResult(user,"User is updated.");
    //     }
    //     return new ErrorDataResult(id,"No user found with this id.");
    // }
}