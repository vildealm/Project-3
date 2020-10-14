//define each action as a variable and the type. 

import { Persons } from "./Persons";

export const ADD_PERSONS = "ADD_PERSONS"

export interface AddPersonsAction {
    type: typeof ADD_PERSONS
    person: Persons; 
}

export type ExpenseActionTypes = AddPersonsAction; 
export type AppActions = ExpenseActionTypes; 