import React, { useState } from 'react';

function Navbar() {
    const token = localStorage.getItem('token');
    const links = [
        { link: '/', name: "Home" },
        { link: '#', name: "About" },
        { link: '/products', name: "My Products" }
    ];

    const [open, setOpen] = useState(false);

    // const toggleMenu = () => {
    //     setOpen(!open);
    // };


    return (
        <div className='bg-blue-400'>
            <div className='md:flex md:justify-around md:items-center p-4 md:p-0'>
                <div className='z-10 '>
                    <p>BlogApp</p>
                </div>
                <div className={`text-3xl absolute cursor-pointer md:hidden right-4 top-4 z-[1]`} onClick={()=>setOpen(!open)}>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                <div className={`md:flex  md:items-center grid justify-center md:bg-blue-400 bg-blue-400   ${open ? 'block' : 'hidden'} `}>
                    <ul className='md:flex md:items-center text-xl md:pb-0'>
                        {links.map((link, index) => (
                            <li key={index} className='md:ml-8 '>
                                <a href={link.link}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="log_reg md:flex md:items-center md:pl-6">
                        {token ?
                            <div>
                                <button onClick={()=>{
                                    localStorage.removeItem('token')
                                    window.location.href = '/login';
                                    }}>LogOut</button>
                            </div>
                            :
                            <div>
                                <a href="/login"><button>LogIn</button></a>
                            </div>
                        }
                        <div className='md:ml-3'>
                            <a href="/register">
                                <button className='border px-3 py-1 rounded-md bg-gray-400'>Register</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;


/*
import React, { useState } from 'react';

function Navbar() {
    const token = localStorage.getItem('token');
    const links = [
        { link: '/', name: "Home" },
        { link: '#', name: "About" },
        { link: '/products', name: "Product" }
    ];

    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    const logout = () => {
        localStorage.removeItem('token');
    };

    return (
        <div className='bg-blue-700'>
            <div className='container mx-auto relative'>
                <div className={`text-3xl absolute cursor-pointer md:hidden bg-yellow-400 mr-4`} onClick={toggleMenu}>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                <div className={`md:flex md:justify-between ${open ? 'block' : 'hidden'} md:items-center`}>
                    <ul className='md:flex md:items-center text-xl md:pb-0'>
                        {links.map((link, index) => (
                            <li key={index} className='md:ml-8'>
                                <a href={link.link}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="log_reg md:flex md:items-center">
                        {token ?
                            <div>
                                <button onClick={logout}>LogOut</button>
                            </div>
                            :
                            <div>
                                <a href="/login"><button>LogIn</button></a>
                            </div>
                        }
                        <div className='md:ml-3'>
                            <a href="/register">
                                <button className='border px-3 py-1 rounded-md bg-gray-400'>Register</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
*/