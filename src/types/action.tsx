//define each action as a variable and the type. comment

import { Persons } from "./Persons";

export const ADD_PERSONS = "ADD_PERSONS"
export const SET_PERSONS = "SET_PERSONS"

export interface AddPersonsAction {
    type: typeof ADD_PERSONS
    person: Persons; 
}

export interface SetPersonsAction {
    type: typeof SET_PERSONS
    person: Persons; 
}



export type ExpenseActionTypes = AddPersonsAction| SetPersonsAction; 
export type AppActions = ExpenseActionTypes; 