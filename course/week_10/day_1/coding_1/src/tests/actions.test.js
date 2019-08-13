import * as actions from "../actions.js"

describe('actionsTest', () =>{
	it('Test for ADD action', () =>{
		const val = 200;
		const expectedAction = {
			type : "ADD",
			value : val
		}
		expect(actions.add(val)).toEqual(expectedAction);
	});

	it('Test for subtract action', () =>{
		const val = 10;
		const expectedAction = {
			type : "SUBTRACT",
			value : val
		}
		expect(actions.subtract(val)).toEqual(expectedAction);
	});

	it('Test for multiply action', () =>{
		const val = 200;
		const expectedAction = {
			type : "MULTIPLY",
			value : val
		}
		expect(actions.multiply(val)).toEqual(expectedAction);
	});

	it('Test for divide action', () =>{
		const val = 123;
		const expectedAction = {
			type : "DIVIDE",
			value : val
		}
		expect(actions.divide(val)).toEqual(expectedAction);
	});

});