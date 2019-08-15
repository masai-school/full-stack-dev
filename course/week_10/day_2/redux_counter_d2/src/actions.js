const INC_COUNTER = "INC_COUNTER"; // This is the type of the action

const DEC_COUNTER = "DEC_COUNTER"; // This is the type of the action

export const incrementCounter = (amount) =>{ // This is the action producer 
	return {
		type : INC_COUNTER,
		amount
	}
}

export const decrementCounter = (amount) =>{
	return {
		type : DEC_COUNTER,
		amount
	}
}