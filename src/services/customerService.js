import SuccessDataResult from "../core/results/successDataResult.js";
import ErrorDataResult from "../core/results/errorDataResult.js";
import { users } from '../data/users.js';

export default class CustomerService {
    constructor(customerRepository,logger) {
        this.customerRepository = customerRepository;
        this.validator = validator;
        this.logger = logger;

        load();
    }

    load(){
        users.forEach(user => {
            this.add(user);
        });
    }

    add(customer){
        const errors = this.validator.Validate(customer);
        if (errors.length === 0) {
            this.userRepository.add(customer);
            return new SuccessDataResult(customer);
        }
        return new ErrorDataResult(customer);
    }

    getById(id){
        let customer = this.userRepository.getById(customer.id);
        if (customer) {
            return new SuccessDataResult(customer);
        }
        return new ErrorDataResult(id,"No customer found with this id.");
    }

    delete(id){
        let customer = this.userRepository.getById(customer.id);
        if (customer) {
            this.userRepository.delete(customer);
            return new SuccessDataResult(customer,"customer is deleted.");
        }
        return new ErrorDataResult(id,"No customer found with this id.");
    }

    update(customer){
        let customer = this.userRepository.getById(customer.id);
        if (customer) {
            this.userRepository.update(customer);
            return new SuccessDataResult(customer,"customer is updated.");
        }
        return new ErrorDataResult(id,"No customer found with this id.");
    }
}