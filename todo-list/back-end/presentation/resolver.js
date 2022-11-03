import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs } from "../infra/graphql/types/todo.js";
import { v4 } from "uuid";

const resolvers = {
  Query: {
    getTasks: (obj, args, context, info) => {
      return context.tasks;
    },
    getTask: (obj, args, context, info) => {
      const task = context.tasks.find((task) => task.id === args.id);
      return task;
    },
  },
  Mutation: {
    deleteTask: (obj, args, context, info) => {
      const indexToRemove = context.tasks.findIndex(
        (task) => (task.id = args.id)
      );
      const todoRemoved = context.tasks.splice(indexToRemove, 1);

      return todoRemoved;
    },
    updateTask: (obj, args, context, info) => {
      const todoToUpdate = context.tasks.find((task) => (task.id = args.id));
      console.log(args);
      const description = args.description;
      const title = args.title;

      todoToUpdate.title = title;
      todoToUpdate.description = description;
      return todoToUpdate;
    },
    createTask: (obj, args, context, info) => {
      const id = v4();
      const description = args.description;
      const title = args.title;
      const DATE = new Date();
      const dateFormated = `${DATE.getDate()}/${DATE.getMonth()}/${DATE.getFullYear()}`;

      const newTask = {
        id,
        title,
        description,
        date: dateFormated,
      };

      context.tasks.push(newTask);
      return newTask;
    },
  },
};

export const graphlServer = makeExecutableSchema({
  typeDefs,
  resolvers,
});
