import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { CreateAppointmentInput } from "../dto/inputs/create-appointment-input";
import { Appointment } from "../dto/models/appointment-model";
import { Customer } from "../dto/models/customer-model";

@Resolver(() => Appointment)
export class AppointmentsResolver {
    @Query(() => [Appointment])
    async getUser() {
        return []
    }

    @Mutation(() => Appointment )
    async createAppointment(@Arg('data') data: CreateAppointmentInput) {
        const appointment = {
            startsAt: data.startsAt,
            endsAt: data.endsAt
        }
        return appointment
    }

    @FieldResolver(() => Customer)
    async customer(@Root() appointment: Appointment) {
        console.log(appointment)
        
        return {
            name: 'John Down'
        }
    }
}