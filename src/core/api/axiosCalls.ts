import axiosInstance from './axiosInstance';

// ------------------------------------------------------------------------------------------------ //
// !Auth
export const logout = async () => {
	const res = await axiosInstance.post('/logout');
	return res;
};

export const userLogin = async (data: { email: string; password: string }): Promise<any> => {
	const res = await axiosInstance.post('/login', data);
	return res.data;
};

export const userForgotPassword = async (data: { email: string }): Promise<any> => {
	const res = await axiosInstance.post('/forgot-password', data);
	return res.data;
};

export const resetPassword = async (data: { key: string; email: string; password: string; password_confirmation: string }): Promise<any> => {
	const res = await axiosInstance.post(`/reset-password`, data);
	return res.data;
};

export const ChangePass = async (data: { old_password: string; password: string; password_confirmation: string }): Promise<any> => {
	const res = await axiosInstance.post(`/change-password`, data);
	return res.data;
};