import { useState, useEffect } from "react";
import React from 'react';
import './Person.css'

const Person = (props: any) => {


    let f_name = props.first_name;
    let l_name = props.last_name;
    let p_age = props.age;
    let loc = props.location;
    let desc = props.description;

    let examplePerson = ["Ola, Normann", 100, "Norge", "tullat"];

    let [person, setPerson] = useState(examplePerson);


    useEffect(() => {
        setPerson([f_name, l_name, p_age, loc, desc ]);
    });


    return (
           <div className="person">{f_name} {l_name} <p className = "age"> Age: {p_age}</p></div>
    )
}

export default Person;