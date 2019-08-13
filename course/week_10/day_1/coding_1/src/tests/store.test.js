import * as s from "../index.js"

describe('store test', () =>{
	it("test if store is not undefined", () =>{
		expect(s.store).not.toBe(undefined);
	});
});