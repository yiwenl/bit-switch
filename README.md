# Bit Switch [![Build Status](https://travis-ci.org/yiwenl/bit-switch.png?branch=master)](https://travis-ci.org/yiwenl/bit-switch)
A helper class to store on/off states in one integer.

### usage
```
const bitSwitch = new BitSwitch(32);
console.log('5', bitSwitch.get(5));	//	true
console.log('3', bitSwitch.get(3));	//	false


bitSwitch.set(4, 1);
console.log('4', bitSwitch.get(4));	//	true
bitSwitch.set(4, 0);
console.log('4', bitSwitch.get(4));	//	false

```