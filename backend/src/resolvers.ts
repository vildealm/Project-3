import { Person } from "./entity/Person";
import { ResolverMap } from "./types/graphql-utils";
import { Like } from "typeorm";

export const resolvers: ResolverMap = {
    Query: {
      persons: (_, {orderBy}: GQL.IPersonsOnQueryArguments) => {
        if(orderBy === 'first_name'){
          return Person.find(
            {
              order:{ first_name: 'ASC'}
            }
          )
        }
        else{
          return Person.find(
            {
              order:{ age: 'ASC'}
            }
          )
        }
      },
      filterSearch: (_, { filter, orderBy }: GQL.IFilterSearchOnQueryArguments) => {
        const age = filter?.age;
        const location = filter?.location;
        let persons;
        //Sorter alfabetisk på navn
        if(orderBy === 'first_name'){
          if(filter?.age && filter?.location && filter?.age !== 0 && filter?.location !== "any"){
            persons = (Person.find({where:{ age, location }, order:{first_name: 'ASC'} }) );
          }
          else if((!filter?.location || filter?.location === "any") && filter?.age !== 0 ){
            persons = (Person.find({where:{ age }, order:{first_name: 'ASC'} }) );
          }
          else if(filter?.location !== "any" && (!filter?.age || filter?.age === 0)){
            persons = (Person.find({where:{ location }, order:{first_name: 'ASC'} }) );
          }
          else{
            persons = (Person.find({
              order:{first_name: 'ASC'}
            }));
          }
        }
        //sorter på alder
        else{
          if(filter?.age && filter?.location && filter?.age !== 0 && filter?.location !== "any"){
            persons = (Person.find({where:{ age, location }, order:{ age: 'ASC'} }) );
          }
          else if((!filter?.location || filter?.location === "any") && filter?.age !== 0 ){
            persons = (Person.find({where:{ age }, order:{ age: 'ASC'} }) );
          }
          else if(filter?.location !== "any" && (!filter?.age || filter?.age === 0)){
            persons = (Person.find({where:{ location }, order:{ age: 'ASC'} }) );
          }
          else{
            persons = (Person.find({
              order:{ age: 'ASC'}
            }));
          }
        }
        return persons;
      },
      nameSearch: async (_, { name, orderBy }: GQL.INameSearchOnQueryArguments) => {
        if(orderBy === 'first_name'){
          if(name.includes(" ")){ //søk med mer enn et ord
            let names = name.split(" ");
            const foundNames = await Person.find({where:[
              { first_name: Like(`%${names[0]}%`) }, //antar at det første ordet er et fornavn
              { last_name: Like(`%${names[names.length-1]}%`) } //antar at det andre ordet er et etternavn, tar ikke høyde for mer enn to ord i søket
           ], order:{first_name: 'ASC'}});
            return foundNames;
          }
          else{ //søk med et ord
            const persons = await Person.find({where:[
              { first_name: Like(`%${name}%`) },
              { last_name: Like(`%${name}%`) }
           ], order:{first_name: 'ASC'}});
            return persons //returner alle resultater hvor søket er enten i fornavn eller etternavn
          }
        }
        else{
          if(name.includes(" ")){ //søk med mer enn et ord
            let names = name.split(" ");
            const foundNames = await Person.find({where:[
              { first_name: Like(`%${names[0]}%`) }, //antar at det første ordet er et fornavn
              { last_name: Like(`%${names[names.length-1]}%`) } //antar at det andre ordet er et etternavn, tar ikke høyde for mer enn to ord i søket
           ], order:{ age: 'ASC'}});
            return foundNames;
          }
          else{ //søk med et ord
            const persons = await Person.find({where:[
              { first_name: Like(`%${name}%`) },
              { last_name: Like(`%${name}%`) }
           ], order:{ age: 'ASC'}});
            return persons //returner alle resultater hvor søket er enten i fornavn eller etternavn
          }
        }
      }
    },
    Mutation: {
      register: (_, { last_name, first_name, age, location, description }: GQL.IRegisterOnMutationArguments) => {
        const person = Person.create({
            last_name, first_name, age, location, description
        });

        person.save();
        return true;
      }
    }
  };