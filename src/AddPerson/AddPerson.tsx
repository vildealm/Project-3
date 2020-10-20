import React from 'react';
import './AddPerson.css';

const people: any = [
      "Siri",
      "Alexa",
      "Google",
      "Facebook",
      "Twitter",
      "Linkedin",
      "Sinkedin"
];

export const AddPerson = () => {
      return (
      <div>
            <div className="list-container">
                  <ul>
                        {people.map((item:React.ReactNode) => (
                              <li>{item}</li>
                        ))}
                  </ul>
            <button className="addButton">+ Add person</button>
      </div>
      </div> 
      );
}



