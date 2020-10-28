import React from 'react';
import './PopUpPerson.css';

const imageText = require("../../icon/close.png") as string;

export const PopUpPerson = (props: any) => {
    let person = {
        first_name: String,
        last_name: String,
        age: Number, 
        location: String,
        description: String
    }
    person.first_name = props.first_name;
    person.last_name = props.last_name;
    person.age = props.age;
    person.location = props.location;
    person.description = props.description;
    return(
        <div className="popUp">
            <img src={imageText} /*onClick={() => return null/*setModalOpen(false)}*/ className='closeBtn' height="30" width="30" alt="closeButton"/>
            <h2>{person.first_name} {person.last_name}</h2>
            <p>Age: {person.age}</p>
            <p>From: {person.location}</p>
            <p className="bio"> {person.description}</p>
        </div>
    )
}