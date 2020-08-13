import React from 'react';
import './Home.css';
import DogCall from'./Home.svg';

function Home() {
    return (
        <div className="relative max-w-4xl m-auto">
            <h1 className="Home-title font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Start Your Day</h1>
            <img src={DogCall} alt="Man calling while taking the dog on a walk"/>
        </div>
    )
}

export default Home