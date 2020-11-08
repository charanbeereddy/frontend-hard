export async function loginUser(dispatch, loginPayload) {
	try {
		dispatch({ type: 'REQUEST_LOGIN' });
		let response = await loginPayload;
		let data = await response;

		if (data.user) {
			dispatch({ type: 'LOGIN_SUCCESS', payload: data });
			return data;
		}
		dispatch({ type: 'LOGIN_ERROR', error: data.errors });
		return;
	} catch (error) {
		dispatch({ type: 'LOGIN_ERROR', error: error });
		console.log(error);
	}
}

export async function logout() {
	localStorage.removeItem('currentUser');
	window.location.reload();
}
