import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import styles from './AddUser.module.css';

const AddUser = props => {

    const [enteredUser, setEnteredUser] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error,setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUser.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                msg: 'Please enter a valid name and age(non-empty values)'
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                msg: 'Please enter a valid age(s> 0)'
            });
            return;
        }
        props.onAddUser(enteredUser, enteredAge);
        setEnteredUser('');
        setEnteredAge('');
    }


    const usernameChangeHandler = (event) => {
        setEnteredUser(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const errorHandler = () =>{
        setError(null);
    }
    return (
        <div>
            {
                error ? <ErrorModal title={error.title} msg={error.msg} onClose={errorHandler}/>
                : ''
            }
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">User</label>
                    <input
                        type="text"
                        id="username"
                        onChange={usernameChangeHandler}
                        value={enteredUser}
                    />

                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        id="age"
                        onChange={ageChangeHandler}
                        value={enteredAge}
                    />
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </div>
    );
}

export default AddUser;