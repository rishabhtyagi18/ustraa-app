import ToggleBarTypes from './toggleBarType';

const INITIAL_STATE = {
	toggle: false,
	hidden: true
}

const ToggleBarReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case ToggleBarTypes.TOGGLE_MORE_ITEMS: 
		return {
			...state,
			toggle: !state.toggle
		};
		case ToggleBarTypes.TOGGLE_DROPDOWN_HIDDEN: 
		return {
			...state,
			hidden: !state.hidden
		};
		default:
		return state;
	}
}

export default ToggleBarReducer;