import React from 'react';
import './PopUp.css';
import { gql, useMutation } from '@apollo/client';
import { Mutation } from 'react-apollo';

const ADD_PERSON = gql`
  mutation register($firstname: String!, $lastname: String!, $age: Int!, $location: String!, $description: String!) {
    register(firstname: $firstname, lastname: $lastname, age: $age, location: $location, description: $description) {
      user_id
      first_name
      last_name
      age
      location
      description
    }
  }
`;


interface PersonInventory {
    id: number;
    first_name: string;
    last_name: string;
    age: number;
    location: string;
    description: string;
  }
  
  interface NewPersonDetails {
    first_name: string;
    last_name: string;
    age: number;
    location: string;
    description: string;
  }


export const PopUp = () => {

    let input: any;
    let input2: any;
    let input3: any;
    let input4: any;
    let input5: any;


    const [addPerson, { data }] = useMutation<PersonInventory,NewPersonDetails >(ADD_PERSON);

    return (
        <Mutation<PersonInventory,NewPersonDetails> mutation={ADD_PERSON}>
            {(addPerson, { data }) => {(
                <div>
                    <form className="form-popup">
                        <label>
                            Firstname: <input type="text" name="fname" ref={node => { input = node; }} required />
                        </label>
                        <label>
                            Lastname: <input type="text" name="lname" ref={node => { input2 = node; }} required />
                        </label>
                        <label>
                            Age: <input type="number" name="age" ref={node => { input3 = node; }} required />
                        </label>
                        <label>
                            Location: <input type="text" name="location" ref={node => { input4 = node; }} required />
                        </label>
                        <label>
                            Bio: <input type="text" name="bio" ref={node => { input5 = node; }} required />
                        </label>
                        <button className="submit-form-btn" type="submit" onClick={e => {
                            e.preventDefault();
                            addPerson({ variables: { 
                                first_name: input.value, 
                                last_name: input2.value,
                                age: input3.value, 
                                location: input4.value,
                                description: input5.value} 
                            });
                            input.value = '';
                        }}> Submit </button>
                    </form>
                </div>
        )}
        </Mutation>
    );
};