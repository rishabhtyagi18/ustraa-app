import TabType from './tabsType';

export const setTabValue = item => {
	return ({
		type: TabType.SET_TAB_VALUE,
		payload: item
	});
}