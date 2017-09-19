// main.js

import BitSwitch from '../src/bit-switch';

const bitSwitch = new BitSwitch(32);

console.log('5', bitSwitch.get(5));


bitSwitch.set(4, 1);
console.log('4', bitSwitch.get(4));

bitSwitch.set(4, 0);
console.log('4', bitSwitch.get(4));