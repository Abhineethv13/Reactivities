import React from 'react';
import { duck } from './demo';

interface Props {
    duck: duck;
}

export default function DuckItem({duck}: Props){
    return (
        <div >
        <span>{duck.name}</span>
        <button onClick={() => duck.makeSound(duck.name + ' Quack')}>Make Sound</button>
      </div>
    )
    
}