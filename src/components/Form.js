import React from 'react';

function Form() {
    return (
        <div className='grid-container'>
            <div className='grid-item login'>
                <h3 className='login-title'>Log In</h3>
                <div>
                <form id='form'>
                    <label for='fname'>Username</label><br></br>
                    <input type='text' id='fname'></input><br></br><br></br>
                    <label for='pword'>Password</label><br></br>
                    <input type='password' id='pword'></input><br></br><br></br>
                </form>
                <button type='submit' form='form' value='submit'>Submit</button><br></br>
                </div>
            </div>
        </div>
    )
}

export default Form;