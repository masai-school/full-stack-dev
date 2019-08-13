import reduce from "../reducer"
import * as actions from "../actions.js"

describe('tests for basic add, sub, multiply and divide', () =>{
	const initialState = {
			result : 0,
			resultArray : []
	}
	it('0. test for default state', () =>{
		expect(reduce(undefined, {})).toEqual(initialState)
	});

	it("1. test for basic add", () => {
		expect(reduce(initialState, actions.add(100)).result).toBe(100);
	});

	it("2. test for basic substract", () => {
		expect(reduce(initialState, actions.subtract(50)).result).toBe(-50);
	});

	it("3. test for basic multiply", () => {
		const copyState = {...initialState};
		copyState.result = 20
		expect(reduce(copyState, actions.multiply(5)).result).toBe(100);
	});

	it("4. test for basic divide and immutability", () => {
		const copyState = {...initialState};
		copyState.result = 5020
		const copyCopy = {...copyState}
		expect(reduce(copyState, actions.divide(100)).result).toBe(5020/100);
		expect(copyState).toEqual(copyCopy)
	});

	it("4.a test for all operations", () =>{
		const afterAdd = reduce(initialState, actions.add(100));
		const afterSub = reduce(afterAdd, actions.subtract(50));
		const afterDivide = reduce(afterSub, actions.divide(2));
		expect(reduce(afterDivide, actions.multiply(2)).result).toBe(50);
	});

	it("5. test for array append", () =>{
		const expectedArray = [100, 50, 25, 50];

		const afterAdd = reduce(initialState, actions.add(100));
		const afterSub = reduce(afterAdd, actions.subtract(50));
		const afterDivide = reduce(afterSub, actions.divide(2));
		expect(reduce(afterDivide, actions.multiply(2))).toEqual({
			result : 50,
			resultArray : expectedArray
		});
	});
	
});
