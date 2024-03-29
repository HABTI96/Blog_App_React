import React from 'react';

function register(props) {
    return (
        <form onSubmit={HandleRegister}>
            <div>
                <label >Username</label>
                <input type="text" value={name} onChange={(e)=>setUserName()}/>
            </div>
        </form>
    );
}

export default register;