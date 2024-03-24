import {React ,useState } from 'react';

export function Header({links, title}){
    // we put method 'setIsLoggedIn' in event handlers
    // we intialize 'useState' with 'false' 
    // so 'islogin' will be changed as boolean
    const [islogin, setIsLoggedIn] = useState(false);

    const onlogtog = ()=>{
        setIsLoggedIn(!islogin)
    }
    return (
        <header>
            {islogin ? (
                <>
                    <button onClick={onlogtog}>login</button>
                    <p>you loggedIn</p>
                </>
            ):(
                <>
                    <button onClick={onlogtog}>logout</button >
                    <p>you loggedOut</p>
                </>
            )}
        </header>
    )
}