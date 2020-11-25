import TabType from "./tabsType";

const INITIAL_STATE = {
  value: 0,
};

const TabReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case TabType.SET_TAB_VALUE: {
      return { ...state, value: payload };
    }
    default:
      return state;
  }
};

export default TabReducer;
