import { useState, useEffect } from "react";
import React from 'react';

export const Person = (props: any) => {


    let f_name = props.first_name;
    let l_name = props.last_name;
    let p_age = props.age;
    let loc = props.locaion;
    let desc = props.description;

    let examplePerson = ["Ola, Normann", 100, "Norge", "tullat"];

    let [person, setPerson] = useState(examplePerson);


    useEffect(() => {
        setPerson([f_name, l_name, p_age, loc, desc ]);
    });


    return (
            <div>{person}</div>
    )
}   