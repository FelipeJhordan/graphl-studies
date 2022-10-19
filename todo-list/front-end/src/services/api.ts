import { TodoModel } from "../domain/model/todo-model"

const todo : TodoModel[] = [{
    id: 'eu32',
    description: 'something',
    title: 'some',
    date: new Date(),
},{
    id: 'eu64',
    description: 'something',
    title: 'some',
    date: new Date(),
}]

export class Api {
    constructor() {
        
    }


    async getTasks(): Promise<TodoModel[]> {
        return Promise.resolve(todo)
    }
}