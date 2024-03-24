import React from "react"
export default function TestLog({islogin, onlogtog}){
    return(
        <>
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

            {/* in the component */}
            {/*
                <TestLog islogin={islogin} onlogtog={()=>{
                setIsLoggedIn(!islogin)
                }}/>
            */}
        </>
    )
}
