import { TodoModel } from "../../domain/model/todo-model"

const todoModel = new TodoModel()
export const getColumnsByModel = () => {
    const columns = Object.keys(todoModel)
    columns.push("action")
    return columns.map(column => column.charAt(0).toUpperCase()+column.slice(1))
}
