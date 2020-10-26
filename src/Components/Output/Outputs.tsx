import React, { useState } from 'react';

export const Outputs = (props: any) => {

    let content = null;

    return(
    <div key = {props.person.id}>
    <p> {props.person.location} </p>
    
    {content}
    </div>
    )

    


}

