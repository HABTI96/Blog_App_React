import {React ,useState } from 'react';

export function Header({links, title, backgroundColor, color}){
    const [islogin, setIsLoggedIn] = useState(false);

    const onlogtog = ()=>{
        setIsLoggedIn(!islogin)
    }
    return (
        <header style={{ backgroundColor: backgroundColor, color:color}}>
            <nav>
                <a href="">LOGO</a>
                <ul>
                    {links.map(link=>
                        <li>
                            <a href={link.link}>{link.linkText}</a>
                        </li>)}
                </ul>
            </nav>
            <input type="text"  name='habtix' />
            <h1>{title}</h1>
            

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