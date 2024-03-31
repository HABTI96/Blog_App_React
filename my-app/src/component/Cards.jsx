import React from 'react';

export default function Cards({name, price}) {
    return (
        <div >   
            <div class="max-w-[300px] rounded overflow-hidden shadow-lg m-3">
                <img class="w-full" src="https://via.placeholder.com/350x150"/>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{name}</div>
                    <p>{price} MAD</p>
                    <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
                    eaque, exercitationem praesentium nihil.
                    </p>
                </div>
            </div>
        </div>
    );
}