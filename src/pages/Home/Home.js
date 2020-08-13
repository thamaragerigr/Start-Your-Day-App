import React from 'react'
import DogCall from'./Home.svg'

function Home() {
    return (
        <div class="flex">
            <h1 class="absolute">Start Your Day</h1>
            <img src={DogCall} alt="Man calling while taking the dog on a walk"/>
        </div>
    )
}

export default Home