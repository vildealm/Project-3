import React, { useState } from 'react';
import './PopUp.css';
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo';

const ADD_PERSON = gql`
  mutation register($last_name: String!, $first_name: String!, $age: Int!, $location: String!, $description: String!) {
    register(last_name: $last_name, first_name: $first_name, age: $age, location: $location, description: $description)
  }
`;

export const PopUp = () => {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [location, setLoc] = useState('');
    const [description, setDesc] = useState('');
    let [visible, setVisibility] = useState(''); 

   
    const onClose =(close : boolean)=> {
        if(close){
            setVisibility(visible='none');
        }else{
            setVisibility(visible=''); 
        }
    }

    const [addPerson, { error, data }] = useMutation(ADD_PERSON, 
            {variables: {first_name: first_name, last_name: last_name, age: age, location: location, description: description}});

    return (
        <div>
            <div className="overlay"> 
            {error ? <p>Oh no! {error.message}</p> : null}
            {data && data.addPerson ? <p>Saved!</p> : null}
            <form className="form-popup" style={{display: visible}} onSubmit={(e) => {e.preventDefault()}}>
                <label>
                    Firstname: <input type="text" onChange={(e) => setFirstName(e.target.value)} maxLength={13} required/>  
                </label>
                <label>
                    Lastname: <input type="text" onChange={(e) => setLastName(e.target.value)} maxLength={24} required/>
                </label>
                <label>
                    Age: <input type="number" min="1" max="100" onChange={(e) => setAge(+e.target.value)} required/>
                </label>
                <label>
                    Location: <input type="text" onChange={(e) => setLoc(e.target.value)} maxLength={24} required/>
                </label>
                <label>
                    Bio: <input type="text" onChange={(e) => setDesc(e.target.value)} maxLength={100} required/>
                </label>
                <button className="submit-form-btn" type="submit" onClick={() => 
                    first_name && 
                    last_name && 
                    age &&
                    location && 
                    description && 
                    addPerson() &&
                    onClose(true)}>
                    Submit
                </button>
            </form>
            </div>
        </div>
    );
};

