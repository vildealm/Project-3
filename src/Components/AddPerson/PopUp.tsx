import React, { useState } from 'react';
import './PopUp.css';
import { gql, useMutation } from '@apollo/client';

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
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [location, setLoc] = useState('');
    const [description, setDesc] = useState('');


    //const [addPerson, { data }] = useMutation<PersonInventory, NewPersonDetails>(ADD_PERSON);


    const [addPerson, { error, data }] = useMutation<PersonInventory, NewPersonDetails>
    (ADD_PERSON, {variables: {first_name, last_name, age: +age, location, description }});

    return (
        <div>
            <h3>Add a Person</h3>
            {error ? <p>Oh no! {error.message}</p> : null}
            {data && 
            data.first_name &&
            data.last_name &&
            data.age &&
            data.location && 
            data.description ? <p>Saved!</p> : null}
            <form className="form-popup">
                <label>
                    Firstname: <input type="text" name="fname" onChange={e => setFirstName(e.target.value)} required />
                </label>
                <label>
                    Lastname: <input type="text" name="lname" onChange={e => setLastName(e.target.value)} required />
                </label>
                <label>
                    Age: <input type="number" name="age" onChange={e => setAge(+e.target.value)} required />
                </label>
                <label>
                    Location: <input type="text" name="location" onChange={e => setLoc(e.target.value)} required />
                </label>
                <label>
                    Bio: <input type="text" name="bio" onChange={e => setDesc(e.target.value)} required />
                </label>
                <button className="submit-form-btn" type="submit" onClick={() =>
                    first_name &&
                    last_name &&
                    age &&
                    location &&
                    description}> 
                    Submit
                    </button>
            </form>
        </div>
    );
};