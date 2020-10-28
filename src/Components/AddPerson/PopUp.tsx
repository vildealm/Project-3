import React, { useState } from 'react';
import './PopUp.css';
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo';

const ADD_PERSON = gql`
  mutation register($firstname: String!, $lastname: String!, $age: Int!, $location: String!, $description: String!) {
    addPerson(firstname: $firstname, lastname: $lastname, age: $age, location: $location, description: $description) {
      user_id
      first_name
      last_name
      age
      location
      description
    }
  }
`;

//$firstname: String!, $lastname: String!, $age: Int!, $location: String!, $description: String!)

interface PersonInventory {
    user_id: number;
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

    const [addPerson, { error, data }] = useMutation(ADD_PERSON, 
            {variables: {first_name, last_name, age: +age, location, description }});

    return (
        <div>
            {error ? <p>Oh no! {error.message}</p> : null}
            {data && data.addPerson ? <p>Saved!</p> : null}
            <form className="form-popup" onSubmit={(e) => {e.preventDefault();}}>
                <label>
                    Firstname: <input type="text" onChange={(e) => setFirstName(e.target.value)}/>
                    {console.log("Firstname: " + first_name)}
                </label>
                <label>
                    Lastname: <input type="text" onChange={(e) => setLastName(e.target.value)}/>
                    {console.log("Lastname: " + last_name)}
                </label>
                <label>
                    Age: <input type="number" onChange={(e) => setAge(+e.target.value)} required/>
                </label>
                <label>
                    Location: <input type="text" onChange={(e) => setLoc(e.target.value)} required/>
                </label>
                <label>
                    Bio: <input type="text" onChange={(e) => setDesc(e.target.value)} required/>
                </label>
                <button className="submit-form-btn" type="submit" onClick={() => 
                    first_name && 
                    last_name && 
                    age &&
                    location && 
                    description && 
                    addPerson()}>
                    Submit
                </button>
            </form>
        </div>
    );
};

