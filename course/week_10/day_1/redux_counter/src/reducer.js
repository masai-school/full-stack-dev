const INC_COUNTER = "INC_COUNTER"; // This is the type of the action

const DEC_COUNTER = "DEC_COUNTER"; // This is the type of the action


const initialState = {
	count : 0
}

const counter = (state = initialState, action) =>{
	switch(action.type){
		case INC_COUNTER:
			return {
				count : state.count  + action.amount
			}
		case DEC_COUNTER:
			return {
				count : state.count - action.amount
			}
		default : 
			return state
	}
}

export default counter; 

