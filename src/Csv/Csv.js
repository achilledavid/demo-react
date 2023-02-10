import './Csv.css';

function Csv({ person, onDelete }) {

    return (
        <div className='csv'>
            <p>{person.name.title}.<span>{person.name.last}</span> {person.name.first} | {person.gender} | {person.email} | {person.phone}</p>
            <button onClick={onDelete(person.login.uuid)}>Delete</button>
        </div>
    );
}

export default Csv;