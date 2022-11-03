import { ApolloClient, DefaultOptions, gql, InMemoryCache } from "@apollo/client"
import { TodoModel } from "../domain/model/todo-model"
import { API_HOST } from "../shared/contants/api"

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
     getTasksQuery() {
        return gql
        `
        query getTasks{
              getTasks {
                id
                title
                description
                date
             } 
            }
        `
    }

    removeTask() {
        return gql
        `
            mutation deleteTask($id: ID!) {
                deleteTask(id: $id) {
                    id
                }
                
             } 
        `
    }

    getTask() {
        return gql
        `
        query getTask($id: ID!){
            getTask(id: $id) {
              id
              title
              description
              date
           } 
          }
        `
    }
    createTask() {
        return gql
        `
        mutation createTask($title: String!, $description: String!){
            createTask(title: $title, description: $description) {
              id
              title
              description
              date
           } 
          }
        `
    }

    updateTask() {
        return gql
        `
        mutation updateTask($id: ID!, $title: String!, $description: String!){
            updateTask(id: $id, title: $title, description: $description) {
              id
              title
              description
              date
           } 
          }
        `
    }
}

const defaultOptions: DefaultOptions = {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  }

export const client = new ApolloClient({
    uri: API_HOST,
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions,
})

export const api = new Api()