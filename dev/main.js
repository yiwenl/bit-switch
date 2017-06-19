// main.js

import BitSwitch from '../src/bit-switch';

console.log('BitSwitch', BitSwitch);

const bitSwitch = new BitSwitch(32);

console.log(bitSwitch.get(5));


bitSwitch.set(4, 1);
console.log(bitSwitch.get(4));