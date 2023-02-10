import './Person.css';

function Person({ person, onDelete }) {

    return (
        <div className='card'>
            <div className='left'>
                <img src={person.picture.large}></img>
            </div>
            <div className='right'>
                <div className='head'>
                    <p>{person.name.title}.<span>{person.name.last}</span> {person.name.first}</p>
                </div>
                <p>Gender : {person.gender}</p>
                <p>--- --- ---</p>
                <p>Email : {person.email}</p>
                <p>Phone : {person.phone}</p>
                <div>
                    <button onClick={onDelete(person.login.uuid)}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default Person;