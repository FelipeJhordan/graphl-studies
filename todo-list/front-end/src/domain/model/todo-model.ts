


export type TodoModelContructorParams = {
    id?:string,
    title: string
    description: string
    date: Date
}

export class TodoModel {
    id?: string;
    title!: string;
    description!: string;
    date!: Date;


    constructor(params?: TodoModelContructorParams) {
        if(params) {
            const {
                title,
                description,
                date,
                id
            } = params
            this.title = title
            this.description = description
            this.date = date
            this.id = id
        }
    }
}
