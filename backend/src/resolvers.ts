import { Person } from "./entity/Person";
import { ResolverMap } from "./types/graphql-utils";
import { Like } from "typeorm";

export const resolvers: ResolverMap = {
    Query: {
      persons: () => Person.find(),
      filterSearch: (_, { filter }: GQL.IFilterSearchOnQueryArguments) => {
        const age = filter?.age;
        const location = filter?.location;
        let persons;

        if(filter?.age && filter.location){
          persons = (Person.find({where:{ age, location } }) );
        }
        else if(!filter?.location){
          persons = (Person.find({where:{ age } }) );
        }
        else{
          persons = (Person.find({where:{ location } }) );
        }
        return persons;
      },
      nameSearch: async (_, { name }: GQL.INameSearchOnQueryArguments) => {
        if(name.includes(" ")){ //søk med mer enn et ord
          let names = name.split(" ");
          const foundNames = await Person.find({where:[
            { first_name: Like(`%${names[0]}%`) }, //antar at det første ordet er et fornavn
            { last_name: Like(`%${names[1]}%`) } //antar at det andre ordet er et etternavn, tar ikke høyde for mer enn to ord i søket
         ]});
          return foundNames;
        }
        else{ //søk med et ord
          const persons = await Person.find({where:[
            { first_name: Like(`%${name}%`) },
            { last_name: Like(`%${name}%`) }
         ]});
          return persons //returner alle resultater hvor søket er enten i fornavn eller etternavn
        }
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