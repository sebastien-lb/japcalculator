import { State } from "../state";

export const getPathName = (state: State): string | undefined => {
	if (state.router && state.router.location) {
		return state.router.location.pathname;
	}
	return undefined;
};
