import { useState, useEffect } from "react";
import React from 'react';
import './Person.css'

const Person = (props: any) => {
    let examplePerson = ["Ola, Normann", 100, "Norge", "tullat"];
    let [person, setPerson] = useState(examplePerson);
    
    useEffect(() => {
        setPerson([props.first_name,props.last_name, props.age, props.location, props.description]);
    }, [setPerson, props]);
    return (
           <div className="person">{props.first_name} {props.last_name} <p className = "age"> Age: {props.age}</p></div>
    )
}

export default Person;