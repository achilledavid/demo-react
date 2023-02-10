import './NameGenerator.css';
import { useState } from "react";
import React from "react";
import Person from '../Person/Person';
import Csv from '../Csv/Csv';

const NameGenerator = () => {
    const [persons, setPersons] = useState([]);
    let [test, setTest] = useState(0)

    const addLine = async () => {
        const res = await fetch("https://randomuser.me/api");
        const result = await res.json();

        const person = result.results[0];
        setPersons(persons.concat(person));
    }

    const deleteLine = (id) => () => {
        setPersons(persons.filter(person => person.login.uuid !== id));
    }

    const csv = (event) => {
        setTest(event.target.selectedIndex);
    }

    return <>
        <h1>Générateur de noms</h1>
        <button onClick={addLine}>Ajouter</button>
        <select className='aff' onChange={csv}>
            <option selected>card</option>
            <option>csv</option>
        </select>
        {test === 0 ? (
            <div className='cards'>
                {persons.map((person) => {
                    return (
                        <Person key={person.login.uuid} person={person} onDelete={deleteLine} />
                    )
                })}
            </div>
        ) :
            <div className='cards'>
                {persons.map((person) => {
                    return (
                        <Csv key={person.login.uuid} person={person} onDelete={deleteLine} />
                    )
                })}
            </div>
        }
    </>
};

export default NameGenerator;