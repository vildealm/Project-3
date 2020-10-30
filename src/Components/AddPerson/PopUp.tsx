import React, { useState } from 'react';
import './PopUp.css';
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo';

const ADD_PERSON = gql`
  mutation register($last_name: String!, $first_name: String!, $age: Int!, $location: String!, $description: String!) {
    register(last_name: $last_name, first_name: $first_name, age: $age, location: $location, description: $description)
  }
`;

interface StateProps {
    setModalOpen(val: boolean): void;
}

export const PopUp = (props: StateProps) => {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [location, setLoc] = useState('Dragvoll');
    const [description, setDesc] = useState('');
    const [addPerson, { error, data }] = useMutation(ADD_PERSON,
        { variables: { first_name: first_name, last_name: last_name, age: age, location: location, description: description } });

    return (
        <div>
            <div className="overlay">
                {error ? <p>Oh no! {error.message}</p> : null}
                {data && data.addPerson ? <p>Saved!</p> : null}
                <form className="form-popup" name="formAdd" onSubmit={(e) => { e.preventDefault() }}>
                    <h2> Add a person! </h2>
                    <label>
                        Firstname: <input type="text" name="fname" onChange={(e) => setFirstName(e.target.value)} maxLength={20} required />
                    </label>
                    <label>
                        Lastname: <input type="text" name="lname" onChange={(e) => setLastName(e.target.value)} maxLength={24} required />
                    </label>
                    <label>
                        Age: <input type="number" name="age" min="1" max="100" onChange={(e) => setAge(+e.target.value)} required />
                    </label>
                    <label>
                        Location: <select name="loc" onChange={(e) => setLoc(e.target.value)}>
                            <option value="Dragvoll">Dragvoll</option>
                            <option value="Gløshaugen">Gløshaugen</option>
                            <option value="Kalvskinnet">Kalvskinnet</option>
                            <option value="Handelshøyskolen">Handelshøyskolen</option>
                            </select>
                    </label>
                    <label>
                        Bio: <input type="text" name="bio" onChange={(e) => setDesc(e.target.value)} maxLength={100} required />
                    </label>
                    <button className="submit-form-btn" name="submit-form-btn"type="submit" onClick={() =>
                        first_name &&
                        last_name &&
                        age &&
                        location &&
                        description &&
                        addPerson() && 
                        props.setModalOpen(false)}>
                        Submit
                </button>
                </form>
            </div>
        </div>
    );
};

// <input type="text" onChange={(e) => setLoc(e.target.value)} maxLength={24} required/>