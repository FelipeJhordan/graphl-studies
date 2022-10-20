import { makeExecutableSchema } from "@graphql-tools/schema"
import {typeDefs} from '../infra/graphql/types/todo.js'

const resolvers = {
    Query: {
        getTasks: (obj, args, context, info) => {
            console.log(context.tasks)
            return context.tasks
        },
        getTask: (obj, args, context, info) => {
            const task =  context.tasks.find((task) => task.id === args.id)
            console.log(task)
            return task
        }
    },
    Mutation: {
        deleteTask: (obj, args, context, info) => {
            const indexToRemove = context.tasks.findIndex(task => task.id = args.id)
            const todoRemoved = context.tasks.splice(indexToRemove, 1)

            return todoRemoved
        },

        createTask: (obj, args, context, info) => {
            const id = `${Math.random(10000)/10}`
            const description = args.description
            const title = args.title
            const DATE = new Date()
            const dateFormated = `${DATE.getDate()}/${DATE.getMonth()}/${DATE.getFullYear()}`
            console.log(description)
            const newTask = {
                id, title, description, date: dateFormated
            }
            context.tasks.push(newTask)
            return newTask
        }
    }
}

export const graphlServer = makeExecutableSchema({
    typeDefs,
    resolvers
})