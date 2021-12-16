export default class BaseRepository{
    constructor(){
        this.entities = [];
    }

    add(entity){
        this.entities.push(entity);
    }

    delete(entity){
        this.delete(entity.id);
    }

    delete(id){
        this.entities = this.entities.filter(x=> x.id !== id);
    }

    getById(id){
        return this.entities.find(x=>x.id == id);
    }

    getListByFilter(filter){
        return this.entities(filter);
    }
    
    getByFilter(filter){
        return this.entities(filter)[0];
    }

    getAll(){
        return this.entities;
    }

    update(entity){
        let index = this.entities.indexOf(x=> x.id === entity.id);
        this.entities[index] = entity;
    }
}