
const expect    = require("chai").expect;

import BitSwitch from '../src/bit-switch';
import BitSwitchBuild from '../build/bit-switch';


describe("Bit Switch Class", () => {
	describe("Test module", () => {
		it("create with default value", () => {
			const bitSwitch = new BitSwitch(32);
			expect(bitSwitch.get(5)).to.equal(true);	
		});


		it("Assign new value", () => {
			const bitSwitch = new BitSwitch();
			bitSwitch.set(2, 1);
			expect(bitSwitch.get(2)).to.equal(true);
			bitSwitch.set(2, 0);
			expect(bitSwitch.get(2)).to.equal(false);
		});
	});

	
	describe("Test build", () => {
		it("create with default value", () => {
			const bitSwitch = new BitSwitchBuild(32);
			expect(bitSwitch.get(5)).to.equal(true);	
		});


		it("Assign new value", () => {
			const bitSwitch = new BitSwitchBuild();
			bitSwitch.set(2, 1);
			expect(bitSwitch.get(2)).to.equal(true);
			bitSwitch.set(2, 0);
			expect(bitSwitch.get(2)).to.equal(false);
		});
	});
});