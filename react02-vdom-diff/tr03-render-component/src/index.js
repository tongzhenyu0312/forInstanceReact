import React from 'react';
import TinyReact from './TinyReact';

const Heart = () => (<div>&hearts;</div>)

const HeartVdom = <Heart></Heart>;
console.log("🚀 Logger:  - HeartVdom", HeartVdom);

TinyReact.render(HeartVdom, document.getElementById('root'));

