import express from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import { graphlServer } from './presentation/resolver.js'
import data from './data/tasks.json'


const app = express()
const port = 4000
try {

    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({
        extended: true
    }))
    
    
    app.use('/graphql', graphqlHTTP({
        schema: graphlServer,
        context: { tasks: data}
    }))
      
    app.listen(port, () => {
    console.log(`Running a server at http://localhost:${port}`)
    })
} catch(e ) {
    console.log(e)
}