import React from 'react';

function Button({name, background}) {
    return (
        <div>
            <button className={`border w-[100px] p-1 rounded-xl hover:bg-blue-200 bg-${background}-300`}>
                {name}
            </button>
        </div>
    );
}

export default Button;