import { Person } from "./entity/Person";
import { ResolverMap } from "./types/graphql-utils";

export const resolvers: ResolverMap = {
    Query: {
      hello: (_, { name }: GQL.IHelloOnQueryArguments) => `Bye ${name || "World"}`,
      getLocation: (_, { location }: GQL.IGetLocationOnQueryArguments) => {
        const persons = Person.find({where: { location } });
        return persons;
      }
    },
    Mutation: {
      register: (_, { last_name, first_name, age, location }: GQL.IRegisterOnMutationArguments) => {
        const person = Person.create({
            last_name, first_name, age, location
        });

        person.save();
        return true;
      }
    }
  };